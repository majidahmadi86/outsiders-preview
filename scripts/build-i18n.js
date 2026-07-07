const fs = require("fs");
const path = require("path");

const de = require("./locales-de.js");

const dict = {
  en: {
    "ribbon.text": "Live design preview prepared for Outsiders Legal by Mikaro Studio. Not the firm's official website yet.",
    "ribbon.close": "Close this message",
    "nav.home": "Home",
    "nav.market": "Market Entry",
    "nav.services": "Services",
    "nav.team": "Team",
    "nav.contact": "Contact",
    "nav.cta": "Book a consultation",
    "float.txt": "Book a consultation",
    "hamburger.label": "Menu",
    "drawer.close": "Close menu",
    "title.home": "Outsiders Legal - Swiss-Thai legal counsel in Bangkok",
    "title.market": "Market entry roadmap - Outsiders Legal",
    "title.services": "Services - Outsiders Legal",
    "title.team": "The team - Outsiders Legal",
    "title.contact": "Contact - Outsiders Legal",
    "h.eyebrow": "SWISS-THAI LEGAL COUNSEL · BANGKOK",
    "h.h1": "Enter Thailand with certainty",
    "h.sub": "Outsiders Legal guides international companies into the Thai market: company registration, BOI promotion, visas and work permits, contracts and ongoing compliance, explained clearly in your language.",
    "h.cta1": "Book a consultation",
    "h.cta2": "See the market entry roadmap",
    "h.t1": "Led by a Chulalongkorn-trained Thai attorney",
    "h.t2": "Swiss business adviser on the team",
    "h.t3": "Five working languages",
    "h.stat": "One firm from incorporation to operations",
    "sec01.label": "01",
    "sec01.title": "The roadmap",
    "sec02.label": "02",
    "sec02.title": "Why Outsiders",
    "sec03.label": "03",
    "sec03.title": "Market entry checklist",
    "sec04.label": "04",
    "sec04.title": "Client references",
    "pq": "Certainty is not a promise, it is a process.",
    "r1": "Structure & registration",
    "r2": "BOI or Foreign Business License",
    "r3": "Visas & work permits",
    "r4": "Banking, tax & accounting setup",
    "r5": "Contracts & ongoing compliance",
    "r.cta": "Where are you on the road?",
    "w1.t": "Clarity first",
    "w1.p": "We explain every option and every step before you commit, in plain language.",
    "w2.t": "Swiss-Thai by design",
    "w2.p": "A Thai attorney and a Swiss adviser on the same file: local law, international standards.",
    "w3.t": "Fixed scopes, no surprises",
    "w3.p": "Clear engagement letters and transparent fees before work begins.",
    "lm.h": "The Thailand Market Entry Checklist",
    "lm.p": "Twelve questions to answer before you incorporate, from ownership limits to work permit quotas. Free, by email.",
    "lm.btn": "Send me the checklist",
    "lm.modal": "This is a design preview, nothing was sent. On the finished website the checklist arrives instantly and the firm receives a qualified lead with the sender's email.",
    "rv1.text": "They took our Zurich HQ from zero to an operating Thai subsidiary in nine weeks, and we understood every step.",
    "rv1.author": "COO, Swiss manufacturing group",
    "rv2.text": "Finally a firm that answers emails the same day, in French.",
    "rv2.author": "Founder, Geneva software company",
    "rv.sample": "Sample testimonial · replaced by real client references",
    "cl.h": "Bring your business to Bangkok",
    "me.h1": "The market entry roadmap",
    "me.docs": "Typical documents and timeline confirmed at consultation",
    "me.r1.desc": "Choose the right legal structure and register your Thai entity with the authorities.",
    "me.r2.desc": "Apply for BOI promotion or a Foreign Business License if your activity requires it.",
    "me.r3.desc": "Secure visas and work permits for foreign directors, managers and staff.",
    "me.r4.desc": "Open corporate banking, register for tax and set up accounting from day one.",
    "me.r5.desc": "Draft commercial contracts and maintain ongoing regulatory compliance.",
    "f.q1": "What will your company do in Thailand?",
    "f.q2": "Do you need majority foreign ownership?",
    "f.q3": "Will you hire foreign staff?",
    "f.opt.mfg": "Manufacturing or export",
    "f.opt.svc": "Services or consulting",
    "f.opt.reg": "Regional office only",
    "f.opt.yes": "Yes, essential",
    "f.opt.flex": "Flexible",
    "f.opt.hire": "Yes",
    "f.opt.nohire": "No or later",
    "f.rBOI": "A BOI-promoted company is likely your strongest route: full foreign ownership and work permit privileges for qualifying activities.",
    "f.rTH": "A Thai limited company may be the fastest, most flexible structure for you.",
    "f.rRO": "A representative office or regional office structure fits a non-trading presence.",
    "f.note": "Indicative only, your exact route is confirmed in a consultation.",
    "note.boi": "Structure finder result: BOI-promoted company",
    "note.th": "Structure finder result: Thai limited company",
    "note.ro": "Structure finder result: Representative or regional office",
    "s.h1": "Services",
    "s.sub": "Market entry is the core. Around it, everything a foreign-owned business in Thailand needs.",
    "s1.t": "Corporate & Commercial",
    "s1.p": "Incorporation, structures and ongoing governance.",
    "s2.t": "Immigration: visas & work permits",
    "s2.p": "The right status for you and your team.",
    "s3.t": "Contracts & agreements",
    "s3.p": "Clearly drafted, negotiated in your language.",
    "s4.t": "Employment & labor",
    "s4.p": "Hiring, managing and separating under Thai law.",
    "s5.t": "Property & leases",
    "s5.p": "Offices, space and leases without pitfalls.",
    "s6.t": "Intellectual property & trademarks",
    "s6.p": "Protect your name in the Thai market.",
    "s.more": "The firm also advises on civil, family and other matters, ask us.",
    "s.cta": "Discuss this topic",
    "t.h1": "The team",
    "t1.name": "Jeeranan Maisaendee",
    "t1.role": "Attorney at Law · Director",
    "t1.p": "Thai attorney, Chulalongkorn University. Leads every engagement.",
    "t2.name": "Chango V. Zaza Favre",
    "t2.role": "Business & Legal Adviser",
    "t2.p": "Swiss adviser bridging international clients and Thai practice.",
    "lang.en": "English",
    "lang.fr": "French",
    "lang.de": "German",
    "lang.es": "Spanish",
    "lang.th": "Thai",
    "ct.h1": "Contact Outsiders Legal",
    "c.btn": "Request a consultation",
    "c.modal": "This is a design preview, nothing was sent yet. On the finished website this request reaches the firm's inbox instantly with the topic pre-sorted.",
    "form.company": "Company",
    "form.name": "Name",
    "form.email": "Email",
    "form.phone": "Phone or WhatsApp",
    "form.topic": "Topic",
    "form.message": "Message",
    "form.topic.entry": "Market entry",
    "form.topic.reg": "Company registration",
    "form.topic.boi": "BOI",
    "form.topic.visa": "Visas & work permits",
    "form.topic.contracts": "Contracts",
    "form.topic.other": "Other",
    "form.topic.corporate": "Corporate & Commercial",
    "form.topic.immigration": "Immigration: visas & work permits",
    "form.topic.employment": "Employment & labor",
    "form.topic.property": "Property & leases",
    "form.topic.ip": "Intellectual property & trademarks",
    "c.card.address": "Address",
    "c.card.phone": "Phone",
    "map.open": "Open in Google Maps",
    "f.tag": "Swiss and Thai legal counsel on Charoen Krung, Bangkok.",
    "f.col.contact": "Contact",
    "f.col.find": "Find us",
    "f.phone.en": "Thai & English +66 909 730 227",
    "f.phone.fr": "Français +66 816 964 798",
    "f.addr": "No.357 Soi Charoen Krung 43, Bang Rak, Bangkok 10500",
    "f.lang": "We work in English, French, German, Spanish and Thai.",
    "f.credit": "Design preview by Mikaro Studio · mikaro.studio",
    "modal.close": "Close",
    "brand.name": "OUTSIDERS",
    "brand.sub": "LEGAL · BANGKOK",
    "alt.logo": "Outsiders Legal",
    "alt.hero": "Outsiders Legal, Bangkok",
    "alt.team1": "Jeeranan Maisaendee",
    "alt.team2": "Chango V. Zaza Favre",
    "alt.office": "Outsiders Legal office"
  },
  fr: {
    "ribbon.text": "Maquette de site créée pour Outsiders Legal par Mikaro Studio. Ce n'est pas encore le site officiel du cabinet.",
    "ribbon.close": "Fermer ce message",
    "nav.home": "Accueil",
    "nav.market": "Implantation",
    "nav.services": "Services",
    "nav.team": "Équipe",
    "nav.contact": "Contact",
    "nav.cta": "Prendre rendez-vous",
    "float.txt": "Prendre rendez-vous",
    "hamburger.label": "Menu",
    "drawer.close": "Fermer le menu",
    "title.home": "Outsiders Legal - Conseil juridique suisse et thaï à Bangkok",
    "title.market": "Feuille de route - Outsiders Legal",
    "title.services": "Services - Outsiders Legal",
    "title.team": "L'équipe - Outsiders Legal",
    "title.contact": "Contact - Outsiders Legal",
    "h.eyebrow": "SWISS-THAI LEGAL COUNSEL · BANGKOK",
    "h.h1": "Implantez-vous en Thaïlande en toute certitude",
    "h.sub": "Outsiders Legal accompagne les entreprises internationales sur le marché thaïlandais : création de société, promotion BOI, visas et permis de travail, contrats et conformité, expliqués clairement dans votre langue.",
    "h.cta1": "Prendre rendez-vous",
    "h.cta2": "Voir la feuille de route",
    "h.t1": "Dirigé par une avocate thaïe diplômée de Chulalongkorn",
    "h.t2": "Conseiller d'affaires suisse dans l'équipe",
    "h.t3": "Cinq langues de travail",
    "h.stat": "Un seul cabinet, de la création à l'exploitation",
    "sec01.label": "01",
    "sec01.title": "La feuille de route",
    "sec02.label": "02",
    "sec02.title": "Pourquoi Outsiders",
    "sec03.label": "03",
    "sec03.title": "Checklist d'implantation",
    "sec04.label": "04",
    "sec04.title": "References clients",
    "pq": "La certitude n'est pas une promesse, c'est une méthode.",
    "r1": "Structure et création",
    "r2": "BOI ou licence d'entreprise étrangère",
    "r3": "Visas et permis de travail",
    "r4": "Banque, fiscalité et comptabilité",
    "r5": "Contrats et conformité continue",
    "r.cta": "Où en êtes-vous ?",
    "w1.t": "La clarté d'abord",
    "w1.p": "Nous expliquons chaque option et chaque étape avant tout engagement, en langage clair.",
    "w2.t": "Suisse et thaï par conception",
    "w2.p": "Une avocate thaïe et un conseiller suisse sur le même dossier : droit local, standards internationaux.",
    "w3.t": "Périmètres fixes, sans surprise",
    "w3.p": "Lettres de mission claires et honoraires transparents avant de commencer.",
    "lm.h": "La checklist d'implantation en Thaïlande",
    "lm.p": "Douze questions à régler avant de créer votre société, des limites de participation étrangère aux quotas de permis de travail. Gratuit, par email.",
    "lm.btn": "Recevoir la checklist",
    "lm.modal": "Ceci est une maquette, rien n'a été envoyé. Sur le site final, la checklist part instantanément et le cabinet reçoit un contact qualifié.",
    "rv1.text": "De zéro à une filiale thaïlandaise opérationnelle en neuf semaines, et nous avons compris chaque étape.",
    "rv1.author": "COO, groupe industriel suisse",
    "rv2.text": "Enfin un cabinet qui répond aux emails le jour même, en français.",
    "rv2.author": "Fondateur, société genevoise de logiciels",
    "rv.sample": "Témoignage exemple · remplacé par de vraies références",
    "cl.h": "Amenez votre entreprise à Bangkok",
    "me.h1": "La feuille de route",
    "me.docs": "Documents types et délais confirmés en consultation",
    "me.r1.desc": "Choisissez la structure juridique adaptée et enregistrez votre entité thaïlandaise.",
    "me.r2.desc": "Demandez la promotion BOI ou une licence d'entreprise étrangère si nécessaire.",
    "me.r3.desc": "Obtenez visas et permis de travail pour dirigeants et personnel étrangers.",
    "me.r4.desc": "Ouvrez un compte bancaire, inscrivez-vous fiscalement et mettez en place la comptabilité.",
    "me.r5.desc": "Rédigez vos contrats commerciaux et maintenez la conformité réglementaire.",
    "f.q1": "Que fera votre société en Thaïlande ?",
    "f.q2": "Avez-vous besoin d'une participation étrangère majoritaire ?",
    "f.q3": "Recruterez-vous du personnel étranger ?",
    "f.opt.mfg": "Production ou export",
    "f.opt.svc": "Services ou conseil",
    "f.opt.reg": "Bureau régional uniquement",
    "f.opt.yes": "Oui, essentiel",
    "f.opt.flex": "Flexible",
    "f.opt.hire": "Oui",
    "f.opt.nohire": "Non ou plus tard",
    "f.rBOI": "Une société promue BOI est probablement votre meilleure voie : détention étrangère à 100% et privilèges de permis de travail pour les activités éligibles.",
    "f.rTH": "Une société thaïlandaise à responsabilité limitée peut être la structure la plus rapide et flexible.",
    "f.rRO": "Un bureau de représentation ou bureau régional convient à une présence sans activité commerciale.",
    "f.note": "Indicatif seulement, votre voie exacte est confirmée en consultation.",
    "note.boi": "Résultat structure : société promue BOI",
    "note.th": "Résultat structure : société thaïlandaise",
    "note.ro": "Résultat structure : bureau de représentation ou régional",
    "s.h1": "Services",
    "s.sub": "L'implantation est le coeur. Autour, tout ce dont une entreprise étrangère en Thaïlande a besoin.",
    "s1.t": "Droit des sociétés et commercial",
    "s1.p": "Création, structures et gouvernance continue.",
    "s2.t": "Immigration : visas et permis",
    "s2.p": "Le bon statut pour vous et votre équipe.",
    "s3.t": "Contrats et accords",
    "s3.p": "Rédigés clairement, négociés dans votre langue.",
    "s4.t": "Emploi et droit du travail",
    "s4.p": "Recruter, gérer et se séparer selon le droit thaï.",
    "s5.t": "Immobilier et baux",
    "s5.p": "Bureaux, locaux et baux sans pièges.",
    "s6.t": "Propriété intellectuelle et marques",
    "s6.p": "Protégez votre nom sur le marché thaïlandais.",
    "s.more": "Le cabinet conseille aussi en matière civile, familiale et autres, contactez-nous.",
    "s.cta": "Parler de ce sujet",
    "t.h1": "L'équipe",
    "t1.name": "Jeeranan Maisaendee",
    "t1.role": "Avocate · Directrice",
    "t1.p": "Avocate thaïe, Université Chulalongkorn. Dirige chaque dossier.",
    "t2.name": "Chango V. Zaza Favre",
    "t2.role": "Conseiller juridique et commercial",
    "t2.p": "Conseiller suisse, pont entre clients internationaux et pratique thaïe.",
    "lang.en": "Anglais",
    "lang.fr": "Français",
    "lang.de": "Allemand",
    "lang.es": "Espagnol",
    "lang.th": "Thaï",
    "ct.h1": "Contacter Outsiders Legal",
    "c.btn": "Demander une consultation",
    "c.modal": "Ceci est une maquette, rien n'a encore été envoyé. Sur le site final, la demande arrive instantanément, déjà classée par sujet.",
    "form.company": "Société",
    "form.name": "Nom",
    "form.email": "Email",
    "form.phone": "Téléphone ou WhatsApp",
    "form.topic": "Sujet",
    "form.message": "Message",
    "form.topic.entry": "Implantation",
    "form.topic.reg": "Création de société",
    "form.topic.boi": "BOI",
    "form.topic.visa": "Visas et permis de travail",
    "form.topic.contracts": "Contrats",
    "form.topic.other": "Autre",
    "form.topic.corporate": "Droit des sociétés et commercial",
    "form.topic.immigration": "Immigration : visas et permis",
    "form.topic.employment": "Emploi et droit du travail",
    "form.topic.property": "Immobilier et baux",
    "form.topic.ip": "Propriété intellectuelle et marques",
    "c.card.address": "Adresse",
    "c.card.phone": "Téléphone",
    "map.open": "Ouvrir dans Google Maps",
    "f.tag": "Conseil juridique suisse et thaï à Charoen Krung, Bangkok.",
    "f.col.contact": "Contact",
    "f.col.find": "Nous trouver",
    "f.phone.en": "Thaï et anglais +66 909 730 227",
    "f.phone.fr": "Français +66 816 964 798",
    "f.addr": "No.357 Soi Charoen Krung 43, Bang Rak, Bangkok 10500",
    "f.lang": "Nous travaillons en français, anglais, allemand, espagnol et thaï.",
    "f.credit": "Maquette par Mikaro Studio · mikaro.studio",
    "modal.close": "Fermer",
    "brand.name": "OUTSIDERS",
    "brand.sub": "LEGAL · BANGKOK",
    "alt.logo": "Outsiders Legal",
    "alt.hero": "Outsiders Legal, Bangkok",
    "alt.team1": "Jeeranan Maisaendee",
    "alt.team2": "Chango V. Zaza Favre",
    "alt.office": "Bureau Outsiders Legal"
  },
  de: de
};

const out = `/* Outsiders Legal - i18n dictionary and language engine */

(function () {
  "use strict";

  var LANG_KEY = "ol_lang";
  var DEFAULT_LANG = "en";
  var LANGS = ["en", "fr", "de"];

  var dict = ${JSON.stringify(dict, null, 2)};

  function getStoredLang() {
    try {
      var stored = window.localStorage.getItem(LANG_KEY);
      if (stored && LANGS.indexOf(stored) !== -1) {
        return stored;
      }
    } catch (e) {}
    return DEFAULT_LANG;
  }

  function storeLang(lang) {
    try {
      window.localStorage.setItem(LANG_KEY, lang);
    } catch (e) {}
  }

  function translateEl(el, lang) {
    var key = el.getAttribute("data-i18n");
    if (key && dict[lang] && dict[lang][key] !== undefined) {
      el.textContent = dict[lang][key];
    }
    for (var i = 0; i < el.attributes.length; i++) {
      var attr = el.attributes[i];
      if (attr.name.indexOf("data-i18n-") === 0) {
        var targetAttr = attr.name.replace("data-i18n-", "");
        var attrKey = attr.value;
        if (dict[lang] && dict[lang][attrKey] !== undefined) {
          el.setAttribute(targetAttr, dict[lang][attrKey]);
        }
      }
    }
  }

  function applyLang(lang) {
    if (LANGS.indexOf(lang) === -1) {
      lang = DEFAULT_LANG;
    }
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n], [data-i18n-alt], [data-i18n-aria-label], [data-i18n-title], [data-i18n-placeholder]").forEach(function (el) {
      try { translateEl(el, lang); } catch (e) {}
    });
    try {
      var titleKey = document.documentElement.getAttribute("data-i18n-page-title");
      if (titleKey && dict[lang] && dict[lang][titleKey]) {
        document.title = dict[lang][titleKey];
      }
    } catch (e) {}
    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", isActive);
      if (isActive) { btn.setAttribute("aria-current", "true"); }
      else { btn.removeAttribute("aria-current"); }
    });
    storeLang(lang);
    try {
      document.dispatchEvent(new CustomEvent("ol:langchange", { detail: { lang: lang } }));
    } catch (e) {}
  }

  function initLangToggle() {
    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        try { applyLang(btn.getAttribute("data-lang")); } catch (e) {}
      });
    });
  }

  window.olI18n = {
    dict: dict,
    applyLang: applyLang,
    getStoredLang: getStoredLang,
    initLangToggle: initLangToggle
  };

  document.addEventListener("DOMContentLoaded", function () {
    try { initLangToggle(); } catch (e) {}
    try { applyLang(getStoredLang()); } catch (e) {}
  });
})();
`;

fs.writeFileSync(path.join(__dirname, "../assets/js/i18n.js"), out, "utf8");
console.log("i18n.js written");
