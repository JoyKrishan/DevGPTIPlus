import os
import time 
import logging
from logging.handlers import RotatingFileHandler

def setup_logger(module_name, console_handler=True):
    log_dir = os.path.join('files', 'logs', module_name)
    os.makedirs(log_dir, exist_ok=True)
    
    timestamp = time.strftime("%Y%m%d-%H%M%S")
    log_file = os.path.join(log_dir, f'{timestamp}.log')
    
    logger = logging.getLogger()
    logging.getLogger("urllib3").setLevel(logging.WARNING) # Suppress debug logging for urllib3
    logger.setLevel(logging.INFO)
    
    file_handler = RotatingFileHandler(
        log_file, 
        maxBytes=10*1024*1024,  # 10MB
        backupCount=5
    )
    file_handler.setFormatter(
        logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
    )
    if console_handler:
        console_handler = logging.StreamHandler()
        console_handler.setFormatter(
            logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
        )
        logger.addHandler(console_handler)
    
    logger.addHandler(file_handler)

    return logger