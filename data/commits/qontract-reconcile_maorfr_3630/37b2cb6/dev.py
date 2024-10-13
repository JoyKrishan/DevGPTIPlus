
    def can_i(self, permission: str) -> bool:
        return bool(
            self.jira.my_permissions(projectKey=self.project)["permissions"][
                permission
            ]["havePermission"]
        )

    def can_create_issues(self) -> bool:
        return self.can_i("CREATE_ISSUES")