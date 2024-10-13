from google.auth import exceptions
from google.oauth2 import service_account
    def _get_client(self):
        """Get a storage client using the provided credentials or default credentials."""
        if self.credentials:
            try:
                credentials = service_account.Credentials.from_service_account_file(
                    self.credentials
                )
                client = storage.Client(credentials=credentials, project=self.project_id)
            except exceptions.GoogleAuthError as e:
                raise Exception(f"Failed to load specified credentials: {e}")
        else:
            # Will attempt to use default credentials
            try:
                client = storage.Client(project=self.project_id)
            except exceptions.DefaultCredentialsError as e:
                raise Exception(f"Could not automatically determine credentials: {e}")
        return client

        client = self._get_client()