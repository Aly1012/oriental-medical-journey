/* ============================================================
   main.js — language toggle, dynamic rendering, dual forms
   Depends on: i18n.js (I18N, BRAND), data.js (content + ICONS)
   ============================================================ */

(function () {
  "use strict";

  const STORE_INQ = "yukang_inquiries";
  let lang = localStorage.getItem("yukang_lang") || "en";

  const $ = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));
  const t = (k) => (I18N[lang][k] !== undefined ? I18N[lang][k] : I18N.en[k]);
  const L = (obj) => (obj && obj[lang] !== undefined ? obj[lang] : obj && obj.en);

  /* ---------- Apply static UI strings ---------- */
  function applyStatic() {
    $$("[data-i18n]").forEach((el) => { el.innerHTML = t(el.getAttribute("data-i18n")); });
    $$("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.getAttribute("data-i18n-html")); });
    $("#brandEn").textContent = BRAND[lang].short;
    $("#brandZh").textContent = BRAND[lang].full;
    $("#footerTag").textContent = BRAND[lang].tagline;
    document.documentElement.lang = lang;
    $("#langToggle").textContent = lang === "en" ? "中 / EN" : "EN / 中";
  }

  /* ---------- Render: hero stats ---------- */
  function renderHeroStats() {
    $("#heroStats").innerHTML = HERO_STATS.map((s) =>
      `<div class="stat"><div class="stat-value">${s.value}</div><div class="stat-label">${L(s.label)}</div></div>`
    ).join("");
  }

  /* ---------- Render: why ---------- */
  function renderWhy() {
    $("#whyPoints").innerHTML = WHY_POINTS.map((p, i) =>
      `<div class="why-point"><div class="wp-num">0${i + 1}</div><div><h3>${L(p.title)}</h3><p>${L(p.desc)}</p></div></div>`
    ).join("");

    const h = COMPARISON.headers;
    const head = `<tr><th>${L(h[0])}</th><th>${L(h[1])}</th><th>${L(h[2])}</th></tr>`;
    const rows = COMPARISON.rows.map((r) =>
      `<tr><td>${L(r.item)}</td><td>${L(r.china)}</td><td>${L(r.abroad)}</td></tr>`
    ).join("");
    $("#comparisonTable").innerHTML = head + rows;
  }

  /* ---------- Render: services ---------- */
  function renderServices() {
    $("#servicesGrid").innerHTML = SERVICES.map((s) =>
      `<article class="card">
        <div class="icon">${ICONS[s.icon] || ""}</div>
        <h3>${L(s.title)}</h3>
        <p class="desc">${L(s.desc)}</p>
        <ul class="includes">${s.includes.map((i) => `<li>${L(i)}</li>`).join("")}</ul>
        <div class="card-foot"><span class="duration">⏱ ${L(s.duration)}</span><span class="more">→</span></div>
      </article>`
    ).join("");
  }

  /* ---------- Render: institutions ---------- */
  function renderInstitutions() {
    $("#institutionsGrid").innerHTML = INSTITUTIONS.map((ins) =>
      `<article class="card inst-card">
        <div class="rating">★ ${ins.rating.toFixed(1)} <span class="accredit" style="color:var(--red)">· ${ins.accredit}</span></div>
        <h3>${lang === "zh" ? ins.nameZh : ins.name}</h3>
        <p class="meta">${L(ins.city)} · ${L(ins.specialty)}</p>
        <div class="tags">${ins.tags.map((tg) => `<span>${L(tg)}</span>`).join("")}</div>
        <p class="blurb">${L(ins.blurb)}</p>
        <div class="card-foot"><span class="duration">${t("institutions.viewBtn")}</span><span class="more">→</span></div>
      </article>`
    ).join("");
  }

  /* ---------- Render: packages ---------- */
  function renderPackages() {
    $("#packagesGrid").innerHTML = PACKAGES.map((p) =>
      `<article class="card pkg-card ${p.highlight ? "highlight" : ""}">
        <span class="pkg-tag">${p.highlight ? "★ " : ""}${L(p.tagline)}</span>
        <h3>${L(p.name)}</h3>
        <p class="tagline">${L(p.tagline)}</p>
        <div class="price">${L(p.price)} <small>${t("packages.from")} · ${t("packages.per")}</small></div>
        <div class="dur">${L(p.duration)}</div>
        <ul class="includes">${p.includes.map((i) => `<li>${L(i)}</li>`).join("")}</ul>
        <a href="#book" class="btn ${p.highlight ? "btn-gold" : "btn-ghost"} full">${t("packages.cta")}</a>
      </article>`
    ).join("");
  }

  /* ---------- Render: process ---------- */
  function renderProcess() {
    $("#processList").innerHTML = PROCESS.map((p) =>
      `<div class="proc-step"><div class="step-num">${p.step}</div><h4>${L(p.title)}</h4><p>${L(p.desc)}</p></div>`
    ).join("");
  }

  /* ---------- Render: stories ---------- */
  function renderStories() {
    $("#storiesGrid").innerHTML = TESTIMONIALS.map((s) =>
      `<article class="story-card">
        <p class="quote">${L(s.quote)}</p>
        <div class="who"><strong>${s.author}</strong><span>${s.country} · ${L(s.service)}</span></div>
      </article>`
    ).join("");
  }

  /* ---------- Render: FAQ ---------- */
  function renderFaq() {
    $("#faqList").innerHTML = FAQ.map((f, idx) =>
      `<div class="faq-item" data-idx="${idx}">
        <button class="faq-q" type="button">${L(f.q)}<span class="plus">+</span></button>
        <div class="faq-a">${L(f.a)}</div>
      </div>`
    ).join("");
    $$("#faqList .faq-q").forEach((btn) => {
      btn.addEventListener("click", () => btn.parentElement.classList.toggle("open"));
    });
  }

  /* ---------- Render: service select options ---------- */
  function renderServiceSelect() {
    const sel = $("#serviceSelect");
    if (!sel) return;
    sel.innerHTML = `<option value="">${t("service.select.placeholder")}</option>` +
      SERVICES.map((s) => `<option value="${s.id}">${L(s.title)}</option>`).join("");
  }

  /* ---------- Language toggle ---------- */
  function setLang(next) {
    lang = next;
    localStorage.setItem("yukang_lang", lang);
    applyStatic();
    renderAll();
  }

  function renderAll() {
    renderHeroStats();
    renderWhy();
    renderServices();
    renderInstitutions();
    renderPackages();
    renderProcess();
    renderStories();
    renderFaq();
    renderServiceSelect();
  }

  /* ---------- Form handling (demo: store to localStorage) ---------- */
  function store(key, payload) {
    const arr = JSON.parse(localStorage.getItem(key) || "[]");
    arr.push(payload);
    localStorage.setItem(key, JSON.stringify(arr));
  }

  function handleCustomerSubmit(e) {
    e.preventDefault();
    const f = e.target;
    if (!f.name.value.trim() || !f.email.value.trim()) {
      alert(lang === "zh" ? "请填写姓名与邮箱。" : "Please fill in your name and email.");
      return;
    }
    const id = "INQ-" + Date.now().toString(36).toUpperCase();
    store(STORE_INQ, {
      id, type: "customer",
      name: f.name.value, email: f.email.value, phone: f.phone.value,
      country: f.country.value, service: f.service.value,
      date: f.date.value, message: f.message.value,
      ts: new Date().toISOString()
    });
    showSuccess(id);
    f.reset();
    renderServiceSelect();
  }

  function showSuccess(id) {
    $("#customerForm").classList.add("hidden");
    $(".tabs").classList.add("hidden");
    const box = $("#formSuccess");
    box.classList.remove("hidden");
    $("#successDesc").textContent = t("form.successDesc");
    $("#successMeta").textContent = "Inquiry ID: " + id;
  }

  function closeSuccess() {
    $("#formSuccess").classList.add("hidden");
    $(".tabs").classList.remove("hidden");
    $("#customerForm").classList.remove("hidden");
  }

  /* ---------- Submissions demo modal ---------- */
  function openSubmissions() {
    const inq = JSON.parse(localStorage.getItem(STORE_INQ) || "[]");
    const all = inq.map((x) => ({ kind: t("modal.customer"), rows: [
        ["Name", x.name], ["Email", x.email], ["Country", x.country], ["Service", x.service], ["Month", x.date], ["Msg", x.message]
      ], ts: x.ts, id: x.id }))
      .sort((a, b) => (a.ts < b.ts ? 1 : -1));

    const body = all.length === 0
      ? `<p class="sub-empty">${t("modal.empty")}</p>`
      : all.map((s) =>
          `<div class="sub-item">
            <div class="sub-head"><span>${s.kind}</span><span>${s.id}</span></div>
            ${s.rows.filter((r) => r[1]).map((r) => `<div class="sub-row"><b>${r[0]}</b><span>${r[1]}</span></div>`).join("")}
          </div>`
        ).join("");
    $("#submissionsBody").innerHTML = body;
    $("#submissionsModal").classList.remove("hidden");
  }
  function closeSubmissions() { $("#submissionsModal").classList.add("hidden"); }

  /* ---------- Mobile nav ---------- */
  function initNav() {
    const burger = $("#navBurger");
    const nav = $("#primaryNav");
    burger.addEventListener("click", () => nav.classList.toggle("open"));
    $$("#primaryNav a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  /* ---------- Init ---------- */
  function init() {
    applyStatic();
    renderAll();
    initNav();

    $("#langToggle").addEventListener("click", () => setLang(lang === "en" ? "zh" : "en"));
    $("#customerForm").addEventListener("submit", handleCustomerSubmit);
    $("#successClose").addEventListener("click", closeSuccess);
    $("#viewSubmissions").addEventListener("click", openSubmissions);
    $("#modalClose").addEventListener("click", closeSubmissions);
    $("#submissionsModal").addEventListener("click", (e) => { if (e.target.id === "submissionsModal") closeSubmissions(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeSubmissions(); });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
