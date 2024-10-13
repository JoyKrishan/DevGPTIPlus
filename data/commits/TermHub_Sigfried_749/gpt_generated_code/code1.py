from sqlalchemy import create_engine, event
from sqlalchemy.engine import Connection
from sqlalchemy.pool import QueuePool

SCHEMA = "your_schema"

def get_pg_connect_url(local: bool = False) -> str:
    # Implement your logic to get the connection URL based on whether it's local or production
    pass

def set_search_path(dbapi_connection, connection_record):
    """Set the search_path when connecting."""
    if SCHEMA:
        cursor = dbapi_connection.cursor()
        cursor.execute(f"SET SESSION search_path='{SCHEMA}'")
        cursor.close()

def create_connection_from_pool(local=False, schema: str = SCHEMA) -> Connection:
    engine = create_engine(
        get_pg_connect_url(local),
        poolclass=QueuePool,
        isolation_level="AUTOCOMMIT"
    )
    event.listen(engine, "connect", set_search_path)
    connection = engine.connect()
    return connection