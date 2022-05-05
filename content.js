function hideadBlocksVkInFeed() {
    let AdBlocksLeft = document.querySelector("#ads_left");
    AdBlocksLeft.style.display = "none";

    if (window.location.pathname == "/feed") {
        let adBlocksVkInFeed = document.querySelectorAll("._ads_block_data_w");
        let adBlocksGroupInFeed = document.querySelectorAll(".wall_marked_as_ads");

        for (let i = adBlocksGroupInFeed.length; i--;) {
            if (!adBlocksGroupInFeed[i].closest(".feed_row").classList.contains("adblock_hide")) {
                adBlocksGroupInFeed[i].closest(".feed_row").classList.add("adblock_hide");
            }
        }

        for (let i = adBlocksVkInFeed.length; i--;) {
            if (!adBlocksVkInFeed[i].classList.contains("adblock_hide")) {
                adBlocksVkInFeed[i].classList.add("adblock_hide");
            }
        }
    } else {
        let adBlocksGroup = document.querySelectorAll(".wall_marked_as_ads");
        for (let i = adBlocksGroup.length; i--;) {
            if (!adBlocksGroup[i].closest("._post").classList.contains("adblock_hide")) {
                adBlocksGroup[i].closest("._post").classList.add("adblock_hide");
                adBlocksGroup[i].closest("._post").style.display = "none";
            }
        }
    }
}

function showadBlocksVkInFeed() {
    let AdBlocksLeft = document.querySelector("#ads_left");
    AdBlocksLeft.style.display = "block";

    let adBlocks = document.querySelectorAll(".adblock_hide");
    for (let i = adBlocks.length; i--;) {
        adBlocks[i].classList.remove("adblock_hide");
        adBlocks[i].style.display = "";
    }
}

function main() {
    chrome.storage.sync.get("buttonStatus", ({ buttonStatus }) => {
        if (buttonStatus == "on") hideadBlocksVkInFeed();
        if (buttonStatus == "off") showadBlocksVkInFeed();
    });

}

setInterval(main, 500);


