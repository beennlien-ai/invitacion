const sunflowerGif = document.getElementById('sunflowerGif');
const sunflowerWrapper = document.querySelector('.sunflowerWrapper');
const card = document.querySelector('.card');

sunflowerGif.addEventListener('click', () => {
  gsap.to(sunflowerGif, { rotation: 360, scale: 1.2, duration: 1 });
  setTimeout(() => {
    sunflowerWrapper.style.display = "none";
    card.style.display = "block";
  }, 1000);
});

document.getElementById('yes').addEventListener('click', () => {
  card.innerHTML = "<h2>¡Sabía que dirías que sí! 🥰</h2><img src='https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif'>";
});

document.getElementById('no').addEventListener('click', (e) => {
  e.target.style.top = Math.random() * 400 + 'px';
  e.target.style.left = Math.random() * 300 + 'px';
});
