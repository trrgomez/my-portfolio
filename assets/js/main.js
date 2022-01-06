let menu = document.querySelector('#menu')
let header = document.querySelector('#header')

// toggles the menu button
menu.addEventListener('click', function(){
    menu.classList.toggle('fa-times')
    header.classList.toggle('active')
})
