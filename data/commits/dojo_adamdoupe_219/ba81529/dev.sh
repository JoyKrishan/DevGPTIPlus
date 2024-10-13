define BACKUP_AES_KEY_FILE
define S3_BACKUP_BUCKET
define AWS_DEFAULT_REGION
define AWS_ACCESS_KEY_ID
define AWS_SECRET_ACCESS_KEY
# Create the AES key file if it does not exist
if [ ! -z ${BACKUP_AES_KEY_FILE+x} ] && [ ! -f ${BACKUP_AES_KEY_FILE} ]
then
    openssl rand 214 > "${BACKUP_AES_KEY_FILE}"
fi
