chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'downloadFiles') {
        const files = message.files; // array of URLs
        files.forEach(url => {
            chrome.downloads.download({ url });
        });
        sendResponse({ status: 'started', count: files.length });
    }
    // 必须返回 true 才能异步响应
    return true;
});