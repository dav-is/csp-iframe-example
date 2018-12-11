# csp-iframe-example
Strict Content Security Policy with Iframes

You can see this live at https://dav-is.github.io/csp-iframe-example/

The `frame/externals.js` is the only script that needs to added to the page. It will append `frame/externals.css` before the iframe is added.

The frame is seperated from the root page. The styles and scripts that it runs are seperate. 

`<iframe id="frame"></iframe>` will load `frame/internals.js` and `frame/internals.css` which will control the styling and scripting inside the frame.

The root page can send messages to the iframe through an event, although because the frame is in the same origin, the root script can added html elements to the page.
