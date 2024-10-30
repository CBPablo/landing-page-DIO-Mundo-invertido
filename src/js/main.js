const button = document.getElementById('switch-theme-button')
button.addEventListener('click',swithTheme)

function swithTheme(){
   const body = document.querySelector('body')
   body.classList.toggle("dark-theme")
}