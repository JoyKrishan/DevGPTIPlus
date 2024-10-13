Failed calls return `null`, and may trigger a warning if configured:

```
extension-bus[popup] ReferenceError at "background:foo/bar": foo is not defined
```
const result = await bus.call('foo/bar')
If there is an error, the property will contain further information:
  code: 'handler_error',
  message: 'foo is not defined',
  target: 'background:foo/bar',
The following table explains the error codes:
| Code            | Message                                                      | Description                                                  |
| --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `no_response`   | The message port closed before a response was received.      | There were no `target` buses loaded that matched the source bus' `target` property, or multiple buses were called via (`*`) and none contained matching handlers |
|                 | Could not establish connection. Receiving end does not exist. | The targeted tab didn't exist, was discarded, was never loaded, or wasn't reloaded after reloading the extension |
| `no_handler`    | No handler                                                   | A named `target` bus was found, but did not contain a handler at the supplied `path` |
| `handler_error` | *The error message*                                          | A handler was found, but threw an error when called (see the `target`'s console for the full `error` object) |
Note that because of the way messaging passing works, a `no_handler` error will only be recorded when targeting a **single** *named* bus. This is because when targeting multiple (bus) listeners, the first listener to reply wins, so in order not to prevent a _potential_ matched bus from replying, unmatched buses **must** stay quiet; thus if _no_ buses match or contain handlers, the error can only be `no_response`.
await bus.call('*:unknown') || bus.error?.code // 'no_response'
await bus.call('background:unknown') || bus.error?.code // 'no_handler'
  // rejects a BusError object, and should be handled by try/catch or .catch(err)
  // custom function, from which you can return a value
  onError: (request: BusRequest, response: BusResponse, error: Bus) => { ... },
In the console, select the "Extension Bus Demo" option from the script context dropdown, then:
bus.call('fail').catch((err: BusError) => {
  console.log('Error:', err)
})
Error: {
  code: 'handler_error',
  message: 'foo is not defined',
  target: 'page:fail'
}

## Support

This project open sources code from my main project [Control Space](https://controlspace.app/), a super-interactive tab manager for those who juggle **a lot** of tasks:



[![control space](https://controlspace.app/images/home/examples/actions.png)](https://controlspace.app)



If you think Control Space might work for you, click above to find out more and give it a spin.

Thanks!

Dave