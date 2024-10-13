import boto3
from datetime import datetime

def lambda_handler(event, context):
    s3_client = boto3.client('s3')
    bucket_name = 'your-backup-bucket-name'
    
    # Get today's date in the format that matches your file naming
    today = datetime.today().strftime('%Y-%m-%d')
    
    # List objects with today's date
    response = s3_client.list_objects_v2(Bucket=bucket_name, Prefix=today)
    
    if 'Contents' in response:
        # Sort by name or other criteria and select one to retain
        backups_today = sorted(response['Contents'], key=lambda x: x['Key'])
        backup_to_retain = backups_today[0]  # Retain the first backup, modify as needed
        
        # Update tags for the retained backup
        s3_client.put_object_tagging(
            Bucket=bucket_name,
            Key=backup_to_retain['Key'],
            Tagging={
                'TagSet': [
                    {
                        'Key': 'ToBeDeleted',
                        'Value': 'False'
                    }
                ]
            }
        )