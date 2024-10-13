    {% if with_slack %}
    {% endif %}
def get_jira_boards(with_slack: Optional[bool] = True):
    query = Template(JIRA_BOARDS_QUERY).render(with_slack=with_slack)
    return gqlapi.query(query)["jira_boards"]