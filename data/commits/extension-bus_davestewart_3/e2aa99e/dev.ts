    code: BusErrorCode;
    target?: string;
type BusErrorCode = 'no_response' | 'no_handler' | 'handler_error';
    error?: BusResponseError;
};
/**
 * Bus response error info
 * @internal
 */
type BusResponseError = {
    code: BusErrorCode;
    message: string;
    type?: string;
export { type Bus, type BusError, type BusErrorCode, type BusFactory, type BusOptions, type BusRequest, type BusResponse, type BusResponseError, type Handler, type HandlerFunction, type Handlers, makeBus };