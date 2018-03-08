# ServiceWorkerExample

Example code accompanying the article [Implementing a caching service worker with Phoenix][1].

To try out the service worker, you need to run your Phoenix application in `prod` environment. Follow these steps:

```
cd assets && npm run deploy
mix phx.digest
PORT=4000 MIX_ENV=prod mix phx.server
```

Now you can visit [`localhost:4000`](http://localhost:4000) from your
browser. Open the Service Worker section in the Application tab of the
Chrome inspector, and notice that the service worker has been
installed. The console should also show the message `Service Worker
Registered`.  Tick the "offline" button and hit reload — your page
still loads, hurray!
