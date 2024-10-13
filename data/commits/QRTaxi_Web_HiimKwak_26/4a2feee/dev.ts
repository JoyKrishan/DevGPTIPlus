
export interface CheckStatusPayload {
  assign_id: UserInfoResponse['id'];
}

export interface CheckStatusResponse {
  status: string;
}
export interface CheckStatusFailedResponse {
  detail: string;
}