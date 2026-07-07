/* Balzac Bangkok - La Boutique Stripe demo */

const STRIPE_LINKS = {
  STRIPE_LINK_BOOK: "REPLACE_ME",
  STRIPE_LINK_PRINT: "REPLACE_ME",
  STRIPE_LINK_GIFT: "REPLACE_ME"
};

(function () {
  "use strict";

  function t(key) {
    var i18n = window.chezPapaI18n;
    if (!i18n || !i18n.dict) {
      return "";
    }
    var lang = document.documentElement.getAttribute("lang") || "fr";
    return (i18n.dict[lang] && i18n.dict[lang][key]) || (i18n.dict.fr && i18n.dict.fr[key]) || "";
  }

  function initShopButtons() {
    var modal = document.querySelector(".shop-modal");
    if (!modal) {
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

    document.querySelectorAll("[data-stripe]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var key = btn.getAttribute("data-stripe");
        var url = STRIPE_LINKS[key];
        if (url && url.indexOf("https://buy.stripe.com") === 0) {
          window.open(url, "_blank", "noopener");
          return;
        }
        openModal();
      });
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

  document.addEventListener("DOMContentLoaded", function () {
    try {
      initShopButtons();
    } catch (e) {
      if (window.console && console.warn) {
        console.warn("Balzac: shop init failed", e);
      }
    }
  });
})();
