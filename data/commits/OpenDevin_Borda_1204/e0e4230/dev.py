import json
from fastapi import Depends, FastAPI, HTTPException, Query, Response, WebSocket, status
from fastapi.responses import JSONResponse, RedirectResponse
    '''
    '''
            logger.info(
                f'Invalid or missing credentials, generating new session ID: {sid}'
            )
def list_files(
    relpath: str = Query(None, description='Relative path from workspace base')
):
    if (
        not full_path.exists()
        or not full_path.is_dir()
        or not str(full_path).startswith(str(base_path))
    ):
@app.get('/api/plan')
def get_plan(
    credentials: HTTPAuthorizationCredentials = Depends(security_scheme),
):
    sid = get_sid_from_token(credentials.credentials)
    agent = agent_manager.sid_to_agent[sid]
    controller = agent.controller
    if controller is not None:
        state = controller.get_state()
        if state is not None:
            return JSONResponse(
                status_code=status.HTTP_200_OK,
                content=json.dumps(
                    {
                        'mainGoal': state.plan.main_goal,
                        'task': state.plan.task.to_dict(),
                    }
                ),
            )
    return Response(status_code=status.HTTP_204_NO_CONTENT)

