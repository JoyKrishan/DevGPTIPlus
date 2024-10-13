from pydantic import BaseModel, Field
from typing import Optional

class Config(BaseModel):
    cache_dir_path: str = Field(default=".cache")
    cache_enabled: bool = Field(default=True)
    cache_verbosity: int = Field(default=0)
    db_echo: bool = Field(default=False)
    db_fname: str = Field(default="openadapt.db")

config = Config(_env_file='.env')