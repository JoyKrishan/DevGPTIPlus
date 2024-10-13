@app.get("/users/{user_id}")
async def read_user(user_id: int):
    query = "SELECT * FROM users WHERE id = :user_id"
    values = {"user_id": user_id}
    row = await database.fetch_one(query=query, values=values)
    if row is None:
        raise HTTPException(status_code=404, detail="User not found")
    return row