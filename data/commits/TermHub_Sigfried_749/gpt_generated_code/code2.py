from fastapi import FastAPI, HTTPException
import databases
from databases import Database

DATABASE_URL = "postgresql://user:password@localhost/db_name"

app = FastAPI()

database = Database(DATABASE_URL)