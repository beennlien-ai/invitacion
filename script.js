const cordWrapper = document.querySelector('.cordWrapper');
const card = document.querySelector('.card');

cordWrapper.addEventListener('click', () => {
  gsap.to(cordWrapper, { opacity: 0, duration: 0.5, onComplete: () => {
    cordWrapper.style.display = "none";
    card.style.display = "block";
  }});
});

document.getElementById('yes').addEventListener('click', () => {
  card.innerHTML = "<h2>¡Sabía que dirías que sí! 🥰</h2><img src='https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif'>";
});

document.getElementById('no').addEventListener('click', () => {
  const btnNo = document.getElementById('no');
  btnNo.style.top = Math.random() * 300 + 'px';
  btnNo.style.left = Math.random() * 300 + 'px';
});