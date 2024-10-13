  UserInfoFailedResponse,
  DriverInfoFailedResponse,
  CancelBookingFailedResponse,
import { AxiosError, AxiosResponse } from 'axios';
      const response: AxiosResponse<UserLocationResponse> = await client.get(
      const axiosError = error as AxiosError<UserLocationResponse>;
      if (axiosError.response) {
        return axiosError.response.data;
      } else {
        throw new Error();
      const response: AxiosResponse<UserInfoResponse> = await client.post(
      const axiosError = error as AxiosError<UserInfoFailedResponse>;
      if (axiosError.response) {
        return axiosError.response.data;
      } else {
        throw new Error();
      const response: AxiosResponse<DriverInfoResponse> = await client.get(
      const axiosError = error as AxiosError<DriverInfoFailedResponse>;
      if (axiosError.response) {
        return axiosError.response.data;
      } else {
        throw new Error();
      const response: AxiosResponse<CancelBookingResponse> = await client.post(
      const axiosError = error as AxiosError<CancelBookingFailedResponse>;
      if (axiosError.response) {
        return axiosError.response.data;
      } else {
        throw new Error();