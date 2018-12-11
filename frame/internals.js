var el = window.document.createElement('button');
el.className = 'styled-button';
el.innerHTML = 'This will be green';
window.document.body.insertBefore(el, window.document.body.childNodes[0] || null);

// Listen for messages from the root script
window.addEventListener('message', function (e) {
    var el = window.document.createElement('div');
    el.className = 'message-box';
    el.innerHTML = e.data;
    window.document.body.insertBefore(el, window.document.body.childNodes[1] || null);
}, false);
