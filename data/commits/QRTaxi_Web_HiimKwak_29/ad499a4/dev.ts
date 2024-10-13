/* getUserLocation */
/* postUserInfo */
/* getDriverInfo */
/* postCancelBooking */
/* postCheckStatus */
export type CheckStatusPayload = CancelBookingPayload;

export interface CheckStatusResponse {
  status: string;
}

export type CheckStatusFailedResponse = CancelBookingResponse;

/* Recoil Types */
export type UserAssignID = UserInfoResponse['hashed_assign_id'];
