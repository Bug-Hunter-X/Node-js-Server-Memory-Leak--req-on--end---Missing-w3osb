# Node.js Server Memory Leak: Missing 'req.on('end')'

This repository demonstrates a subtle bug in a Node.js HTTP server that can lead to memory leaks.  The issue arises from the omission of the `req.on('end', ...)` event listener.

Without this listener, the server will not properly process the end of incoming requests, potentially preventing the server from closing gracefully and leading to resource exhaustion over time.

## Reproducing the Bug

1. Clone this repository.
2. Run `node bug.js`.
3. Attempt to stop the server (e.g., using Ctrl+C).  You may notice it doesn't shut down immediately or cleanly.

## Solution

The solution is to add the `req.on('end', ...)` listener to ensure that the request is fully processed before the response is sent and the connection is closed.

## Learning Points

* Proper handling of request events is crucial for creating stable and efficient Node.js servers.
* Memory leaks can be difficult to debug; paying close attention to resource management is important to avoid them.
* Even seemingly small omissions can have significant consequences in server-side code.
