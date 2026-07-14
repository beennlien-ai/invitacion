const sunflowerImg = document.getElementById('sunflowerImg');
const sunflowerWrapper = document.querySelector('.sunflowerWrapper');
const card = document.querySelector('.card');
const btnNo = document.getElementById('no');
const btnYes = document.getElementById('yes');

// 1. CUANDO TOCAS EL GIRASOL
sunflowerImg.addEventListener('click', () => {
  // efecto bonito
  gsap.to(sunflowerImg, { scale: 1.1, duration: 0.3 });
  
  // espera 0.5 seg y cambia de pantalla
  setTimeout(() => {
    sunflowerWrapper.style.display = "none"; // esconde girasol
    card.style.display = "block"; // muestra la pregunta
    gsap.from(card, {scale: 0.5, opacity: 0, duration: 0.5});
  }, 500);
});

// 2. CUANDO TOCAN "SÍ"
btnYes.addEventListener('click', () => {
  card.innerHTML = "<h2>¡Sabía que dirías que sí! 🥰</h2><img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzhnYmZ4cGljbXFuMDdidTFzYWlhaTByOWt4OXhxaW05cm1tNXZwaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o6wrcORsKPdnGP7gs/giphy.gif'>";
});

// 3. CUANDO TOCAN "NO" - se escapa
btnNo.addEventListener('click', (e) => {
  e.target.style.position = "absolute";
  e.target.style.top = Math.random() * 300 + 100 + 'px';
  e.target.style.left = Math.random() * 200 + 50 + 'px';
});
