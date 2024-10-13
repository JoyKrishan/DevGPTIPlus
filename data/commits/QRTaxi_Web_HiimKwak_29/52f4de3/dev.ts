export interface UserInfoFailedResponse {
  detail: string;
  error?: {
    user_phone: [string];
  };
}

export interface DriverInfoFailedResponse {
  detail: string;
  error?: [string];
}


export type CancelBookingFailedResponse = DriverInfoFailedResponse;

export type CheckStatusPayload = CancelBookingPayload;

export type CheckStatusFailedResponse = CancelBookingResponse;