/* Balzac Bangkok: reliability-first ribbon, nav, reveal, curtain reveals,
   image blur-up, lightbox, contact form, event prefill. */

(function () {
  "use strict";

  var RIBBON_KEY = "cp_ribbon_dismissed";
  var SAFETY_MS = 2600;
  var prefersReducedMotion = false;

  try {
    prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (e) {
    prefersReducedMotion = false;
  }

  function safe(name, fn) {
    try {
      fn();
    } catch (err) {
      if (window.console && console.warn) {
        console.warn("Balzac: " + name + " failed to initialise", err);
      }
    }
  }

  function t(key) {
    var i18n = window.chezPapaI18n;
    if (!i18n || !i18n.dict) {
      return "";
    }
    var lang = document.documentElement.getAttribute("lang") || "en";
    return (i18n.dict[lang] && i18n.dict[lang][key]) || (i18n.dict.en && i18n.dict.en[key]) || "";
  }

  document.addEventListener("DOMContentLoaded", function () {
    safe("ribbon", initRibbon);
    safe("header scroll", initHeaderScroll);
    safe("mobile nav", initMobileNav);
    safe("active nav", initActiveNav);
    safe("lang thumb", initLangThumb);
    safe("smooth scroll", initSmoothScroll);
    safe("reveal", initReveal);
    safe("curtain reveals", initCurtainReveals);
    safe("image load", initImageLoad);
    safe("safety net", initSafetyNet);
    safe("lightbox", initLightbox);
    safe("image fallback", initImageFallback);
    safe("logo fallback", initLogoFallback);
    safe("floating reserve", initFloatingReserve);
    safe("reservation form", initReservationForm);
    safe("sell form", initSellForm);
    safe("event prefill", initEventPrefill);
  });

  /* ------------------------------------------------------------------ */
  /* Global 2.5s safety net (R1)                                         */
  /* ------------------------------------------------------------------ */

  function initSafetyNet() {
    window.setTimeout(function () {
      document.querySelectorAll("[data-reveal]").forEach(function (el) {
        el.classList.add("is-visible");
      });

      document.querySelectorAll("[data-curtain]").forEach(function (el) {
        el.classList.add("curtain", "curtain-run", "curtain-safe");
        el.style.clipPath = "";
        el.style.animation = "none";
        var img = el.querySelector("img");
        if (img) {
          img.style.transform = "";
          img.style.animation = "none";
          markImageLoaded(img);
        }
      });

      document.querySelectorAll(".frame-img").forEach(function (img) {
        markImageLoaded(img);
      });
    }, SAFETY_MS);
  }

  /* ------------------------------------------------------------------ */
  /* Preview ribbon                                                      */
  /* ------------------------------------------------------------------ */

  function initRibbon() {
    var ribbon = document.querySelector(".preview-ribbon");
    if (!ribbon) {
      return;
    }

    var dismissed = false;
    try {
      dismissed = window.sessionStorage.getItem(RIBBON_KEY) === "1";
    } catch (e) {
      dismissed = false;
    }

    if (dismissed) {
      ribbon.classList.add("is-hidden");
      document.body.classList.remove("has-ribbon");
      return;
    }

    document.body.classList.add("has-ribbon");
    requestAnimationFrame(function () {
      ribbon.classList.add("is-shown");
    });

    var closeBtn = ribbon.querySelector(".preview-ribbon-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        ribbon.classList.remove("is-shown");
        document.body.classList.remove("has-ribbon");
        try {
          window.sessionStorage.setItem(RIBBON_KEY, "1");
        } catch (e) {
          /* sessionStorage unavailable */
        }
        window.setTimeout(function () {
          ribbon.classList.add("is-hidden");
        }, 650);
      });
    }
  }

  function initHeaderScroll() {
    var header = document.querySelector(".site-header");
    if (!header) {
      return;
    }

    function update() {
      header.classList.toggle("is-scrolled", window.scrollY > 10);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function initMobileNav() {
    var toggle = document.querySelector(".hamburger");
    var drawer = document.querySelector(".nav-drawer");
    var scrim = document.querySelector(".nav-scrim");
    var closeBtn = drawer ? drawer.querySelector(".drawer-close") : null;
    if (!toggle || !drawer) {
      return;
    }

    function closeNav() {
      toggle.classList.remove("is-open");
      drawer.classList.remove("is-open");
      if (scrim) {
        scrim.classList.remove("is-open");
      }
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      toggle.focus();
    }

    function openNav() {
      toggle.classList.add("is-open");
      drawer.classList.add("is-open");
      if (scrim) {
        scrim.classList.add("is-open");
      }
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }

    toggle.addEventListener("click", function () {
      if (drawer.classList.contains("is-open")) {
        closeNav();
      } else {
        openNav();
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", closeNav);
    }

    if (scrim) {
      scrim.addEventListener("click", closeNav);
    }

    drawer.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) {
        closeNav();
      }
    });
  }

  function stripHtmlAndSlash(path) {
    path = path.replace(/\.html$/i, "");
    path = path.replace(/\/index$/i, "/");
    if (path.length > 1) {
      path = path.replace(/\/$/, "");
    }
    return path;
  }

  function initActiveNav() {
    var currentPath = stripHtmlAndSlash(window.location.pathname);
    document.querySelectorAll(".main-nav a[href]").forEach(function (link) {
      var url;
      try {
        url = new URL(link.getAttribute("href"), window.location.href);
      } catch (e) {
        return;
      }
      var linkPath = stripHtmlAndSlash(url.pathname);
      var isMatch = linkPath === currentPath;
      if ((currentPath === "" || currentPath === "/") && (linkPath === "" || linkPath === "/index" || linkPath === "/")) {
        isMatch = true;
      }
      link.classList.toggle("active", isMatch);
      if (isMatch) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function initLangThumb() {
    document.querySelectorAll(".lang-toggle.seg").forEach(function (toggle) {
      if (!toggle.querySelector(".lang-thumb")) {
        var thumb = document.createElement("span");
        thumb.className = "lang-thumb";
        thumb.setAttribute("aria-hidden", "true");
        toggle.insertBefore(thumb, toggle.firstChild);
      }
      positionLangThumb(toggle);
    });
    document.addEventListener("cp:langchange", function () {
      document.querySelectorAll(".lang-toggle.seg").forEach(positionLangThumb);
    });
  }

  function positionLangThumb(toggle) {
    var thumb = toggle.querySelector(".lang-thumb");
    var active = toggle.querySelector("button.active");
    if (!thumb || !active) {
      return;
    }
    var toggleRect = toggle.getBoundingClientRect();
    var activeRect = active.getBoundingClientRect();
    thumb.style.width = activeRect.width + "px";
    thumb.style.transform = "translateX(" + (activeRect.left - toggleRect.left) + "px)";
  }

  function initSmoothScroll() {
    if (prefersReducedMotion) {
      return;
    }
    document.querySelectorAll('a[href*="#"]').forEach(function (link) {
      link.addEventListener("click", function (event) {
        var href = link.getAttribute("href");
        if (!href || href.indexOf("#") === -1) {
          return;
        }
        var hash = href.split("#")[1];
        if (!hash) {
          return;
        }
        var target;
        try {
          var url = new URL(href, window.location.href);
          var pagePath = window.location.pathname.replace(/\.html$/, "");
          var linkPath = url.pathname.replace(/\.html$/, "");
          if (linkPath !== pagePath && linkPath !== pagePath + "/index") {
            return;
          }
          target = document.getElementById(hash);
        } catch (e) {
          target = document.getElementById(hash);
        }
        if (!target) {
          return;
        }
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function initReveal() {
    var targets = document.querySelectorAll("[data-reveal]");
    if (!targets.length) {
      return;
    }

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var viewportH = window.innerHeight || document.documentElement.clientHeight;

    function isAboveFold(el) {
      var rect = el.getBoundingClientRect();
      return rect.top < viewportH * 0.92;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach(function (el) {
      if (isAboveFold(el)) {
        el.classList.add("is-visible");
      } else {
        observer.observe(el);
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* Curtain reveals (R1): never pre-hidden, animate only on intersect   */
  /* ------------------------------------------------------------------ */

  function initCurtainReveals() {
    var frames = document.querySelectorAll("[data-curtain]");
    if (!frames.length) {
      return;
    }

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            runCurtain(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );

    frames.forEach(function (frame) {
      observer.observe(frame);
    });
  }

  function runCurtain(el) {
    if (el.classList.contains("curtain-run")) {
      return;
    }
    el.classList.add("curtain");
    void el.offsetWidth;
    el.classList.add("curtain-run");
  }

  /* ------------------------------------------------------------------ */
  /* Blur-up image loading (R5)                                          */
  /* ------------------------------------------------------------------ */

  function initImageLoad() {
    document.querySelectorAll(".frame-img").forEach(function (img) {
      if (img.complete && img.naturalWidth > 0) {
        markImageLoaded(img);
      } else {
        img.addEventListener("load", function () {
          markImageLoaded(img);
        });
        img.addEventListener("error", function () {
          markImageLoaded(img);
        });
      }
    });
  }

  function markImageLoaded(img) {
    img.classList.add("loaded");
    var frame = img.closest("[data-curtain], .media-frame, .hero-media, .hero-banner, .gallery-item, .event-media, .collage-main, .collage-print, .menu-thumb, .lightbox-photo");
    if (frame) {
      frame.classList.add("loaded");
    }
  }

  /* ------------------------------------------------------------------ */
  /* Lightbox (R2)                                                       */
  /* ------------------------------------------------------------------ */

  var lightboxState = {
    mode: null,
    galleryItems: [],
    galleryIndex: 0,
    lastFocus: null,
    savedScrollY: 0
  };

  function initLightbox() {
    ensureLightboxShell();
    bindDishRows();
    bindShelfTiles();
    bindGalleryTriggers();
  }

  function ensureLightboxShell() {
    var existing = document.getElementById("cp-lightbox");
    if (existing && existing.querySelector(".lightbox-stage")) {
      return;
    }
    if (existing) {
      existing.remove();
    }

    var lb = document.createElement("div");
    lb.id = "cp-lightbox";
    lb.className = "lightbox";
    lb.hidden = true;
    lb.innerHTML =
      '<div class="lightbox-backdrop" data-lightbox-close></div>' +
      '<div class="lightbox-stage">' +
      '<button type="button" class="lightbox-nav lightbox-prev" aria-label="Previous">&lsaquo;</button>' +
      '<div class="lightbox-dialog" role="dialog" aria-modal="true" aria-labelledby="lightbox-title" tabindex="-1">' +
      '<div class="lightbox-photo" id="lightbox-photo-wrap">' +
      '<img class="frame-img" id="lightbox-photo" src="" alt="">' +
      '<button type="button" class="lightbox-close" data-lightbox-close aria-label="Close">&times;</button>' +
      "</div>" +
      '<div class="lightbox-content">' +
      '<p class="lightbox-caption" id="lightbox-caption" hidden></p>' +
      '<div class="lightbox-dish-body" id="lightbox-dish-body" hidden>' +
      '<h2 class="lightbox-title" id="lightbox-title"></h2>' +
      '<p class="lightbox-desc" id="lightbox-desc"></p>' +
      '<p class="lightbox-price" id="lightbox-price"></p>' +
      '<a href="https://wa.me/66816964798" target="_blank" rel="noopener" class="btn lightbox-reserve" data-i18n="l.wa">Ask on WhatsApp</a>' +
      '<p class="lightbox-note" data-i18n="l.tile.note">The online catalogue arrives with the finished website. Visit us or message us.</p>' +
      "</div>" +
      "</div>" +
      "</div>" +
      '<button type="button" class="lightbox-nav lightbox-next" aria-label="Next">&rsaquo;</button>' +
      "</div>";
    document.body.appendChild(lb);

    lb.querySelectorAll("[data-lightbox-close]").forEach(function (el) {
      el.addEventListener("click", closeLightbox);
    });

    lb.querySelector(".lightbox-prev").addEventListener("click", function () {
      stepGallery(-1);
    });
    lb.querySelector(".lightbox-next").addEventListener("click", function () {
      stepGallery(1);
    });

    document.addEventListener("keydown", onLightboxKeydown);
    document.addEventListener("cp:langchange", refreshLightboxCopy);
  }

  function bindDishRows() {
    document.querySelectorAll(".menu-row[data-dish]").forEach(function (row) {
      row.addEventListener("click", function () {
        openDishLightbox(row);
      });
    });
  }

  function bindShelfTiles() {
    document.querySelectorAll(".shelf-tile[data-dish]").forEach(function (tile) {
      tile.addEventListener("click", function () {
        openDishLightbox(tile);
      });
    });
  }

  function bindGalleryTriggers() {
    document.querySelectorAll("[data-gallery-trigger]").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        var group = trigger.getAttribute("data-gallery-trigger");
        var items = Array.prototype.slice.call(
          document.querySelectorAll('[data-gallery-trigger="' + group + '"]')
        );
        openGalleryLightbox(items, items.indexOf(trigger));
      });
    });
  }

  function openDishLightbox(row) {
    var lb = document.getElementById("cp-lightbox");
    if (!lb) {
      return;
    }

    var isTile = row.classList.contains("shelf-tile");
    lightboxState.mode = isTile ? "tile" : "dish";
    lightboxState.lastFocus = row;

    lb.classList.remove("lightbox-mode-gallery");
    lb.classList.add("lightbox-mode-dish");
    lb.classList.toggle("lightbox-mode-tile", isTile);

    var imgEl = row.querySelector(".menu-thumb img, img");
    var imgSrc = imgEl && !isTile ? imgEl.getAttribute("src") : "";
    setLightboxPhoto(imgSrc, imgEl ? imgEl.getAttribute("alt") || "" : "");
    document.getElementById("lightbox-title").textContent = t(row.getAttribute("data-dish-name"));
    document.getElementById("lightbox-desc").textContent = t(row.getAttribute("data-dish-desc"));
    document.getElementById("lightbox-price").textContent = row.getAttribute("data-dish-price") ? t(row.getAttribute("data-dish-price")) : "";

    document.getElementById("lightbox-caption").hidden = true;
    document.getElementById("lightbox-dish-body").hidden = false;
    lb.querySelector(".lightbox-prev").hidden = true;
    lb.querySelector(".lightbox-next").hidden = true;

    refreshLightboxCopy();
    showLightbox(lb);
  }

  function openGalleryLightbox(items, index) {
    var lb = document.getElementById("cp-lightbox");
    if (!lb || !items.length) {
      return;
    }

    lightboxState.mode = "gallery";
    lightboxState.galleryItems = items;
    lightboxState.galleryIndex = index;
    lightboxState.lastFocus = items[index];

    lb.classList.remove("lightbox-mode-dish");
    lb.classList.add("lightbox-mode-gallery");

    document.getElementById("lightbox-dish-body").hidden = true;
    document.getElementById("lightbox-caption").hidden = false;
    lb.querySelector(".lightbox-prev").hidden = items.length < 2;
    lb.querySelector(".lightbox-next").hidden = items.length < 2;

    renderGallerySlide();
    showLightbox(lb);
  }

  function renderGallerySlide() {
    var item = lightboxState.galleryItems[lightboxState.galleryIndex];
    if (!item) {
      return;
    }
    var img = item.querySelector("img");
    var captionKey = item.getAttribute("data-caption-i18n");
    setLightboxPhoto(img ? img.getAttribute("src") : "", img ? img.getAttribute("alt") || "" : "");
    var captionEl = document.getElementById("lightbox-caption");
    if (captionKey) {
      captionEl.textContent = t(captionKey);
      captionEl.hidden = false;
    } else {
      captionEl.hidden = true;
    }
    document.getElementById("lightbox-title").textContent = captionEl.textContent || "Gallery";
  }

  function stepGallery(dir) {
    if (lightboxState.mode !== "gallery" || lightboxState.galleryItems.length < 2) {
      return;
    }
    var len = lightboxState.galleryItems.length;
    lightboxState.galleryIndex = (lightboxState.galleryIndex + dir + len) % len;
    renderGallerySlide();
  }

  function setLightboxPhoto(src, alt) {
    var wrap = document.getElementById("lightbox-photo-wrap");
    var img = document.getElementById("lightbox-photo");
    img.classList.remove("loaded");
    img.src = src || "";
    img.alt = alt || "";
    wrap.classList.toggle("img-frame-fallback", !src);
    if (img.complete && img.naturalWidth > 0) {
      markImageLoaded(img);
    }
  }

  function refreshLightboxCopy() {
    var lb = document.getElementById("cp-lightbox");
    if (!lb) {
      return;
    }
    lb.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (key) {
        el.textContent = t(key);
      }
    });
    if (lightboxState.mode === "gallery") {
      renderGallerySlide();
    }
  }

  function lockBodyScroll() {
    lightboxState.savedScrollY = window.scrollY || window.pageYOffset;
    document.body.classList.add("lightbox-open");
    document.body.style.position = "fixed";
    document.body.style.top = "-" + lightboxState.savedScrollY + "px";
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
  }

  function unlockBodyScroll() {
    document.body.classList.remove("lightbox-open");
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    window.scrollTo(0, lightboxState.savedScrollY);
  }

  function showLightbox(lb) {
    lb.hidden = false;
    lockBodyScroll();

    var dialog = lb.querySelector(".lightbox-dialog");
    dialog.scrollTop = 0;

    var stage = lb.querySelector(".lightbox-stage");
    trapFocus(stage);

    if (dialog.focus) {
      try {
        dialog.focus({ preventScroll: true });
      } catch (e) {
        dialog.focus();
      }
    }
  }

  function closeLightbox() {
    var lb = document.getElementById("cp-lightbox");
    if (!lb || lb.hidden) {
      return;
    }
    lb.hidden = true;
    lb.classList.remove("lightbox-mode-dish", "lightbox-mode-gallery", "lightbox-mode-tile");
    unlockBodyScroll();
    releaseFocus();

    var opener = lightboxState.lastFocus;
    lightboxState.mode = null;
    if (opener && opener.focus) {
      try {
        opener.focus({ preventScroll: true });
      } catch (e) {
        opener.focus();
      }
    }
  }

  function onLightboxKeydown(event) {
    var lb = document.getElementById("cp-lightbox");
    if (!lb || lb.hidden) {
      return;
    }
    if (event.key === "Escape") {
      closeLightbox();
    } else if (event.key === "ArrowLeft") {
      stepGallery(-1);
    } else if (event.key === "ArrowRight") {
      stepGallery(1);
    } else if (event.key === "Tab") {
      maintainFocusTrap(event, lb.querySelector(".lightbox-stage"));
    }
  }

  var focusTrap = { nodes: [] };

  function trapFocus(container) {
    if (!container) {
      return;
    }
    focusTrap.nodes = Array.prototype.slice.call(
      container.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])')
    );
  }

  function releaseFocus() {
    focusTrap.nodes = [];
  }

  function maintainFocusTrap(event, container) {
    if (!container || event.key !== "Tab") {
      return;
    }
    var nodes = focusTrap.nodes.filter(function (node) {
      return !node.hidden && node.offsetParent !== null;
    });
    if (!nodes.length) {
      return;
    }
    var first = nodes[0];
    var last = nodes[nodes.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function initImageFallback() {
    document.querySelectorAll("img[data-fallback]").forEach(function (img) {
      var frame =
        img.closest(
          "[data-curtain], .media-frame, .hero-media, .hero-banner, .gallery-item, .event-media, .collage-main, .collage-print, .menu-thumb, .lightbox-photo"
        ) || img.parentElement;

      function markBroken() {
        img.classList.add("is-broken");
        if (frame) {
          frame.classList.add("img-frame-fallback");
        }
        markImageLoaded(img);
      }

      if (img.complete && img.naturalWidth === 0) {
        markBroken();
      }
      img.addEventListener("error", markBroken);
    });
  }

  function initLogoFallback() {
    [
      { wrap: ".brand-chip", img: ".brand-chip-logo" },
      { wrap: ".footer-logo", img: ".footer-logo-img" }
    ].forEach(function (pair) {
      var wrap = document.querySelector(pair.wrap);
      var logo = wrap ? wrap.querySelector(pair.img) : null;
      if (!wrap || !logo) {
        return;
      }
      function markMissing() {
        wrap.classList.add("logo-missing");
      }
      if (logo.complete && logo.naturalWidth === 0) {
        markMissing();
      }
      logo.addEventListener("error", markMissing);
    });
  }

  function initFloatingReserve() {
    var btn = document.querySelector(".float-reserve");
    if (!btn || prefersReducedMotion) {
      return;
    }
    window.setTimeout(function () {
      btn.classList.add("pulse");
      window.setTimeout(function () {
        btn.classList.remove("pulse");
      }, 1500);
    }, 3000);
  }

  function initReservationForm() {
    var form = document.querySelector(".visit-form form, .reserve-form form");
    var modal = document.querySelector(".modal-overlay:not(.sell-modal)");
    if (!form || !modal) {
      return;
    }

    var modalClose = modal.querySelector(".modal-close");

    function openModal() {
      modal.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      modal.classList.remove("is-open");
      if (!document.body.classList.contains("lightbox-open")) {
        document.body.style.overflow = "";
      }
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      openModal();
    });

    if (modalClose) {
      modalClose.addEventListener("click", closeModal);
    }

    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && modal.classList.contains("is-open")) {
        closeModal();
      }
    });
  }

  function initSellForm() {
    var form = document.querySelector(".sell-form form");
    var modal = document.querySelector(".sell-modal");
    if (!form || !modal) {
      return;
    }

    var modalClose = modal.querySelector(".modal-close");

    function openModal() {
      modal.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      modal.classList.remove("is-open");
      if (!document.body.classList.contains("lightbox-open")) {
        document.body.style.overflow = "";
      }
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      openModal();
    });

    if (modalClose) {
      modalClose.addEventListener("click", closeModal);
    }

    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && modal.classList.contains("is-open")) {
        closeModal();
      }
    });
  }

  function initEventPrefill() {
    var noteField = document.getElementById("visit-note");
    var reasonField = document.getElementById("visit-reason");
    if (!noteField) {
      return;
    }

    var params = new URLSearchParams(window.location.search);
    var ev = params.get("ev");
    var validEvents = ["cine", "expo", "lecture", "collab"];
    if (!ev || validEvents.indexOf(ev) === -1) {
      return;
    }

    if (reasonField) {
      reasonField.value = ev;
    }

    var key = "note." + ev;

    function knownValues() {
      var i18n = window.chezPapaI18n;
      if (!i18n || !i18n.dict) {
        return [];
      }
      return ["en", "fr", "th"]
        .map(function (lang) {
          return i18n.dict[lang] && i18n.dict[lang][key];
        })
        .filter(Boolean);
    }

    function applyPrefill() {
      var i18n = window.chezPapaI18n;
      if (!i18n || !i18n.dict) {
        return;
      }
      var lang = document.documentElement.getAttribute("lang") || "fr";
      var value = i18n.dict[lang] && i18n.dict[lang][key];
      if (!value) {
        return;
      }
      var known = knownValues();
      if (noteField.value === "" || known.indexOf(noteField.value) !== -1) {
        noteField.value = value;
      }
    }

    applyPrefill();
    document.addEventListener("cp:langchange", function () {
      window.setTimeout(applyPrefill, 0);
    });
  }
})();
