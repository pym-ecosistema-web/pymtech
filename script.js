"use strict";
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");
const setMenu = (open) => {
  if (!menuBtn || !nav) return;
  nav.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
};
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
  document.addEventListener("click", e => {
    if (!nav.contains(e.target) && !menuBtn.contains(e.target)) setMenu(false);
  });
}
const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("show"); observer.unobserve(entry.target); }
    });
  }, { threshold: .08 });
  revealElements.forEach(el => observer.observe(el));
} else revealElements.forEach(el => el.classList.add("show"));
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
