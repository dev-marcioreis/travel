const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0)
})


let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')


menu.addEventListener('click', () => {
    menu.classList.toggle('box-menu')
    navbar.classList.toggle('open')
})


window.onscroll = () => {
    menu.classList.remove('box-menu')
    navbar.classList.remove('open')
}
