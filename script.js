"use strict";
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const mobileMenu = window.matchMedia("(max-width: 1050px)");
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");
const setMenu = (open) => {
  if (!menuBtn || !nav) return;
  const expanded = mobileMenu.matches && open;
  if (!expanded && mobileMenu.matches && nav.contains(document.activeElement)) menuBtn.focus();
  nav.classList.toggle("open", expanded);
  nav.inert = mobileMenu.matches && !expanded;
  menuBtn.setAttribute("aria-expanded", String(expanded));
  menuBtn.setAttribute("aria-label", expanded ? "Cerrar menú" : "Abrir menú");
};
if (menuBtn && nav) {
  setMenu(false);
  menuBtn.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && nav.classList.contains("open")) {
      setMenu(false);
      menuBtn.focus();
    }
  });
  document.addEventListener("click", event => {
    if (!nav.contains(event.target) && !menuBtn.contains(event.target)) setMenu(false);
  });
  mobileMenu.addEventListener("change", () => setMenu(false));
}
const revealElements = document.querySelectorAll(".reveal");
const hero = document.querySelector(".hero");
const heroCopy = document.querySelector(".hero-copy");
let revealObserver;
const revealAll = () => revealElements.forEach(element => {
  element.classList.remove("is-pending");
  element.classList.add("show");
});
const syncMotion = () => {
  if (revealObserver) revealObserver.disconnect();
  const allowMotion = !motionPreference.matches;
  if (hero) hero.classList.toggle("motion-ready", allowMotion);
  if (heroCopy) heroCopy.classList.toggle("motion-ready", allowMotion);
  if (!allowMotion || !("IntersectionObserver" in window)) {
    revealAll();
    return;
  }
  try {
    revealObserver = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("is-pending");
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: .08 });
    revealElements.forEach(element => {
      if (element === heroCopy) {
        element.classList.add("show");
      } else if (!element.classList.contains("show")) {
        element.classList.add("is-pending");
        revealObserver.observe(element);
      }
    });
  } catch {
    revealAll();
  }
};
syncMotion();
motionPreference.addEventListener("change", syncMotion);
const form = document.getElementById("quoteForm");
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const get = id => document.getElementById(id).value.trim();
    const message = [
      "Hola PyM-Tech, deseo solicitar una cotización.", "",
      `Nombre: ${get("qName")}`,
      `Empresa: ${get("qCompany") || "No indicada"}`,
      `Teléfono: ${get("qPhone") || "No indicado"}`,
      `Requerimiento: ${get("qType")}`,
      `Detalle: ${get("qNeed")}`
    ].join("\n");
    const url = `https://wa.me/51940410742?text=${encodeURIComponent(message)}`;
    const status = document.getElementById("formStatus");
    const popup = window.open(url, "_blank", "noopener,noreferrer");
    if (status) status.textContent = "Si WhatsApp no se abre, usa el enlace siguiente.";
    if (status) {
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "Abrir solicitud en WhatsApp";
      status.replaceChildren(link);
    }
  });
}
