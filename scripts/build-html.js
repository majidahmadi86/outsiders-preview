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
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<title>Outsiders Legal</title>
<meta name="description" content="${desc}">
<link rel="preload" href="fonts/source-serif-4-600-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="fonts/inter-400.woff2" as="font" type="font/woff2" crossorigin>
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
    <a href="index.html" class="brand-chip" aria-label="Outsiders Legal">
      <img src="assets/img/logo.png" alt="" class="brand-chip-logo" data-i18n-alt="alt.logo" data-fallback width="140" height="40" decoding="async">
      <span class="brand-chip-text"><span class="brand-name" data-i18n="brand.name">OUTSIDERS LEGAL</span><span class="brand-sub" data-i18n="brand.sub">BANGKOK · SWISS-THAI</span></span>
    </a>
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
          <button type="button" data-lang="th">ไทย</button>
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
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col">
        <a href="index.html" class="footer-logo" aria-label="Outsiders Legal"><img src="assets/img/logo.png" alt="" class="footer-logo-img" data-i18n-alt="alt.logo" data-fallback width="120" height="40" decoding="async"></a>
        <p data-i18n="f.tag">Swiss and Thai legal counsel on Charoen Krung, Bangkok.</p>
      </div>
      <div class="footer-col">
        <h4 data-i18n="f.col.contact">Contact</h4>
        <a class="footer-line" href="tel:+66909730227" data-i18n="f.phone.en">Thai &amp; English +66 909 730 227</a>
        <a class="footer-line" href="tel:+66816964798" data-i18n="f.phone.fr">Français +66 816 964 798</a>
        <p class="footer-line" data-i18n="f.addr">No.357 Soi Charoen Krung 43, Bang Rak, Bangkok 10500</p>
        <p class="footer-lang" data-i18n="f.lang">We work in English, French, German, Spanish and Thai.</p>
      </div>
      <div class="footer-col">
        <h4 data-i18n="f.col.find">Find us</h4>
        <p data-i18n="f.addr">No.357 Soi Charoen Krung 43, Bang Rak, Bangkok 10500</p>
      </div>
    </div>
    <p class="footer-credit" data-i18n="f.credit">Design preview by Mikaro Studio · mikaro.studio</p>
  </div>
</footer>`;
}

function floatBtn() {
  return `
<a href="contact.html#consult" class="float-reserve" aria-label="Book a consultation" data-i18n-aria-label="float.txt">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg>
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

const index = `${head("title.home", "page-home", "Swiss-Thai legal counsel for international companies entering Thailand.")}${ribbon()}${header()}
<main>
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-text">
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
      <div class="hero-visual" data-reveal="scale">
        <div class="hero-frame" data-curtain>
          <img class="frame-img" src="assets/img/hero.jpg" alt="" data-i18n-alt="alt.hero" data-fallback width="640" height="480" loading="eager" fetchpriority="high" decoding="async">
        </div>
        <div class="stat-card" data-reveal>
          <span class="stat-num" data-i18n-skip>01</span>
          <p data-i18n="h.stat">One firm from incorporation to operations</p>
        </div>
      </div>
    </div>
  </section>

  <section class="roadmap-teaser band-wash">
    <div class="container">
      <div class="section-head" data-reveal>
        <p class="section-label"><span class="label-num" data-i18n="sec01.label">01</span> <span data-i18n="sec01.title">The roadmap</span></p>
        <div class="red-line"></div>
      </div>
      <div class="roadmap-strip stagger" data-reveal>
        <div class="roadmap-step"><span class="step-num">1</span><p data-i18n="r1">Structure &amp; registration</p></div>
        <div class="roadmap-step"><span class="step-num">2</span><p data-i18n="r2">BOI or Foreign Business License</p></div>
        <div class="roadmap-step"><span class="step-num">3</span><p data-i18n="r3">Visas &amp; work permits</p></div>
        <div class="roadmap-step"><span class="step-num">4</span><p data-i18n="r4">Banking, tax &amp; accounting setup</p></div>
        <div class="roadmap-step"><span class="step-num">5</span><p data-i18n="r5">Contracts &amp; ongoing compliance</p></div>
      </div>
      <div class="section-cta" data-reveal><a href="market-entry.html#finder" class="btn btn-ghost" data-i18n="r.cta">Where are you on the road?</a></div>
    </div>
  </section>

  <section class="why-section">
    <div class="container">
      <div class="section-head" data-reveal>
        <p class="section-label"><span class="label-num" data-i18n="sec02.label">02</span> <span data-i18n="sec02.title">Why Outsiders</span></p>
        <div class="red-line"></div>
      </div>
      <div class="why-grid stagger">
        <div class="card why-card" data-reveal><h3 data-i18n="w1.t">Clarity first</h3><p data-i18n="w1.p">We explain every option and every step before you commit, in plain language.</p></div>
        <div class="card why-card" data-reveal><h3 data-i18n="w2.t">Swiss-Thai by design</h3><p data-i18n="w2.p">A Thai attorney and a Swiss adviser on the same file: local law, international standards.</p></div>
        <div class="card why-card" data-reveal><h3 data-i18n="w3.t">Fixed scopes, no surprises</h3><p data-i18n="w3.p">Clear engagement letters and transparent fees before work begins.</p></div>
      </div>
    </div>
  </section>

  <section class="lead-band">
    <div class="container lead-inner" data-reveal>
      <div class="lead-copy">
        <h2 data-i18n="lm.h">The Thailand Market Entry Checklist</h2>
        <p data-i18n="lm.p">Twelve questions to answer before you incorporate, from ownership limits to work permit quotas. Free, by email.</p>
      </div>
      <form class="lead-form" novalidate>
        <label class="visually-hidden" for="lead-email">Email</label>
        <input type="email" id="lead-email" name="email" required placeholder="Email" data-i18n-placeholder="form.email">
        <button type="submit" class="btn btn-light" data-i18n="lm.btn">Send me the checklist</button>
      </form>
    </div>
  </section>

  <section class="reviews-section band-wash">
    <div class="container">
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
    </div>
  </section>

  <section class="closing-band">
    <div class="container text-center">
      <h2 data-reveal data-i18n="cl.h">Bring your business to Bangkok</h2>
      <a href="contact.html#consult" class="btn btn-outline-light" data-reveal data-i18n="nav.cta">Book a consultation</a>
    </div>
  </section>
</main>
${footer()}${floatBtn()}
<div class="modal-overlay lm-modal" role="dialog" aria-modal="true">
  <div class="modal-box"><p data-i18n="lm.modal">This is a design preview, nothing was sent.</p><button type="button" class="btn modal-close" data-i18n="modal.close">Close</button></div>
</div>${scripts()}`;

const marketEntry = `${head("title.market", "page-market", "Market entry roadmap for Thailand.")}${ribbon()}${header()}
<main>
  <section class="page-hero band-wash">
    <div class="container section-head" data-reveal>
      <h1 data-i18n="me.h1">The market entry roadmap</h1>
      <div class="red-line"></div>
    </div>
  </section>
  <section class="roadmap-vertical">
    <div class="container roadmap-steps">
      ${[1,2,3,4,5].map(n => `
      <article class="roadmap-block card" data-reveal>
        <span class="label-num">${String(n).padStart(2,"0")}</span>
        <h2 data-i18n="r${n}">Step ${n}</h2>
        <p data-i18n="me.r${n}.desc">Description</p>
        <p class="muted-note" data-i18n="me.docs">Typical documents and timeline confirmed at consultation</p>
      </article>`).join("")}
    </div>
  </section>
  <section id="finder" class="finder-section band-wash">
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
          <p class="finder-result-text"></p>
          <p class="muted-note" data-i18n="f.note">Indicative only, your exact route is confirmed in a consultation.</p>
          <a href="contact.html#consult" class="btn finder-result-cta" data-i18n="nav.cta">Book a consultation</a>
        </div>
      </div>
    </div>
  </section>
</main>
${footer()}${floatBtn()}${scripts()}`;

const services = `${head("title.services", "page-services", "Legal services for foreign-owned businesses in Thailand.")}${ribbon()}${header()}
<main>
  <section class="page-hero">
    <div class="container section-head" data-reveal>
      <h1 data-i18n="s.h1">Services</h1>
      <p class="section-sub" data-i18n="s.sub">Market entry is the core.</p>
      <div class="red-line"></div>
    </div>
  </section>
  <section class="services-grid-section band-wash">
    <div class="container services-grid stagger">
      ${[1,2,3,4,5,6].map(n=>`<div class="card service-card" data-reveal><h3 data-i18n="s${n}.t">Service</h3><p data-i18n="s${n}.p">Description</p></div>`).join("")}
    </div>
    <div class="container"><p class="muted-note center-note" data-reveal data-i18n="s.more">The firm also advises on civil, family and other matters, ask us.</p></div>
  </section>
</main>
${footer()}${floatBtn()}${scripts()}`;

const team = `${head("title.team", "page-team", "The Outsiders Legal team in Bangkok.")}${ribbon()}${header()}
<main>
  <section class="page-hero band-wash">
    <div class="container section-head" data-reveal>
      <h1 data-i18n="t.h1">The team</h1>
      <div class="red-line"></div>
    </div>
  </section>
  <section class="team-section">
    <div class="container team-grid stagger">
      <article class="card team-card" data-reveal>
        <div class="team-photo"><img class="frame-img" src="assets/img/team1.jpg" alt="" data-i18n-alt="alt.team1" data-fallback width="400" height="480" loading="lazy" decoding="async"></div>
        <h2 data-i18n="t1.name">Jeeranan Maisaendee</h2>
        <p class="team-role" data-i18n="t1.role">Attorney at Law · Director</p>
        <p data-i18n="t1.p">Thai attorney, Chulalongkorn University. Leads every engagement.</p>
      </article>
      <article class="card team-card" data-reveal>
        <div class="team-photo"><img class="frame-img" src="assets/img/team2.jpg" alt="" data-i18n-alt="alt.team2" data-fallback width="400" height="480" loading="lazy" decoding="async"></div>
        <h2 data-i18n="t2.name">Chango V. Zaza Favre</h2>
        <p class="team-role" data-i18n="t2.role">Business &amp; Legal Adviser</p>
        <p data-i18n="t2.p">Swiss adviser bridging international clients and Thai practice.</p>
      </article>
    </div>
  </section>
  <section class="lang-band">
    <div class="container lang-chips" data-reveal>
      <span class="lang-chip" data-i18n="lang.en">English</span>
      <span class="lang-chip" data-i18n="lang.fr">French</span>
      <span class="lang-chip" data-i18n="lang.de">German</span>
      <span class="lang-chip" data-i18n="lang.es">Spanish</span>
      <span class="lang-chip" data-i18n="lang.th">Thai</span>
    </div>
  </section>
  <section class="office-section band-wash">
    <div class="container office-frame" data-reveal="scale">
      <img class="frame-img" src="assets/img/office1.jpg" alt="" data-i18n-alt="alt.office" data-fallback width="1120" height="630" loading="lazy" decoding="async">
    </div>
  </section>
</main>
${footer()}${floatBtn()}${scripts()}`;

const contact = `${head("title.contact", "page-contact", "Contact Outsiders Legal in Bangkok.")}${ribbon()}${header()}
<main>
  <section id="consult" class="consult-section">
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
  <section class="info-section band-wash">
    <div class="container">
      <div class="section-head" data-reveal>
        <h1 data-i18n="ct.h1">Contact Outsiders Legal</h1>
        <div class="red-line"></div>
      </div>
      <div class="info-grid stagger">
        <div class="card info-card" data-reveal><h3 data-i18n="c.card.phone">Phone</h3><a href="tel:+66909730227" data-i18n="f.phone.en">Thai &amp; English +66 909 730 227</a><br><a href="tel:+66816964798" data-i18n="f.phone.fr">Français +66 816 964 798</a></div>
        <div class="card info-card" data-reveal><h3 data-i18n="c.card.address">Address</h3><p data-i18n="f.addr">No.357 Soi Charoen Krung 43, Bang Rak, Bangkok 10500</p></div>
      </div>
      <div class="card map-card" data-reveal="scale"><iframe src="https://maps.google.com/maps?q=Outsiders%20Legal%20Charoen%20Krung%2043%20Bangkok&amp;output=embed" loading="lazy" title="Outsiders Legal map"></iframe></div>
      <div class="map-open" data-reveal><a href="https://maps.google.com/?q=Outsiders+Legal+Charoen+Krung+43+Bangkok" target="_blank" rel="noopener" class="btn btn-ghost" data-i18n="map.open">Open in Google Maps</a></div>
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
console.log("HTML pages written");
