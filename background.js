chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        if (details.url.includes("https://www.kaoshibao.com/_nuxt/8dc60d33d0e5d790312f.js")) {
            console.log("替换 JS:", details.url);
            // 返回本地插件里的 JS 文件
            return { redirectUrl: chrome.runtime.getURL("question.js") };
        }
    },
    { urls: ["*://kaoshibao.com/*"] },
    ["blocking"]
);
