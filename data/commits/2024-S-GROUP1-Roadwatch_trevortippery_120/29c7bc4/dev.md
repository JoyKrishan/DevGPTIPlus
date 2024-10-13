These keys enable a secure line of communication between the server, service worker, and client. While this isn't needed for all browsers, it's a _requirement_ for all Chromium-based browsers.
## Public Key

In `server/.env`, add the following line:
In `client/.env`, add the following line:

```
VITE_NOTIFICATION_PUBLIC_KEY=<your public key>
```

## Private Key

In `server/.env`, add the following line:
In `client/.env`, add the following line:

```
VITE_NOTIFICATION_PRIVATE_KEY=<your private key>
```
