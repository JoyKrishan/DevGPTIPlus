  code: BusErrorCode,
  target?: string,
export type BusErrorCode =
  error?: BusResponseError
}

/**
 * Bus response error info
 * @internal
 */
export type BusResponseError = {
  code: BusErrorCode
  message: string
  type?: string