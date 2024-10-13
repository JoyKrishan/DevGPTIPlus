    TODAY=$(date +%Y-%m-%d)
    FIRST_OF_MONTH=$(date +%Y-%m-01)
    START_OF_WEEK=$(date -d "last monday" +%Y-%m-%d)
    TAG="Retention:Short"  # default to 3 days

    # Check if any backups exist for the month, week, or today
    MONTHLY_BACKUP=$(find data/backups -newermt $FIRST_OF_MONTH | head -1)
    WEEKLY_BACKUP=$(find data/backups -newermt $START_OF_WEEK | head -1)
    DAILY_BACKUP=$(find data/backups -newermt $TODAY | head -1)

    if [ -z "$MONTHLY_BACKUP" ]; then
        TAG="Retention:Monthly"
    elif [ -z "$WEEKLY_BACKUP" ]; then
        TAG="Retention:Weekly"
    elif [ -z "$DAILY_BACKUP" ]; then
        TAG="Retention:Daily"
    fi

    aws s3 cp "$OUT_FILE" "s3://$S3_BACKUP_BUCKET/$BACKUP_FILENAME" --tagging "Retention=$TAG"