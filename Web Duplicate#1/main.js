// const body = document.body
// const theme = document.querySelector('.b2 button')

// theme.addEventListener ('click', () => {
//     body.classList.toggle('dark-mode')
// })

const themeButton = document.getElementById('theme-toggle');
const body = document.body;

themeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  themeButton.textContent = body.classList.contains('dark-mode') ? 'Light' : 'Dark';
});