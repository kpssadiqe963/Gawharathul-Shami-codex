let language = "ar";
let theme = "light";
const $ = (selector) => document.querySelector(selector);
function phoneHref(number) { return `tel:${number.replace(/[^+\d]/g, "")}`; }
function renderShowrooms() {
  const t = siteContent[language];
  $("#showroom-grid").innerHTML = siteContent.showrooms.map((s, index) => `
    <article class="showroom-card ${index === 0 ? "featured" : ""}">
      <img src="${s.image}" alt="${language === "ar" ? s.nameAr : s.name}" loading="lazy">
      <div class="card-overlay"><span class="city">${s.city}</span><h3>${language === "ar" ? s.nameAr : s.name}</h3></div>
      <div class="card-details"><p class="branch-address"><span aria-hidden="true">⌖</span>${language === "ar" ? s.addressAr : s.address}</p><p class="branch-phone"><span aria-hidden="true">☎</span><bdi class="phone-number" dir="ltr">${s.phone}</bdi></p><p><strong>${t.hours}:</strong> ${language === "ar" ? s.hoursAr : s.hours}</p><div class="branch-actions"><a class="map-button" href="${s.map}" target="_blank" rel="noreferrer"><span aria-hidden="true">⌖</span>${t.directions}</a><a class="call-button" href="${phoneHref(s.phone)}"><span aria-hidden="true">☎</span>${t.call}</a></div></div>
    </article>`).join("");
}
function applyLanguage() {
  const t = siteContent[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  $("#language-toggle").textContent = language === "en" ? "ع" : "E";
  document.title = language === "en" ? "Jawharat Al Shami | Butchery" : "ملحمة جوهرة الشامي";
  document.querySelectorAll("[data-i18n]").forEach((element) => { element.innerHTML = t[element.dataset.i18n]; });
  renderShowrooms();
}
function applyTheme() {
  document.documentElement.dataset.theme = theme;
  $("#theme-toggle").textContent = theme === "light" ? "☾" : "☀";
  $("#theme-toggle").setAttribute("aria-label", theme === "light" ? "Switch to dark mode" : "Switch to light mode");
}
function setContacts() {
  const { phone, email, whatsapp } = siteContent.contact;
  ["#header-phone", "#contact-phone"].forEach((id) => { $(id).textContent = phone; $(id).href = phoneHref(phone); $(id).dir = "ltr"; });
  $("#contact-email").hidden = !email; $("#contact-email").textContent = email; $("#contact-email").href = `mailto:${email}`;
  $("#whatsapp-link").href = `https://wa.me/${whatsapp}`;
  $("#floating-whatsapp").href = `https://wa.me/${whatsapp}`;
}
$("#language-toggle").addEventListener("click", () => { language = language === "en" ? "ar" : "en"; applyLanguage(); });
$("#theme-toggle").addEventListener("click", () => { theme = theme === "light" ? "dark" : "light"; applyTheme(); });
$("#menu-button").addEventListener("click", () => $(".nav").classList.toggle("is-open"));
document.querySelectorAll(".nav a").forEach((link) => link.addEventListener("click", () => $(".nav").classList.remove("is-open")));
$("#year").textContent = new Date().getFullYear(); setContacts(); applyTheme(); applyLanguage();
