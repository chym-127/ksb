
let s = document.createElement('script');
// must be listed in web_accessible_resources in manifest.json
s.src = chrome.runtime.getURL('ui.js');
(document.head || document.documentElement).appendChild(s);


s = document.createElement('script');
// must be listed in web_accessible_resources in manifest.json
s.src = chrome.runtime.getURL('interceptor.js');
(document.head || document.documentElement).appendChild(s);



