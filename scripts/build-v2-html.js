const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");

function head(pageTitle, bodyClass, desc) {
  return `<!DOCTYPE html>
<html lang="en" data-i18n-page-title="${pageTitle}">
<head>
<meta charset="UTF-8">
<script>document.documentElement.classList.add('js');</script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, nofollow">
<link rel="icon" href="assets/img/logo.png" type="image/png">
<link rel="apple-touch-icon" href="assets/img/logo.png">
<title>Outsiders Legal</title>
<meta name="description" content="${desc}">
<link rel="preload" href="fonts/libre-caslon-text-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="fonts/libre-caslon-text-700.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="fonts/inter-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="fonts/inter-500.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="assets/css/main.css">
</head>
<body class="${bodyClass}">`;
}

function ribbon() {
  return `
<div class="preview-ribbon" role="note">
  <p data-i18n="ribbon.text">Live design preview prepared for Outsiders Legal by Mikaro Studio. Not the firm's official website yet.</p>
  <button type="button" class="preview-ribbon-close" aria-label="Close" data-i18n-aria-label="ribbon.close">&times;</button>
</div>`;
}

function header() {
  return `
<header class="site-header">
  <div class="header-inner">
    <a href="index.html" class="brand-link" aria-label="Outsiders Legal">
      <img src="assets/img/logo.png" alt="" class="header-logo" data-i18n-alt="alt.logo" width="160" height="48" decoding="async">
    </a>
    <span class="header-sep" aria-hidden="true"></span>
    <div class="nav-drawer">
      <button type="button" class="drawer-close" aria-label="Close menu" data-i18n-aria-label="drawer.close"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg></button>
      <nav class="main-nav" id="primary-nav" aria-label="Primary">
        <ul>
          <li><a href="index.html" data-i18n="nav.home">Home</a></li>
          <li><a href="market-entry.html" data-i18n="nav.market">Market Entry</a></li>
          <li><a href="services.html" data-i18n="nav.services">Services</a></li>
          <li><a href="team.html" data-i18n="nav.team">Team</a></li>
          <li><a href="contact.html" data-i18n="nav.contact">Contact</a></li>
        </ul>
      </nav>
      <div class="header-actions">
        <div class="lang-toggle seg" role="group" aria-label="Language">
          <button type="button" data-lang="en">EN</button>
          <button type="button" data-lang="fr">FR</button>
          <button type="button" data-lang="de">DE</button>
        </div>
        <a href="contact.html#consult" class="btn btn-cta-header"><span data-i18n="nav.cta">Book a consultation</span></a>
      </div>
    </div>
    <div class="nav-scrim"></div>
    <button type="button" class="hamburger" aria-label="Menu" data-i18n-aria-label="hamburger.label" aria-expanded="false" aria-controls="primary-nav"><span></span><span></span><span></span></button>
  </div>
</header>`;
}

function footer() {
  return `
<footer class="site-footer band-midnight">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col">
        <a href="index.html" class="footer-logo footer-logo-chip" aria-label="Outsiders Legal"><img src="assets/img/logo.png" alt="" class="footer-logo-img" data-i18n-alt="alt.logo" width="120" height="44" decoding="async"></a>
        <p data-i18n="f.tag">Swiss and Thai legal counsel on Charoen Krung, Bangkok.</p>
      </div>
      <div class="footer-col">
        <h4 data-i18n="f.col.contact">Contact</h4>
        <p class="phone-label" data-i18n="f.phone.en">Thai &amp; English +66 909 730 227</p>
        <a class="footer-line" href="tel:+66909730227">+66 909 730 227</a>
        <p class="phone-label" data-i18n="f.phone.fr">Français +66 816 964 798</p>
        <a class="footer-line" href="tel:+66816964798">+66 816 964 798</a>
      </div>
      <div class="footer-col">
        <h4 data-i18n="f.col.find">Find us</h4>
        <p data-i18n="f.addr">No.357 Soi Charoen Krung 43, Bang Rak, Bangkok 10500</p>
        <p class="footer-lang" data-i18n="f.lang">We work in English, French, German, Spanish and Thai.</p>
      </div>
    </div>
    <div class="footer-credit-wrap">
      <p class="footer-credit" data-i18n="f.credit">Design preview by Mikaro Studio · mikaro.studio</p>
    </div>
  </div>
</footer>`;
}

function floatBtn() {
  return `
<a href="contact.html#consult" class="float-reserve" aria-label="Book a consultation" data-i18n-aria-label="float.txt">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg>
  <span data-i18n="float.txt">Book a consultation</span>
</a>`;
}

function scripts() {
  return `
<script src="assets/js/i18n.js"></script>
<script src="assets/js/main.js"></script>
</body>
</html>`;
}

const icons = {
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 4v16M4 12h16"></path><path d="M12 6.5l1.8 4.2H10.2L12 6.5z"></path></svg>',
  bridge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M3 15c3.5-2.5 6.5-2.5 9 0s5.5 2.5 9 0"></path><path d="M12 12V9"></path><path d="M9.5 9h5l-2.5-3-2.5 3z"></path></svg>',
  seal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M7 4h10v14H7z"></path><path d="M9.5 8h5M9.5 11h5M9.5 14h3"></path><circle cx="17.5" cy="17" r="2.5"></circle></svg>'
};

function stepperSteps(vertical) {
  const cls = vertical ? "stepper stepper-vertical" : "stepper roadmap-strip";
  const nums = ["01", "02", "03", "04", "05"];
  const keys = ["r1", "r2", "r3", "r4", "r5"];
  return `<div class="${cls}" data-reveal>${nums.map((n, i) =>
    `<div class="stepper-step roadmap-step"><span class="step-num">${n}</span><p data-i18n="${keys[i]}">Step</p></div>`
  ).join("")}</div>`;
}

function ghostSection(num, titleKey, titleDefault, inner, bandClass) {
  return `
  <section class="${bandClass} has-section-ghost">
    <span class="section-ghost section-ghost-right" aria-hidden="true">${num}</span>
    <div class="container">
      <div class="section-head" data-reveal>
        <p class="section-label"><span class="label-num">${num}</span> <span data-i18n="${titleKey}">${titleDefault}</span></p>
        <div class="gold-line" data-reveal="line"></div>
      </div>
      ${inner}
    </div>
  </section>`;
}

const index = `${head("title.home", "page-home", "Swiss-Thai legal counsel for international companies entering Thailand.")}${ribbon()}${header()}
<main>
  <section class="hero-split">
    <div class="hero-panel">
      <p class="eyebrow hero-cascade-item hero-delay-1" data-i18n-skip>SWISS-THAI LEGAL COUNSEL · BANGKOK</p>
      <h1 class="hero-cascade-item hero-delay-2" data-i18n="h.h1">Enter Thailand with certainty</h1>
      <p class="hero-sub hero-cascade-item hero-delay-3" data-i18n="h.sub">Outsiders Legal guides international companies into the Thai market.</p>
      <div class="hero-ctas hero-cascade-item hero-delay-4">
        <a href="contact.html#consult" class="btn" data-i18n="h.cta1">Book a consultation</a>
        <a href="market-entry.html" class="btn btn-ghost" data-i18n="h.cta2">See the market entry roadmap</a>
      </div>
      <ul class="trust-bar hero-cascade-item hero-delay-5">
        <li data-i18n="h.t1">Led by a Chulalongkorn-trained Thai attorney</li>
        <li data-i18n="h.t2">Swiss business adviser on the team</li>
        <li data-i18n="h.t3">Five working languages</li>
      </ul>
    </div>
    <div class="hero-media">
      <div class="hero-media-frame" data-curtain>
        <img class="frame-img" src="assets/img/hero.jpg" alt="" data-i18n-alt="alt.hero" data-fallback width="960" height="1080" loading="eager" fetchpriority="high" decoding="async">
      </div>
      <div class="stat-card hero-stat hero-stat-enter">
        <span class="stat-num">01</span>
        <p data-i18n="h.stat">One firm from incorporation to operations</p>
      </div>
    </div>
  </section>

  ${ghostSection("01", "sec01.title", "The roadmap", `
      ${stepperSteps(false)}
      <div class="section-cta" data-reveal><a href="market-entry.html#finder" class="btn btn-ghost" data-i18n="r.cta">Where are you on the road?</a></div>
  `, "band-ivory roadmap-teaser")}

  ${ghostSection("02", "sec02.title", "Why Outsiders", `
      <div class="why-grid stagger">
        <div class="card why-card" data-reveal><span class="card-icon">${icons.compass}</span><h3 data-i18n="w1.t">Clarity first</h3><p data-i18n="w1.p">We explain every option and every step before you commit, in plain language.</p></div>
        <div class="card why-card" data-reveal><span class="card-icon">${icons.bridge}</span><h3 data-i18n="w2.t">Swiss-Thai by design</h3><p data-i18n="w2.p">A Thai attorney and a Swiss adviser on the same file: local law, international standards.</p></div>
        <div class="card why-card" data-reveal><span class="card-icon">${icons.seal}</span><h3 data-i18n="w3.t">Fixed scopes, no surprises</h3><p data-i18n="w3.p">Clear engagement letters and transparent fees before work begins.</p></div>
      </div>
  `, "band-white why-section")}

  <section class="pull-quote-band band-ivory" data-reveal>
    <div class="container">
      <blockquote class="pull-quote" data-i18n="pq">Certainty is not a promise, it is a process.</blockquote>
    </div>
  </section>

  ${ghostSection("03", "sec03.title", "Market entry checklist", `
      <div class="lead-inner checklist-layout checklist-reveal" data-reveal>
        <div class="lead-copy checklist-copy">
          <h2 data-i18n="lm.h">The Thailand Market Entry Checklist</h2>
          <p data-i18n="lm.p">Twelve questions to answer before you incorporate, from ownership limits to work permit quotas. Free, by email.</p>
        </div>
        <form class="lead-form dark-form checklist-form" novalidate>
          <label class="visually-hidden" for="lead-email">Email</label>
          <input type="email" id="lead-email" name="email" required placeholder="Email" data-i18n-placeholder="form.email">
          <button type="submit" class="btn btn-on-dark" data-i18n="lm.btn">Send me the checklist</button>
        </form>
      </div>
  `, "band-midnight lead-band")}

  ${ghostSection("04", "sec04.title", "Client references", `
      <div class="reviews-grid stagger">
        <div class="card review-card" data-reveal="left">
          <p class="quote" data-i18n="rv1.text">They took our Zurich HQ from zero to an operating Thai subsidiary in nine weeks, and we understood every step.</p>
          <p class="author" data-i18n="rv1.author">COO, Swiss manufacturing group</p>
        </div>
        <div class="card review-card" data-reveal="right">
          <p class="quote" data-i18n="rv2.text">Finally a firm that answers emails the same day, in French.</p>
          <p class="author" data-i18n="rv2.author">Founder, Geneva software company</p>
        </div>
      </div>
      <p class="review-sample-note" data-i18n="rv.sample">Sample testimonial · replaced by real client references</p>
  `, "band-ivory reviews-section")}

  <section class="closing-band band-midnight">
    <div class="container text-center">
      <h2 data-reveal data-i18n="cl.h">Bring your business to Bangkok</h2>
      <a href="contact.html#consult" class="btn btn-on-dark" data-reveal data-i18n="nav.cta">Book a consultation</a>
    </div>
  </section>
</main>
${footer()}${floatBtn()}
<div class="modal-overlay lm-modal" role="dialog" aria-modal="true">
  <div class="modal-box"><p data-i18n="lm.modal">This is a design preview, nothing was sent.</p><button type="button" class="btn modal-close" data-i18n="modal.close">Close</button></div>
</div>${scripts()}`;

const serviceSlugs = ["corporate", "immigration", "contracts", "employment", "property", "ip"];

const marketSteps = [1, 2, 3, 4, 5].map((n) => `
      <article class="roadmap-block card stepper-step" data-reveal>
        <span class="step-num">0${n}</span>
        <h2 data-i18n="r${n}">Step ${n}</h2>
        <p data-i18n="me.r${n}.desc">Description</p>
        <p class="muted-note" data-i18n="me.docs">Typical documents and timeline confirmed at consultation</p>
      </article>`).join("");

const marketEntry = `${head("title.market", "page-market", "Market entry roadmap for Thailand.")}${ribbon()}${header()}
<main>
  <section class="page-hero band-ivory">
    <div class="container section-head" data-reveal>
      <h1 data-i18n="me.h1">The market entry roadmap</h1>
      <div class="gold-line" data-reveal="line"></div>
    </div>
  </section>
  <section class="roadmap-vertical band-white">
    <div class="container">
      <div class="stepper stepper-vertical roadmap-steps" data-reveal>${marketSteps}</div>
    </div>
  </section>
  <section id="finder" class="finder-section band-ivory">
    <div class="container">
      <div class="card finder-card" data-reveal>
        <h2 class="finder-title" data-i18n="r.cta">Where are you on the road?</h2>
        <div class="finder-q"><p data-i18n="f.q1">What will your company do in Thailand?</p>
          <div class="finder-options">${[["mfg","f.opt.mfg"],["svc","f.opt.svc"],["reg","f.opt.reg"]].map(([v,k])=>`<label class="finder-option"><input type="radio" name="q1" value="${v}"><span data-i18n="${k}">Option</span></label>`).join("")}</div></div>
        <div class="finder-q"><p data-i18n="f.q2">Do you need majority foreign ownership?</p>
          <div class="finder-options">${[["yes","f.opt.yes"],["flex","f.opt.flex"]].map(([v,k])=>`<label class="finder-option"><input type="radio" name="q2" value="${v}"><span data-i18n="${k}">Option</span></label>`).join("")}</div></div>
        <div class="finder-q"><p data-i18n="f.q3">Will you hire foreign staff?</p>
          <div class="finder-options">${[["yes","f.opt.hire"],["no","f.opt.nohire"]].map(([v,k])=>`<label class="finder-option"><input type="radio" name="q3" value="${v}"><span data-i18n="${k}">Option</span></label>`).join("")}</div></div>
        <div class="finder-result card" hidden>
          <span class="finder-result-rule" aria-hidden="true"></span>
          <p class="finder-result-text"></p>
          <p class="muted-note" data-i18n="f.note">Indicative only, your exact route is confirmed in a consultation.</p>
          <a href="contact.html#consult" class="btn btn-on-dark finder-result-cta" data-i18n="nav.cta">Book a consultation</a>
        </div>
      </div>
    </div>
  </section>
</main>
${footer()}${floatBtn()}${scripts()}`;

const services = `${head("title.services", "page-services", "Legal services for foreign-owned businesses in Thailand.")}${ribbon()}${header()}
<main>
  <section class="page-hero band-ivory">
    <div class="container section-head" data-reveal>
      <h1 data-i18n="s.h1">Services</h1>
      <p class="section-sub" data-i18n="s.sub">Market entry is the core.</p>
      <div class="gold-line" data-reveal="line"></div>
    </div>
  </section>
  <section class="services-grid-section band-white">
    <div class="container services-grid stagger">
      ${[1,2,3,4,5,6].map((n, i) => `<div class="card service-card" data-reveal><h3 data-i18n="s${n}.t">Service</h3><p data-i18n="s${n}.p">Description</p><a href="contact.html?ev=${serviceSlugs[i]}#consult" class="btn btn-ghost btn-service-cta" data-i18n="s.cta">Discuss this topic</a></div>`).join("")}
    </div>
    <div class="container"><p class="muted-note center-note" data-reveal data-i18n="s.more">The firm also advises on civil, family and other matters, ask us.</p></div>
  </section>
</main>
${footer()}${floatBtn()}${scripts()}`;

const team = `${head("title.team", "page-team", "The Outsiders Legal team in Bangkok.")}${ribbon()}${header()}
<main>
  <section class="page-hero band-ivory">
    <div class="container section-head" data-reveal>
      <h1 data-i18n="t.h1">The team</h1>
      <div class="gold-line" data-reveal="line"></div>
    </div>
  </section>
  <section class="team-section band-white">
    <div class="container team-grid stagger">
      <article class="card team-card" data-reveal>
        <div class="team-photo gold-inset"><img class="frame-img" src="assets/img/team1.jpg" alt="" data-i18n-alt="alt.team1" data-fallback width="400" height="500" loading="lazy" decoding="async"></div>
        <h2 data-i18n="t1.name">Jeeranan Maisaendee</h2>
        <p class="team-role" data-i18n="t1.role">Attorney at Law · Director</p>
        <p data-i18n="t1.p">Thai attorney, Chulalongkorn University. Leads every engagement.</p>
      </article>
      <article class="card team-card" data-reveal>
        <div class="team-photo gold-inset"><img class="frame-img" src="assets/img/team2.jpg" alt="" data-i18n-alt="alt.team2" data-fallback width="400" height="500" loading="lazy" decoding="async"></div>
        <h2 data-i18n="t2.name">Chango V. Zaza Favre</h2>
        <p class="team-role" data-i18n="t2.role">Business &amp; Legal Adviser</p>
        <p data-i18n="t2.p">Swiss adviser bridging international clients and Thai practice.</p>
      </article>
    </div>
  </section>
  <section class="lang-band band-ivory">
    <div class="container lang-chips" data-reveal>
      <span class="lang-chip" data-i18n="lang.en">English</span>
      <span class="lang-chip" data-i18n="lang.fr">French</span>
      <span class="lang-chip" data-i18n="lang.de">German</span>
      <span class="lang-chip" data-i18n="lang.es">Spanish</span>
      <span class="lang-chip" data-i18n="lang.th">Thai</span>
    </div>
  </section>
  <section class="office-section band-white">
    <div class="container office-frame gold-inset" data-reveal="scale">
      <img class="frame-img" src="assets/img/office1.jpg" alt="" data-i18n-alt="alt.office" data-fallback width="1120" height="630" loading="lazy" decoding="async">
    </div>
  </section>
</main>
${footer()}${floatBtn()}${scripts()}`;

const contact = `${head("title.contact", "page-contact", "Contact Outsiders Legal in Bangkok.")}${ribbon()}${header()}
<main>
  <section id="consult" class="consult-section band-ivory">
    <div class="container">
      <div class="card consult-form reserve-form" data-reveal>
        <form novalidate>
          <div class="form-grid">
            <div class="form-field"><label for="consult-company" data-i18n="form.company">Company</label><input type="text" id="consult-company" name="company" autocomplete="organization"></div>
            <div class="form-field"><label for="consult-name" data-i18n="form.name">Name</label><input type="text" id="consult-name" name="name" required autocomplete="name"></div>
            <div class="form-field"><label for="consult-email" data-i18n="form.email">Email</label><input type="email" id="consult-email" name="email" required autocomplete="email"></div>
            <div class="form-field"><label for="consult-phone" data-i18n="form.phone">Phone or WhatsApp</label><input type="text" id="consult-phone" name="phone"></div>
            <div class="form-field"><label for="consult-topic" data-i18n="form.topic">Topic</label>
              <select id="consult-topic" name="topic" required>
                <option value="entry" data-i18n="form.topic.entry">Market entry</option>
                <option value="reg" data-i18n="form.topic.reg">Company registration</option>
                <option value="boi" data-i18n="form.topic.boi">BOI</option>
                <option value="visa" data-i18n="form.topic.visa">Visas &amp; work permits</option>
                <option value="contracts" data-i18n="form.topic.contracts">Contracts</option>
                <option value="corporate" data-i18n="form.topic.corporate">Corporate &amp; Commercial</option>
                <option value="immigration" data-i18n="form.topic.immigration">Immigration: visas &amp; work permits</option>
                <option value="employment" data-i18n="form.topic.employment">Employment &amp; labor</option>
                <option value="property" data-i18n="form.topic.property">Property &amp; leases</option>
                <option value="ip" data-i18n="form.topic.ip">Intellectual property &amp; trademarks</option>
                <option value="other" data-i18n="form.topic.other">Other</option>
              </select>
            </div>
            <div class="form-field"><label for="consult-note" data-i18n="form.message">Message</label><textarea id="consult-note" name="message"></textarea></div>
            <div class="form-actions"><button type="submit" class="btn" data-i18n="c.btn">Request a consultation</button></div>
          </div>
        </form>
      </div>
    </div>
  </section>
  <section class="info-section band-midnight">
    <div class="container">
      <div class="section-head" data-reveal>
        <h1 data-i18n="ct.h1">Contact Outsiders Legal</h1>
        <div class="gold-line" data-reveal="line"></div>
      </div>
      <div class="info-grid stagger">
        <div class="card info-card on-dark" data-reveal>
          <h3 data-i18n="c.card.phone">Phone</h3>
          <p class="phone-label" data-i18n="f.phone.en">Thai &amp; English +66 909 730 227</p>
          <a href="tel:+66909730227">+66 909 730 227</a>
          <p class="phone-label" data-i18n="f.phone.fr">Français +66 816 964 798</p>
          <a href="tel:+66816964798">+66 816 964 798</a>
        </div>
        <div class="card info-card on-dark" data-reveal>
          <h3 data-i18n="c.card.address">Address</h3>
          <p data-i18n="f.addr">No.357 Soi Charoen Krung 43, Bang Rak, Bangkok 10500</p>
        </div>
      </div>
      <div class="card map-card on-dark" data-reveal="scale"><iframe src="https://maps.google.com/maps?q=Outsiders%20Legal%20Charoen%20Krung%2043%20Bangkok&amp;output=embed" loading="lazy" title="Outsiders Legal map"></iframe></div>
      <div class="map-open" data-reveal><a href="https://maps.google.com/?q=Outsiders+Legal+Charoen+Krung+43+Bangkok" target="_blank" rel="noopener" class="btn btn-on-dark" data-i18n="map.open">Open in Google Maps</a></div>
    </div>
  </section>
</main>
${footer()}${floatBtn()}
<div class="modal-overlay" role="dialog" aria-modal="true">
  <div class="modal-box"><p data-i18n="c.modal">This is a design preview, nothing was sent yet.</p><button type="button" class="btn modal-close" data-i18n="modal.close">Close</button></div>
</div>${scripts()}`;

fs.writeFileSync(path.join(root, "index.html"), index, "utf8");
fs.writeFileSync(path.join(root, "market-entry.html"), marketEntry, "utf8");
fs.writeFileSync(path.join(root, "services.html"), services, "utf8");
fs.writeFileSync(path.join(root, "team.html"), team, "utf8");
fs.writeFileSync(path.join(root, "contact.html"), contact, "utf8");
console.log("v2 HTML pages written");
