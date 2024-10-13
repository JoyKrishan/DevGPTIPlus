# Load environment variables from .env file
load_dotenv()

# Define configuration variables as globals with default values from .env
CACHE_DIR_PATH = os.getenv("CACHE_DIR_PATH", ".cache")
CACHE_ENABLED = os.getenv("CACHE_ENABLED", "True").lower() == "true"
CACHE_VERBOSITY = int(os.getenv("CACHE_VERBOSITY", 0))
DB_ECHO = os.getenv("DB_ECHO", "False").lower() == "true"
DB_FNAME = os.getenv("DB_FNAME", "openadapt.db")
ERROR_REPORTING_ENABLED = os.getenv("ERROR_REPORTING_ENABLED", "True").lower() == "true"
ERROR_REPORTING_DSN = os.getenv(
    "ERROR_REPORTING_DSN",
    "https://dcf5d7889a3b4b47ae12a3af9ffcbeb7@app.glitchtip.com/3798",
)
ERROR_REPORTING_BRANCH = os.getenv("ERROR_REPORTING_BRANCH", "main")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "<set your api key in .env>")
OPENAI_MODEL_NAME = os.getenv("OPENAI_MODEL_NAME", "gpt-3.5-turbo")
RECORD_READ_ACTIVE_ELEMENT_STATE = (
    os.getenv("RECORD_READ_ACTIVE_ELEMENT_STATE", "False").lower() == "true"
)
# TODO: remove?
REPLAY_STRIP_ELEMENT_STATE = (
    os.getenv("REPLAY_STRIP_ELEMENT_STATE", "True").lower() == "true"
)
# TODO: ignore warnings by default on GUI
IGNORE_WARNINGS = os.getenv("IGNORE_WARNINGS", "False").lower() == "true"
MAX_NUM_WARNINGS_PER_SECOND = int(os.getenv("MAX_NUM_WARNINGS_PER_SECOND", 5))
WARNING_SUPPRESSION_PERIOD = int(os.getenv("WARNING_SUPPRESSION_PERIOD", 1))
MESSAGES_TO_FILTER = os.getenv(
    "MESSAGES_TO_FILTER", "Cannot pickle Objective-C objects"
).split(",")

# ACTION EVENT CONFIGURATIONS
ACTION_TEXT_SEP = os.getenv("ACTION_TEXT_SEP", "-")
ACTION_TEXT_NAME_PREFIX = os.getenv("ACTION_TEXT_NAME_PREFIX", "<")
ACTION_TEXT_NAME_SUFFIX = os.getenv("ACTION_TEXT_NAME_SUFFIX", ">")

# PERFORMANCE PLOTTING CONFIGURATION
PLOT_PERFORMANCE = os.getenv("PLOT_PERFORMANCE", "True").lower() == "true"

# CAPTURE CONFIGURATION
CAPTURE_DIR_PATH = os.getenv("CAPTURE_DIR_PATH", "captures")

# APP CONFIGURATIONS
APP_DARK_MODE = os.getenv("APP_DARK_MODE", "False").lower() == "true"

# SCRUBBING CONFIGURATIONS
SCRUB_ENABLED = os.getenv("SCRUB_ENABLED", "False").lower() == "true"
SCRUB_CHAR = os.getenv("SCRUB_CHAR", "*")
SCRUB_LANGUAGE = os.getenv("SCRUB_LANGUAGE", "en")
# TODO support lists in getenv_fallback
SCRUB_FILL_COLOR = int(os.getenv("SCRUB_FILL_COLOR", 0x0000FF), 16)
SCRUB_CONFIG_TRF = {
    "nlp_engine_name": os.getenv("SCRUB_CONFIG_TRF_nlp_engine_name", "spacy"),
    "models": [
        {
            "lang_code": os.getenv("SCRUB_CONFIG_TRF_models_0_lang_code", "en"),
            "model_name": os.getenv(
                "SCRUB_CONFIG_TRF_models_0_model_name", "en_core_web_trf"
            ),
        }
SCRUB_PRESIDIO_IGNORE_ENTITIES = os.getenv(
    "SCRUB_PRESIDIO_IGNORE_ENTITIES",
    # Default list of entities
    "US_PASSPORT,US_DRIVER_LICENSE,CRYPTO,UK_NHS,PERSON,CREDIT_CARD,"
    "US_BANK_NUMBER,PHONE_NUMBER,US_ITIN,AU_ABN,DATE_TIME,NRP,SG_NRIC_FIN,"
    "AU_ACN,IP_ADDRESS,EMAIL_ADDRESS,URL,IBAN_CODE,AU_TFN,LOCATION,"
    "AU_MEDICARE,US_SSN,MEDICAL_LICENSE",
).split(",")

SCRUB_KEYS_HTML = os.getenv(
    "SCRUB_KEYS_HTML",
    "text,canonical_text,title,state,task_description,key_char,"
    "canonical_key_char,key_vk,children",
).split(",")

# PERFORMANCE PLOTTING CONFIGURATION (Continued)
PLOT_PERFORMANCE = os.getenv("PLOT_PERFORMANCE", "True").lower() == "true"

# VISUALIZATION CONFIGURATIONS
VISUALIZE_DARK_MODE = os.getenv("VISUALIZE_DARK_MODE", "False").lower() == "true"
VISUALIZE_RUN_NATIVELY = os.getenv("VISUALIZE_RUN_NATIVELY", "True").lower() == "true"
VISUALIZE_DENSE_TREES = os.getenv("VISUALIZE_DENSE_TREES", "True").lower() == "true"
VISUALIZE_ANIMATIONS = os.getenv("VISUALIZE_ANIMATIONS", "True").lower() == "true"
VISUALIZE_EXPAND_ALL = os.getenv("VISUALIZE_EXPAND_ALL", "False").lower() == "true"
VISUALIZE_MAX_TABLE_CHILDREN = int(os.getenv("VISUALIZE_MAX_TABLE_CHILDREN", 10))

# Calculate and save the difference between 2 neighboring screenshots
SAVE_SCREENSHOT_DIFF = os.getenv("SAVE_SCREENSHOT_DIFF", "False").lower() == "true"

SPACY_MODEL_NAME = os.getenv("SPACY_MODEL_NAME", "en_core_web_trf")
PRIVATE_AI_API_KEY = os.getenv("PRIVATE_AI_API_KEY", "<set your api key in .env>")

    rval = os.getenv(var_name) or globals()[var_name]
for key in globals().keys():
                and val != globals()[key]