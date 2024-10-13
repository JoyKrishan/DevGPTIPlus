function makeResponse(target, payload) {
  return { target, ...payload };
}
        sendResponse(makeResponse(source, data2));
          const data2 = error instanceof Error ? { message: error.message, type: error.name } : { message: error };
            error: { code: "handler_error", ...data2 }
        return send({ error: { code: "no_handler", message: `No handler` } });
    var _a, _b, _c, _d;
      const code = ((_b = response == null ? void 0 : response.error) == null ? void 0 : _b.code) || "no_response";
      const message = ((_c = response == null ? void 0 : response.error) == null ? void 0 : _c.message) ?? chromeError ?? "Unknown";
      const type = ((_d = response == null ? void 0 : response.error) == null ? void 0 : _d.type) || "Error";
      const target2 = `${request.target}:${request.path}`;
        code,
        message,
        target: target2
        return reject(bus.error);
      if (onError === "warn" && code !== "no_response") {
        console.warn(`extension-bus[${source}] ${type} at "${target2}": ${message}`);
        return resolve(onError(request, response, bus));