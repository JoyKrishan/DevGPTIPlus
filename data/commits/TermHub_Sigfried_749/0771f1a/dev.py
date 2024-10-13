from fastapi import APIRouter, Query, Request, Body

@router.get("/next-api-call-group-id")
def next_api_call_group_id() -> int:
    """Get next API call group ID"""
    with get_db_connection() as con:
        id = sql_query_single_col(con, "SELECT nextval('api_call_group_id_seq')")[0]
    return id


@router.post("/start-session")
def start_session(body: Dict[str, str] = Body(...)) -> Dict[str, int]:
    page_url = body.get("page_url")
    with get_db_connection() as con:
        session_id = next_api_call_group_id();
        q = text("""INSERT INTO sessions (session_id, screen_log) VALUES (:session_id, ARRAY[:page_url])""")
        run_sql(con, q, {"session_id": session_id, "page_url": page_url})
    return {"session_id": session_id}


@router.post("/continue-session")
def continue_session(body: Dict[str, str] = Body(...)):
    page_url = body.get("page_url")
    session_id = body.get("session_id")

    with get_db_connection() as con:
        # session = sql_query(
        #     con,
        #     "SELECT * FROM sessions WHERE session_id = :session_id FOR UPDATE",
        #     {"session_id": "session_id"})
        q = text("""UPDATE sessions SET screen_log = screen_log || ARRAY[:page_url] WHERE session_id = :session_id""")
        run_sql(con, q, {"session_id": session_id, "page_url": page_url})
        # await con.commit()
        # return {"session_id": session_id}


from sqlalchemy import select, update
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.dialects.postgresql import JSONB

async def update_jsonb_data(session: AsyncSession, table, primary_key, new_data):
    # Start a transaction
    async with session.begin():
        # Select and lock the specific row
        stmt = select(table).where(table.c.id == primary_key).with_for_update()
        result = await session.execute(stmt)
        row = result.scalar_one_or_none()

        if row:
            # Update the jsonb column
            updated_jsonb = row.data.copy()
            updated_jsonb.update(new_data)  # Assume 'data' is the jsonb column

            update_stmt = (
                update(table)
                .where(table.c.id == primary_key)
                .values(data=updated_jsonb)
            )
            await session.execute(update_stmt)

            # Commit the transaction
            await session.commit()


@router.get("/search/")
async def search(session_id: str, q: str, page: int = 1, per_page: int = 10):
    async with get_db_connection() as con:
        result = await con.execute(
            select([sessions_table.c.sent_ids]).where(sessions_table.c.session_id == session_id))
        session = result.fetchone()
        if session is None:
            raise HTTPException(status_code=404, detail="Session not found")

        sent_ids = session.sent_ids
        matching_items = [item for item in items if q.lower() in item["name"].lower() and item["id"] not in sent_ids]

        # Implement pagination
        start = (page - 1) * per_page
        end = start + per_page
        result_items = matching_items[start:end]

        # Update the session with the IDs of sent items
        new_sent_ids = sent_ids + [item["id"] for item in result_items]
        await con.execute(
            update(sessions_table).where(sessions_table.c.session_id == session_id).values(sent_ids=new_sent_ids))
        await con.commit()

        return {"page": page, "per_page": per_page, "results": result_items}



@router.get("/concept-search")
async def get_concepts_route(search: str) -> List:
    q = """
      SELECT *
      FROM concepts_with_counts
      WHERE concept_name ILIKE %s
    """
    with get_db_connection() as con:
        results = sql_query(con, q, ['%' + search + '%'])
    return results

