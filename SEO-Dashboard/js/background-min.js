! function() {
    function t(t) {
        chrome.storage.sync.get("last-notification-date", function(o) {
            var e = o["last-notification-date"];
            (!e || Object.keys(t)[0] > e) && (chrome.browserAction.setBadgeBackgroundColor({
                color: [255, 0, 0, 100]
            }), chrome.browserAction.setBadgeText({
                text: "Neu"
            }))
        })
    }
    notifications && t(notifications)
}();