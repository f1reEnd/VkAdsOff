function onIcon() {
    chrome.action.setIcon({path: {"128": "iconOn128.png"}});
}

function offIcon() {
    chrome.action.setIcon({path: {"128": "iconOff128.png"}});
}

function background_fill() {
    let animation = document.getElementById("background").animate([
        {transform: "scale(1, 1)"},
        {transform: "scale(30, 30)"}
    ], 500);
    animation.addEventListener("finish", () => {
        document.getElementById("background").style.transform = "scale(30)";
    });
}

function background_clear() {
    let animation = document.getElementById("background").animate([
        {transform: "scale(30)"},
        {transform: "scale(1)"}
    ], 500);
    animation.addEventListener("finish", () => {
        document.getElementById("background").style.transform = "scale(1)";
    });
}

chrome.storage.sync.get("buttonStatus", ({ buttonStatus }) => {
    if (buttonStatus == "on") {
        document.getElementById("mainButton").checked = true;
        background_fill();
    }
});

document.getElementById("mainButton").addEventListener("change", () => {
    chrome.storage.sync.get("buttonStatus", ({ buttonStatus }) => {
        if (buttonStatus == "off") {
            chrome.storage.sync.set({ "buttonStatus": "on" });
            background_fill();
            onIcon();
        } else if (buttonStatus == "on") {
            chrome.storage.sync.set({ "buttonStatus": "off" });
            background_clear();
            offIcon();
        }
    });
})