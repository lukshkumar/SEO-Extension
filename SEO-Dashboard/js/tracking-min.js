function trackInternalLinks(e, t) {
    ga("send", "event", "Internal", e, t, 1), 
    "Settings" == e && ("Settings open" == t ? ga("send", "pageview", "/settings.html") : ga("send", "pageview", "/popup.html")), "Notifications" == e && ("Notifications open" == t ? ga("send", "pageview", "/notifications.html") : ga("send", "pageview", "/popup.html"))
}

function trackExternalLinks(e, t, n) {
    ga("send", "event", e, t, n, 1)
}! function(e, t, n, a, i, o, s) {
    e.GoogleAnalyticsObject = i, e[i] = e[i] || function() {
        (e[i].q = e[i].q || []).push(arguments)
    }, e[i].l = 1 * new Date, o = t.createElement(n), s = t.getElementsByTagName(n)[0], o.async = 1, o.src = a, s.parentNode.insertBefore(o, s)
}(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"), ga("create", config.gaProperty, "auto"), ga("set", "checkProtocolTask", function() {}), ga("set", "userId", config.userId), ga("set", "anonymizeIp", !0), ga("send", "pageview", "/popup.html");