function onIcon() {
    chrome.action.setIcon({path: {"128": "iconOn128.png"}});
}

function offIcon() {
    chrome.action.setIcon({path: {"128": "iconOff128.png"}});
}

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ "buttonStatus": "off" });
    console.log("[onInstalled] A button status variable has been created");
    console.log("[onInstalled] the default status of the button is \"off\"");
    offIcon();
});




