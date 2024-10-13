from environs import Env

env = Env()
env.read_env()  # read .env file, if it exists

# Define variables with type casting
cache_dir_path = env.str("CACHE_DIR_PATH", ".cache")
cache_enabled = env.bool("CACHE_ENABLED", True)
cache_verbosity = env.int("CACHE_VERBOSITY", 0)
db_echo = env.bool("DB_ECHO", False)
db_fname = env.str("DB_FNAME", "openadapt.db")