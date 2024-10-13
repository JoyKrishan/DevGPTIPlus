import requests

# Jira API endpoint to check permissions
api_url = 'https://your-jira-url.com/rest/api/2/mypermissions'

# Replace 'username' and 'password' with your Jira credentials
auth = ('username', 'password')

# Specify the project key associated with the board
project_key = 'YOUR_PROJECT_KEY'

# Send a GET request to the API endpoint
response = requests.get(api_url, auth=auth, params={'projectKey': project_key})

if response.status_code == 200:
    permissions = response.json().get('permissions', {})
    create_issue_permission = permissions.get('CREATE_ISSUE', False)

    if create_issue_permission:
        print(f"You have permissions to create an issue on project {project_key}.")
    else:
        print(f"You do not have permissions to create an issue on project {project_key}.")
else:
    print("Failed to retrieve permissions from the Jira API.")