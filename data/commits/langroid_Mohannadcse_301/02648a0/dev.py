from pydantic import BaseModel, Field


# Test that malformed tool messages results in proper err msg
class NumPair(BaseModel):
    xval: int
    yval: int


class NabroskiTool(ToolMessage):
    request: str = "nabroski"
    purpose: str = "to request computing the Nabroski transform of <num_pair>"
    num_pair: NumPair

    def handle(self) -> str:
        return str(3 * self.num_pair.xval + self.num_pair.yval)


wrong_nabroski_tool = """
{
"request": "nabroski",
"num_pair": {
    "xval": 1
    }
}
"""


@pytest.mark.parametrize("use_functions_api", [True, False])
def test_agent_malformed_tool(
    test_settings: Settings,
    use_functions_api: bool,
):
    cfg = ChatAgentConfig(
        use_tools=not use_functions_api,
        use_functions_api=use_functions_api,
    )
    agent = ChatAgent(cfg)
    agent.enable_message(NabroskiTool)
    response = agent.agent_response(wrong_nabroski_tool)
    assert "num_pair" in response.content and "yval" in response.content