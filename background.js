chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ "buttonStatus": "off" });
    console.log("[onInstalled] A button status variable has been created");
    console.log("[onInstalled] the default status of the button is \"off\"");
});