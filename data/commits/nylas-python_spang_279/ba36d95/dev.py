from nylas.models.free_busy import GetFreeBusyResponse, GetFreeBusyRequest

    def get_free_busy(
        self, identifier: str, request_body: GetFreeBusyRequest
    ) -> Response[GetFreeBusyResponse]:
        """
        Get free/busy info for a Calendar.

        Args:
            identifier: The grant ID or email account to get free/busy for.
            request_body: The request body to send to the API.

        Returns:
            Response: The free/busy response from the API.
        """
        json_response = self._http_client._execute(
            method="POST",
            path=f"/v3/grants/{identifier}/calendars/free-busy",
            request_body=request_body,
        )

        return Response.from_dict(json_response, GetFreeBusyResponse)