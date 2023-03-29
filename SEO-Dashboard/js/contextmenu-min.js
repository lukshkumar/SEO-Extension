function google_trends(e, t) {
    chrome.tabs.create({
        url: "https://trends.google.com/trends/explore?q=" + e.selectionText
    })
}

function semrush_keyword_overview(e, t) {
    chrome.tabs.create({
        url: "https://de.semrush.com/de/info/" + e.selectionText + "?db=de"
    })
}

function sistrix_similar_and_related(e, t) {
    chrome.tabs.create({
        url: "https://de.sistrix.com/seo/similar_and_related/keyword/" + e.selectionText
    })
}

function wikipedia(e, t) {
    chrome.tabs.create({
        url: "https://de.wikipedia.org/wiki/" + e.selectionText
    })
}
chrome.contextMenus.create({
    title: "Suchbegriff-Analyse",
    contexts: ["selection"],
    id: "searchanalyses"
}), chrome.contextMenus.create({
    title: "Google Trends",
    contexts: ["selection"],
    id: "google_trends",
    parentId: "searchanalyses",
    onclick: google_trends
}), chrome.contextMenus.create({
    title: "SEMrush",
    contexts: ["selection"],
    id: "semrush_keyword_overview",
    parentId: "searchanalyses",
    onclick: semrush_keyword_overview
}), chrome.contextMenus.create({
    title: "SISTRIX Toolbox",
    contexts: ["selection"],
    id: "sistrix_similar_and_related",
    parentId: "searchanalyses",
    onclick: sistrix_similar_and_related
}), chrome.contextMenus.create({
    title: "Wikipedia",
    contexts: ["selection"],
    id: "wikipedia",
    parentId: "searchanalyses",
    onclick: wikipedia
});