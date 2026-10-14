const numeroWhatsApp = "2290192482182";

// HAMBURGER
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// FORMULAIRE -> WHATSAPP
const formulaire = document.querySelector(".contact-form");
formulaire.addEventListener("submit", function(e) {
  e.preventDefault();
  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();
  
  if (!nom || !email || !service || !message) {
    alert("Veuillez remplir tous les champs.");
    return;
  }
  
  const texte = `Bonjour FM Digital Studio !\n\nNom : ${nom}\nE-mail : ${email}\nService : ${service}\nMessage : ${message}`;
  const lien = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texte)}`;
  window.open(lien, "_blank");
});