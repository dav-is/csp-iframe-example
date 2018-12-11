//Load stylesheet to add to root page to style the iframe itself
var link = document.createElement("link");
link.type = "text/css";
link.rel = "stylesheet";
link.href = "frame/externals.css";

document.head.appendChild(link);

// Load iFrame
var loadingIframe = document.createElement('iframe');
loadingIframe.id = 'frame'; // Set classname for the root element to style from the root page instead of <iframe style=
loadingIframe.onload = function() {
  var iframeDocument = loadingIframe.contentDocument;
  if (iframeDocument != null && iframeDocument.body != null) {
    var style = loadingIframe.contentWindow.document.createElement(
      'link'
    );
    style.type = "text/css";
    style.rel = "stylesheet";
    style.href = "frame/internals.css";
    iframeDocument.head.appendChild(style);

    var script = loadingIframe.contentWindow.document.createElement(
      'script'
    );
    script.type = 'text/javascript';
    script.src = 'frame/internals.js'; // fetch script instead of writing inline
    iframeDocument.body.appendChild(script);
  }
};

document.body.appendChild(loadingIframe);

//Handle button press (sending message to frame)
document.getElementById('message').addEventListener("click", function () {
  document.getElementById('frame').contentWindow.postMessage('This is an message that came from the root script', '*');
});
