// Navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop

    if (window.scrollY > fixedNav) {
       header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger')

const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

// send to whatsapp
function sendToWhatsApp(){
    let number = "+6282362090168"

    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let message = document.getElementById('message').value

    let url = "https://wa.me/" + number + "?text="
    + "Name : " +name+ "%0a"
    + "Email : " +email+ "%0a"
    + "Message : " +message+ "%0a%0a"

    window.open(url, '_blank').focus()

}