/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('#nav-menu'),
navToggle = document.querySelector('#nav-toggle'),
navClose = document.querySelector('#nav-close')

// Menu show
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Menu hidden
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLinks.forEach( link => link.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // ServiceID - templateID - #form - publicKey
    emailjs.sendForm('service_5d31rys', 'template_ma071rq', '#contact-form', 'zrspgreNrllSSlfaw')
    .then(() => {
        // Show message sent
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()
    }, () => {
        // Show wrror message
        contactMessage.textContent = "Message not sent (Service error) ❌"

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)
    })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    //When the scroll is higher than 350 viewport height, add the scrollup class to the a tag with the scroll up id
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY 
    
    sections.forEach(current => {
        const 
        sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop-58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' +sectionId+']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active__link')
        } else {
            sectionsClass.classList.remove('active__link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal ('.home__data, .experience, .skills, .contact__container')
sr.reveal ('.home__img', {delay:600})
sr.reveal ('.home__scroll', {delay:800})
sr.reveal ('.work__card', {interval:100})
sr.reveal ('.about__content', {origin:'right'})
sr.reveal ('.about__img', {origin:'left'})