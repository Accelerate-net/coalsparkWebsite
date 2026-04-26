// Page preload ------------------
$(window).load(function() {
    "use strict";
    $(".loader").fadeOut(500, function() {
        $("#main").animate({
            opacity: "1"
        }, 500);
        $("body").addClass("review-bar-ready");
    });
});
// all functions ------------------
function initLambert() {
    "use strict";
    if ($("header").hasClass("flat-header")) $('<div clas="height-emulator"></div>').prependTo("#wrapper").css({
        height: $("header").outerHeight(true)
    });
    function a() {
        $(".hero-title").css({
            "margin-top": -1 * $(".hero-title").height() / 2 + "px"
        });
        $(".carousel-link-holder").css({
            "margin-top": -1 * $(".carousel-link-holder").height() / 2 + "px"
        });
        $(".full-height").css({
            height: $(window).outerHeight(true)
        });
    }
    a();
	// magnificPopup------------------
    $(".image-popup").magnificPopup({
        type: "image",
        closeOnContentClick: false,
        removalDelay: 600,
        mainClass: "my-mfp-slide-bottom",
        image: {
            verticalFit: false
        }
    });
    $(".popup-youtube, .popup-vimeo , .show-map").magnificPopup({
        disableOn: 700,
        type: "iframe",
        removalDelay: 600,
        mainClass: "my-mfp-slide-bottom"
    });
    $(".popup-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        fixedContentPos: true,
        fixedBgPos: true,
        tLoading: "Loading image #%curr%...",
        removalDelay: 600,
        closeBtnInside: true,
        mainClass: "my-mfp-slide-bottom",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [ 0, 1 ]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
    $(".popup-with-move-anim").magnificPopup({
        type: "ajax",
        alignTop: false,
        overflowY: "scroll",
        fixedContentPos: true,
        fixedBgPos: true,
        closeBtnInside: false,
        midClick: true,
        modal: true,
        removalDelay: 600,
        mainClass: "my-mfp-slide-bottom"
    });
    $(document).on("click", ".popup-modal-dismiss", function(a) {
        a.preventDefault();
        $.magnificPopup.close();
    });
	// owl carousel  ------------------
    var b = $(".fullscreen-slider");
    b.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        singleItem: true,
        pagination: true
    });
    $(".fullscreen-slider-holder a.next-slide").on("click", function() {
        $(this).closest(".fullscreen-slider-holder").find(b).trigger("owl.next");
    });
    $(".fullscreen-slider-holder a.prev-slide").on("click", function() {
        $(this).closest(".fullscreen-slider-holder").find(b).trigger("owl.prev");
    });
    var c = $(".testimonials-slider");
    c.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        singleItem: true,
        pagination: false
    });
    $(".testimonials-holder a.next-slide").on("click", function() {
        $(this).closest(".testimonials-holder").find(c).trigger("owl.next");
    });
    $(".testimonials-holder a.prev-slide").on("click", function() {
        $(this).closest(".testimonials-holder").find(c).trigger("owl.prev");
    });
    $(".slideshow-container").superslides({
        animation: "fade",
        play: 6000
    });
    var d = $(".fullheight-carousel");
    d.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        items: 4,
        pagination: false,
        autoHeight: true
    });
    $(".fullheight-carousel-holder a.next-slide").on("click", function() {
        $(this).closest(".fullheight-carousel-holder").find(d).trigger("owl.next");
    });
    $(".fullheight-carousel-holder a.prev-slide").on("click", function() {
        $(this).closest(".fullheight-carousel-holder").find(d).trigger("owl.prev");
    });
    $(".carousel-link-holder").hover(function() {
        $(this).parent(".carousel-item").addClass("vis-decor");
    }, function() {
        $(this).parent(".carousel-item").removeClass("vis-decor");
    });
    var e = $(".single-slider");
    e.owlCarousel({
        singleItem: true,
        slideSpeed: 1000,
        navigation: false,
        pagination: true,
        responsiveRefreshRate: 200,
        autoHeight: true
    });
    $(".single-slider-holder a.next-slide").on("click", function() {
        $(this).closest(".single-slider-holder").find(e).trigger("owl.next");
    });
    $(".single-slider-holder a.prev-slide").on("click", function() {
        $(this).closest(".single-slider-holder").find(e).trigger("owl.prev");
    });
    var f = $(".product-slider");
    f.owlCarousel({
        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        afterInit: g
    });
    $(".product-image a.next-slide").on("click", function() {
        $(this).closest(".product-image").find(f).trigger("owl.next");
    });
    $(".product-image a.prev-slide").on("click", function() {
        $(this).closest(".product-image").find(f).trigger("owl.prev");
    });
    function g() {
        $(".owl-controls .owl-page").append('<a class="item-link" href="#"/>');
        var a = $(".owl-controls .item-link");
        $.each(this.owl.userItems, function(b) {
            $(a[b]).css({
                background: "url(" + $(this).find("img").attr("src") + ") center center no-repeat",
                "-webkit-background-size": "cover",
                "-moz-background-size": "cover",
                "-o-background-size": "cover",
                "background-size": "cover"
            }).click(function(a) {
                a.preventDefault();
                owl.trigger("owl.goTo", b);
            });
        });
    }
    $("#twitter-feed").tweet({
        username: "katokli3mmm",
        join_text: "auto",
        avatar_size: 0,
        count: 4
    });
    $("#twitter-feed").find("ul").addClass("twitter-slider");
    $("#twitter-feed").find("ul li").addClass("item");
    var h = $(".twitter-slider");
    h.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        pagination: false,
        autoHeight: false,
        singleItem: true
    });
    $(".twitter-holder .next-slide").on("click", function() {
        h.trigger("owl.next");
    });
    $(".twitter-holder .prev-slide").on("click", function() {
        h.trigger("owl.prev");
    });
	// tabs------------------
    $(".tabs-menu a").on("click", function(a) {
        a.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var b = $(this).attr("href");
        $(".tab-content").not(b).css("display", "none");
        $(b).fadeIn();
    });
	// one page nav ------------------
    $(".scroll-nav  ul").singlePageNav({
        filter: ":not(.external)",
        updateHash: false,
        offset: 90,
        threshold: 120,
        speed: 1200,
        currentClass: "act-link"
    });
	// youtube video------------------
    var i = $(".background-video").data("vid");
    var j = $(".background-video").data("mv");
    $(".background-video").YTPlayer({
        fitToBackground: true,
        videoId: i,
        pauseOnScroll: true,
        mute: j,
        callback: function() {
            var a = $(".background-video").data("ytPlayer").player;
        }
    });
	// isotope ------------------
    function k() {
        if ($(".gallery-items").length) {
            var a = $(".gallery-items").isotope({
                singleMode: true,
                columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
                itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three"
            });
            a.imagesLoaded(function() {
                a.isotope("layout");
            });
            $(".gallery-filters").on("click", "a.gallery-filter", function(b) {
                b.preventDefault();
                var c = $(this).attr("data-filter");
                a.isotope({
                    filter: c
                });
                $(".gallery-filters a.gallery-filter").removeClass("gallery-filter-active");
                $(this).addClass("gallery-filter-active");
                return false;
            });
        }
    }
    k();
    $(window).load(function() {
        k();
    });
	// scroll------------------
    $(".to-top").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1200, "easeInOutExpo");
    });
    $(".custom-scroll-link").on("click", function() {
        var a = 74;
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var b = $(this.hash);
            b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                $("html,body").animate({
                    scrollTop: b.offset().top - a
                }, {
                    queue: false,
                    duration: 1200,
                    easing: "easeInOutExpo"
                });
                return false;
            }
        }
    });
	// map ------------------
    $("#map-canvas").gmap3({
        action: "init",
        marker: {
			// markers and locations------------------
            values: [ {
                latLng: [ 12.9968605, 80.25618 ],
                data: {
                    "name": "Adyar",
                    "address": "Address",
                    "phone": "Mobile",
                    "reservationURL": "url"
                },
                options: {
                    icon: "images/marker.png"
                }
            }],
            options: {
                draggable: false
            },
            events: {
                mouseover: function(a, b, c) {

                    var info_window_content = '<div id="content">'+
                                '<h1 id="firstHeading" class="firstHeading" style="font-size: 1.5em; text-transform: none; color: #e86565; margin: 0.8em 0;">'+c.data.name+'</h1>'+
                                '<div id="bodyContent">'+
                                '<p style="font-size: 1em; padding: 0;">'+c.data.address+'</p>'+
                                '<p style="font-size: 1em; padding: 0; font-weight: bold;">Call '+c.data.phone+'</p>'+
                                '<a style="border-radius: 4px; border: 1px solid #e86565; padding: 2px 8px; margin: 8px; display: inline-block; color: #e86565;" target="_new" href="'+c.data.reservationURL+'">Reserve Table</a>'+
                                '</div>'+
                                '</div>';

                    var d = $(this).gmap3("get"), e = $(this).gmap3({
                        get: {
                            name: "infowindow"
                        }
                    });
                    if (e) {
                        e.open(d, a);
                        e.setContent(info_window_content);
                    } else $(this).gmap3({
                        infowindow: {
                            anchor: a,
                            options: {
                                content: info_window_content
                            }
                        }
                    });
                }
            }
        },
        map: {
            options: {
                zoom: 14,
                zoomControl: true,
                mapTypeControl: true,
                scaleControl: true,
                scrollwheel: false,
                streetViewControl: true,
                draggable: true,
                styles: [ {
                    featureType: "all",
                    elementType: "labels.text",
                    stylers: [ {
                        weight: "0.04"
                    }, {
                        visibility: "simplified"
                    } ]
                }, {
                    featureType: "administrative.locality",
                    elementType: "all",
                    stylers: [ {
                        hue: "#e86565"
                    }, {
                        saturation: 7
                    }, {
                        lightness: 19
                    }, {
                        visibility: "on"
                    } ]
                }, {
                    featureType: "administrative.locality",
                    elementType: "labels.text",
                    stylers: [ {
                        hue: "#ffde00"
                    } ]
                }, {
                    featureType: "landscape",
                    elementType: "all",
                    stylers: [ {
                        hue: "#ffffff"
                    }, {
                        saturation: -100
                    }, {
                        lightness: 100
                    }, {
                        visibility: "simplified"
                    } ]
                }, {
                    featureType: "poi",
                    elementType: "all",
                    stylers: [ {
                        hue: "#e86565"
                    }, {
                        saturation: -100
                    }, {
                        lightness: 100
                    }, {
                        visibility: "off"
                    } ]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [ {
                        hue: "#e86565"
                    }, {
                        saturation: -93
                    }, {
                        lightness: 31
                    }, {
                        visibility: "simplified"
                    } ]
                }, {
                    featureType: "road",
                    elementType: "labels",
                    stylers: [ {
                        hue: "#e86565"
                    }, {
                        saturation: -93
                    }, {
                        lightness: 31
                    }, {
                        visibility: "on"
                    } ]
                }, {
                    featureType: "road.arterial",
                    elementType: "labels",
                    stylers: [ {
                        hue: "#e86565"
                    }, {
                        saturation: -93
                    }, {
                        lightness: -2
                    }, {
                        visibility: "simplified"
                    } ]
                }, {
                    featureType: "road.local",
                    elementType: "geometry",
                    stylers: [ {
                        hue: "#e86565"
                    }, {
                        saturation: -90
                    }, {
                        lightness: -8
                    }, {
                        visibility: "simplified"
                    } ]
                }, {
                    featureType: "transit",
                    elementType: "all",
                    stylers: [ {
                        hue: "#e86565"
                    }, {
                        saturation: 10
                    }, {
                        lightness: 69
                    }, {
                        visibility: "on"
                    } ]
                }, {
                    featureType: "water",
                    elementType: "all",
                    stylers: [ {
                        hue: "#e86565"
                    }, {
                        saturation: -78
                    }, {
                        lightness: 67
                    }, {
                        visibility: "simplified"
                    } ]
                } ]
            }
        }
    });
	// contact form------------------
    $("#contactform").submit(function() {
        var a = $(this).attr("action");
        $("#message2").slideUp(750, function() {
            $("#message2").hide();
            $("#submit").attr("disabled", "disabled");
            $.post(a, {
                name: $("#contactform .name").val(),
                email: $("#contactform .email").val(),
                phone: $("#contactform .phone").val(),
                comments: $("#contactform .comments").val()
            }, function(a) {
                document.getElementById("message2").innerHTML = a;
                $("#message2").slideDown("slow");
                $("#submit").removeAttr("disabled");
                if (null != a.match("success")) $("#contactform").slideDown("slow");
            });
        });
        return false;
    });
    $("#contactform input, #contactform textarea").keyup(function() {
        $("#message2").slideUp(1500);
    });
	// reservation form------------------
    $("#reservation-form").submit(function() {
        var a = $(this).attr("action");

        $("#message").slideUp(750, function() {
            $("#message").hide();
            $("#submit-res").attr("disabled", "disabled");
            $.post(a, {
                name: $("#name").val(),
                email: $("#email").val(),
                phone: $("#phone").val(),
                resdate: $("#resdate").val(),
                restime: $("#restime").val(),
                resrest: $("#resrest").val(),
                numperson: $("#numperson").val(),
                comments: $("#comments").val()
            }, function(a) {
                document.getElementById("message").innerHTML = a;
                $("#message").slideDown("slow");
                $("#submit-res").removeAttr("disabled");
                if (null != a.match("success")) $("#contactform").slideDown("slow");
            });
        });
        return false;
    });
    $("#reservation-form input, #reservation-form textarea ").keyup(function() {
        $("#message").slideUp(1500);
    });
    $("#resdate").ionDatePicker();
	// subscribe form------------------
    $("#subscribe").ajaxChimp({
        language: "eng",
        url: "http://kwst.us9.list-manage1.com/subscribe/post?u=992ebe1f14864e841317ca145&id=163340d9c8"
    });
    $.ajaxChimp.translations.eng = {
        submit: "Submitting...",
        0: '<i class="fa fa-check"></i> We will be in touch soon!',
        1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
        2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
        3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
        4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
        5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
    };
    function updateStickyHeader() {
        var headerHeight = $("header").outerHeight() || 0;
        var discoverTop = $("#sec1").length ? $("#sec1").offset().top : 0;
        var stickyTrigger = discoverTop ? Math.max(discoverTop - headerHeight - 10, 120) : 150;
        if ($(window).scrollTop() >= stickyTrigger) {
            $("header").addClass("sticky");
            $(".header-inner").css({
                background: "linear-gradient(to bottom, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.82) 78%, rgba(255,255,255,0.62) 100%)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
            });
            setTimeout(function() {
                $(".logo-holder").addClass("logo-sticky");
            }, 350);
        } else {
            $("header").removeClass("sticky");
            $(".header-inner").css({
                background: "transparent",
                boxShadow: "none"
            });
            setTimeout(function() {
                $(".logo-holder").removeClass("logo-sticky");
            }, 350);
        }
    }
    $(window).on("scroll resize", updateStickyHeader);
    updateStickyHeader();
	// video ------------------
    $(".video-container").css("width", $(window).width() + "px");
    $(".video-container ").css("height", parseInt(3 / 4 * $(window).width()) + "px");
    if ($(".video-container").height() < $(window).height()) {
        $(".video-container ").css("height", $(window).height() + "px");
        $(".video-container").css("width", parseInt(4 / 3 * $(window).height()) + "px");
    }
    $(".video-holder").height($(".media-container").height());
    if ($(window).width() > 1024) {
        if ($(".video-holder").size() > 0) if (($(".media-container").height() + 150) / 3 * 4 > $(".media-container").width()) {
            $("iframe ").height($(".media-container").height() + 150).width(($(".media-container").height() + 150) / 3 * 4);
            $("iframe").css({
                "margin-left": -1 * $("iframe").width() / 2 + "px",
                top: "-75px",
                "margin-top": "0px"
            });
        } else {
            $("iframe").width($(window).width()).height($(window).width() / 4 * 3);
            $("iframe ").css({
                "margin-left": -1 * $("iframe").width() / 2 + "px",
                "margin-top": -1 * $("iframe").height() / 2 + "px",
                top: "50%"
            });
        }
    } else if ($(window).width() < 760) {
        $(".video-holder").height($(".media-container").height());
        $("iframe").height($(".media-container").height());
    } else {
        $(".video-holder").height($(".media-container").height());
        $("iframe").height($(".media-container").height());
    }
    var l = $(".vimeo-player")[0];
    if (l) {
        if (window.Vimeo && Vimeo.Player) {
            var vimeoPlayer = new Vimeo.Player(l);
            vimeoPlayer.ready().then(function() {
                vimeoPlayer.setVolume(0);
            });
        } else if (typeof $f !== 'undefined') {
            var m = $f(l);
            m.addEvent("ready", function() {
                m.api("setVolume", 0);
            });
        }
    }
    $(".triangle-decor").append('<svg x="0px" y="0px" width="100%" height="15px"><defs><pattern id="bottom-divider" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse"><path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M7.504-0.008l7.504,7.504L7.504,15L0,7.496L7.504-0.008z"></path></pattern></defs><rect x="0" y="0" width="100%" height="15" fill="url(#bottom-divider)"></rect></svg>');
    $(".header-inner .container").append('<div class="nav-button-holder"><div class="nav-button vis-m"><span></span><span></span><span></span></div></div>');
	// navigation------------------
    var o = $(".nav-button"), p = $(".nav-holder"), q = $(".nav-holder ,.nav-button ");
    function r() {
        o.removeClass("vis-m");
        p.slideDown(500);
    }
    function s() {
        o.addClass("vis-m");
        p.slideUp(500);
    }
    o.on("click", function() {
        if ($(this).hasClass("vis-m")) r(); else s();
    });
    $(window).resize(function() {
        a();
    });
	$(".scroll-nav a").on("click",function(){
	var ww = $(window).width();
		if (ww < 1036) {
			s();
		}
	});
}

function initGoogleReviewBar() {
    "use strict";
    var config = window.googleReviewBarConfig || {};
    var card = $(".google-review-bar");
    if (!card.length) {
        return;
    }
    var cardLink = card.find(".google-review-bar__link");
    var fallbackUrl = config.mapsLink || cardLink.attr("href") || "#";
    var score = card.find(".google-review-bar__score");
    var reviews = card.find(".google-review-bar__reviews");
    var starsFill = card.find(".google-review-bar__stars-fill");
    var closeButton = card.find(".google-review-bar__close");
    var dismissCookieName = "coalspark_review_bar_dismissed";

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/; SameSite=Lax";
    }

    function getCookie(name) {
        var nameEq = name + "=";
        var cookies = document.cookie.split(";");
        var i;
        for (i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            while (cookie.charAt(0) === " ") {
                cookie = cookie.substring(1, cookie.length);
            }
            if (cookie.indexOf(nameEq) === 0) {
                return cookie.substring(nameEq.length, cookie.length);
            }
        }
        return null;
    }

    function showCard() {
        if (getCookie(dismissCookieName)) {
            card.addClass("is-dismissed");
            return;
        }
        card.removeClass("is-dismissed");
        card.addClass("is-visible");
    }

    function applyRating(ratingValue, reviewCount, destinationUrl) {
        var safeRating = Math.max(0, Math.min(5, Number(ratingValue) || 0));
        var formattedRating = safeRating.toFixed(1);
        var formattedCount = Number(reviewCount || 0).toLocaleString("en-IN");

        score.text(formattedRating);
        reviews.text(formattedCount + " reviews");
        starsFill.css("width", safeRating / 5 * 100 + "%");
        cardLink.attr("href", destinationUrl || fallbackUrl);
        card.removeClass("is-loading");
        showCard();
    }

    function setFallbackState() {
        cardLink.attr("href", fallbackUrl);
        score.text("4.6");
        reviews.text("View on Google Maps");
        starsFill.css("width", 4.6 / 5 * 100 + "%");
        card.removeClass("is-loading");
        showCard();
    }

    function fetchPlaceDetails(placeId) {
        return fetch("https://places.googleapis.com/v1/places/" + encodeURIComponent(placeId), {
            method: "GET",
            headers: {
                "X-Goog-Api-Key": config.apiKey,
                "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,displayName"
            }
        }).then(function(response) {
            if (!response.ok) {
                throw new Error("Place details request failed");
            }
            return response.json();
        });
    }

    function resolvePlaceId() {
        if (config.placeId) {
            return Promise.resolve({
                id: config.placeId
            });
        }
        if (!config.textQuery) {
            return Promise.reject(new Error("Google review bar text query missing"));
        }
        return fetch("https://places.googleapis.com/v1/places:searchText", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Goog-Api-Key": config.apiKey,
                "X-Goog-FieldMask": "places.id,places.googleMapsUri,places.displayName"
            },
            body: JSON.stringify({
                textQuery: config.textQuery,
                maxResultCount: 1
            })
        }).then(function(response) {
            if (!response.ok) {
                throw new Error("Place search request failed");
            }
            return response.json();
        }).then(function(data) {
            if (!data.places || !data.places.length || !data.places[0].id) {
                throw new Error("No Google place match found");
            }
            return data.places[0];
        });
    }

    card.addClass("is-loading");

    card.on("click", ".google-review-bar__close", function(event) {
        event.preventDefault();
        event.stopPropagation();
        setCookie(dismissCookieName, "1", 7);
        card.addClass("is-dismissed").removeClass("is-visible");
    });

    if (getCookie(dismissCookieName)) {
        card.addClass("is-dismissed");
        return;
    }

    if (!config.apiKey) {
        setFallbackState();
        return;
    }

    resolvePlaceId().then(function(place) {
        return fetchPlaceDetails(place.id).then(function(details) {
            applyRating(details.rating, details.userRatingCount, details.googleMapsUri || fallbackUrl);
        });
    }).catch(function() {
        setFallbackState();
    });
}

function initparallax() {
    var a = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
        }
    };
    trueMobile = a.any();
    if (null == trueMobile) {
        var b = $(".content");
        b.find("[data-top-bottom]").length > 0 && b.waitForImages(function() {
            s = skrollr.init();
            s.destroy();
            skrollr.init({
                forceHeight: !1,
                easing: "outCubic",
                mobileCheck: function() {
                    return !1;
                }
            });
        });
    }
    if (trueMobile) { $(".video-container video , .video-holder iframe , .background-video").remove();}
}
$(document).ready(function() {
    initLambert();
    initGoogleReviewBar();
    initparallax();
});
