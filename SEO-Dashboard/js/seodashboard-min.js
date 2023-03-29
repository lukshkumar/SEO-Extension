! function($) {
    function i() {
        var i = Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
        return (new Date).getTime() + "_" + i
    }

    function t(i, t, n) {
        var o = [];
        for (var e in i)
            for (var s in i[e].routines) t[e].routines[s].favorite && o.push([s, e, i[e].name, i[e].routines[s]]);
        n(o)
    }

    function n(i) {
        var t = "";
        i.length && (t += '<section id="favorite-tools">', t += "<h3>Favoriten</h3>", t += '<h3 class="floatingHeader">Favoriten</h3>', i.forEach(function(i) {
            t += '<div id="' + i[1] + "--" + i[0] + '" class="routine">', t += '<div class="icon-fav"></div>', t += "<h3>" + i[3].name + "</h3>", t += '<div class="subline">' + i[2] + "</div>", t += "<p>", i[3].links.forEach(function(i) {
                t += '<a href="" id="' + i[0] + '" target="_blank">' + i[1] + "</a>"
            }), t += "</p>", t += "</div>"
        }), t += "</section>"), $("#favorites").html(t)
    }

    function o(i, t, n) {
        var o = [];
        for (var e in i)
            for (var s in i[e].routines) t[e].routines[s].inactive && o.push([s, e, i[e].name, i[e].routines[s]]);
        n(o)
    }

    function e() {
        $("#inactive").html('<section id="inactive-tools" class="accordion close"></section>')
    }

    function s(i) {
        var t = "";
        i.length && (t += "<h3>Deaktivierte SEO-Routinen</h3>", t += '<h3 class="floatingHeader">Deaktivierte SEO-Routinen</h3>', i.forEach(function(i) {
            t += '<div id="' + i[1] + "--" + i[0] + '" class="routine opacity_routine">', t += '<div class="icon-inact"></div>', t += "<h3>" + i[3].name + "</h3>", t += '<div class="subline">' + i[2] + "</div>", t += "<p>", i[3].links.forEach(function(i) {
                t += '<a href="" id="' + i[0] + '" target="_blank">' + i[1] + "</a>"
            }), t += "</p>", t += "</div>"
        })), $("#inactive-tools").html(t), a()
    }

    function a() {
        $("#inactive .accordion > h3").on("click", function() {
            console.log("click", $(this)), $(this).parent().toggleClass("close")
        })
    }

    function c(i, t, n) {
        var o = [];
        for (var e in i) o.push([e, i[e].position]);
        o.sort(function(i, t) {
            return i[1] - t[1]
        }), n.forEach(function(n) {
            Array.isArray(n) ? n[0](i, o, t, n[1]) : n(i, o, t)
        })
    }

    function r(i, t, n) {
        var o = "";
        t.forEach(function(t) {
            var e = t[0];
            o += '<section id="' + e + '">', o += "<button type='button' class='collapsible'>" + i[e].name + "</button>", o += '<div class="content">' + '<h3 class="floatingHeader">' + i[e].name + "</h3>";
            for (var s in i[e].routines) {
                var a = i[e].routines[s];
                n[e].routines[s].favorite || n[e].routines[s].inactive || (o += '<div id="' + e + "--" + s + '" class="routine">',
                o += '<div class="icon-inact"></div>',
                o += '<div class="icon-fav"></div>', 
                o += "<h3>" + a.name + "</h3>", o += "<p>",
                a.links.forEach(function(i) {
                    o += '<a href="" id="' + i[0] + '" target="_blank">' + i[1] + "</a>"
                }), o += "</p>", o += "</div>")
            }
            o += "</div></section>"
        }), $("#tools").html(o), l(i, n)
    }

    function l(i, t) {
        for (var n in i) t[n].active || $("#tools #" + n + ", #inactive [id^=" + n + "]").hide()
    }

    function d(i, t, n, o) {
        var e = "<input type='text' id='filterInput' placeholder='Search for Sections' title='Type in a name'>";
        t.forEach(function(t) {
            var o = t[0];
            e += '<div class="setting_entry"><label for="setting_' + o + '"><input type="checkbox" id="setting_' + o + '"', n[o].active && (e += " checked"), e += "> " + i[o].name + "</label></div>"
        }), $("#settings").append(e), o(n)
    }

    // function f(i, t) {
    //     var n = '<div id="ga-settings"><div><h3>Datenschutz-Einstellung</h3></div><div class="setting_entry"><label for="setting_tracking"><input type="checkbox" id="setting_tracking"';
    //     !0 === i.analytics && (n += " checked"), n += ' /> Google-Analytics-Tracking erlauben und das setzen von Cookies gestatten. </label><p>Mehr über unseren Datenschutz erfährst du in unserer <a href="https://www.technicalseo.de/datenschutz/?utm_medium=browser.extension&utm_source=technicalseo.de&utm_campaign=seo.dashboard.chrome" target="_blank">Datenschutzerklärung</a>.</p></div></div></div>', $("#settings").after(n), t(i)
    // }

    function u(i) {
        $("#settings input[type=checkbox]").on("change", function() {
            var t = $(this),
                n = t.attr("id").split("_")[1],
                o = t.is(":checked");
            i[n].active = o, chrome.storage.sync.set({
                sdb_tools: i
            }, function() {
                o ? $("#" + n + ", #inactive [id^=" + n + "]").show() : $("#" + n + ", #inactive [id^=" + n + "]").hide()
            })
        })
    }

    function v(i) {
        $("#ga-settings input[type=checkbox]").on("change", function() {
            var t = $(this).is(":checked");
            i.analytics = t, chrome.storage.sync.set({
                sdb_tracking: i
            }, function() {
                var i = "ga-disable-" + config.gaProperty;
                window[i] = !t
            })
        })
    }

    function h(i, e) {
        $("#tools,#favorites").on("click", ".icon-fav", function() {
            var o = $(this).parent().attr("id"),
                s = o.split("--")[0],
                a = o.split("--")[1],
                l = e[s].routines[a].favorite,
                d = l ? "off" : "on";
            e[s].routines[a].favorite = !l, trackInternalLinks("Favorite", '"' + $("#" + s + "--" + a + " h3").text() + '" ' + d), chrome.storage.sync.set({
                sdb_tools: e
            }, function() {
                t(i, e, n), c(i, e, [r]), linkBuilder()
            })
        }), $("#tools,#inactive").on("click", ".icon-inact", function() {
            var t = $(this).parent().attr("id"),
                n = t.split("--")[0],
                a = t.split("--")[1],
                l = e[n].routines[a].inactive,
                d = l ? "off" : "on";
            e[n].routines[a].inactive = !l, trackInternalLinks("Inactive", '"' + $("#" + n + "--" + a + " h3").text() + '" ' + d), chrome.storage.sync.set({
                sdb_tools: e
            }, function() {
                o(i, e, s), c(i, e, [r]), linkBuilder()
            })
        })
    }

    function g() {
        $("#tools,#favorites").on("click", "a", function() {
            var i = $(this).parents(".routine"),
                t = i.find(".subline").text(),
                n = i.find("h3").text(),
                o = $(this).text();
            trackExternalLinks(t, n, o)
        })
    }

    function k() {
        $("section").each(function() {
            var i = $(this),
                t = i.offset(),
                n = $(window).scrollTop() + 56,
                o = i.find(".floatingHeader");
            n > t.top && n < t.top + i.height() ? o.css({
                visibility: "visible"
            }) : o.css({
                visibility: "hidden"
            })
        })
    }

    function p() {
        $(".icon-menu").on("click", function() {
            var i = $(this),
                t = i.hasClass("close") ? "close" : "open";
            $(window).scrollTop(0), i.toggleClass("close"), $(".settings").toggleClass("active"), $(".icon-notifications").fadeToggle("slow"), trackInternalLinks("Settings", "Settings " + t)
        })
    }

    function scopeFilter() {
        $(".scopeFilter").on("click", function() {
            var i = $(this),
                t = i.hasClass("close") ? "close" : "open";
            $(window).scrollTop(0), i.toggleClass("close"), $(".settings").toggleClass("active"), $(".icon-notifications").fadeToggle("slow"), trackInternalLinks("Settings", "Settings " + t)
        })
    }

    function m(i, t) {
        chrome.storage.sync.get("last-notification-date", function(n) {
            var o = n["last-notification-date"];
            (!o || Object.keys(i)[0] > o) && $(".icon-notifications").addClass("active"), t(i, o)
        })
    }

    function b(i, t) {
        var n = "";
        for (key in i) {
            var o = i[key];
            n += '<div class="notification_entry', (!t || key > t) && (n += " new"), n += '">', n += "<h3>Version " + o.version + "</h3>", n += "<div>" + o.text + "</div>", n += "</div>"
        }
        $("#notifications").append(n)
    }

    function y() {
        var i = $(".icon-notifications"),
            t = $(".notifications");
        i.on("click", function() {
            $(window).scrollTop(0), t.hasClass("active") ? (t.removeClass("active"), i.removeClass("close"), $(".icon-menu").fadeIn("slow"), trackInternalLinks("Notifications", "Notifications close")) : (chrome.browserAction.setBadgeBackgroundColor({
                color: [255, 0, 0, 0]
            }), chrome.browserAction.setBadgeText({
                text: ""
            }), $(".icon-menu").fadeOut("slow"), trackInternalLinks("Notifications", "Notifications open"), chrome.storage.sync.set({
                "last-notification-date": Object.keys(notifications)[0]
            }, function() {
                i.removeClass("active").addClass("close"), t.addClass("active"), setTimeout(function() {
                    $(".notifications .new").addClass("no-longer-new")
                }, 2e3)
            }))
        })
    }
    chrome.storage.sync.get({
        sdb_tools: storage
    }, function(i) {
        var a = i.sdb_tools,
            l = tools,
            f = notifications;
        a && l && f && (e(), t(l, a, n), o(l, a, s), c(l, a, [r, [d, u]]), h(l, a), p(), m(f, b), y(), linkBuilder(), g(), $(window).scroll(k).trigger("scroll"), scopeFilter())
    }), chrome.storage.sync.get({
        sdb_tracking: {
            userId: i(),
            analytics: !1
        }
    }, function(i) {
        var t = i.sdb_tracking,
            n = "ga-disable-" + config.gaProperty;
        config.userId = t.userId, t.analytics ? window[n] = !1 : window[n] = !0, f(t, v)
    })
}(jQuery);