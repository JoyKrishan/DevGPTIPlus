from decouple import config

CACHE_DIR_PATH = config('CACHE_DIR_PATH', default='.cache')
CACHE_ENABLED = config('CACHE_ENABLED', cast=bool, default=True)
CACHE_VERBOSITY = config('CACHE_VERBOSITY', cast=int, default=0)
DB_ECHO = config('DB_ECHO', cast=bool, default=False)
DB_FNAME = config('DB_FNAME', default='openadapt.db')