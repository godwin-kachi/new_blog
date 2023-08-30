const hamburger = document.querySelector('.hamburger')
const nav__block = document.querySelector('.nav__right')
const nav__links = document.querySelectorAll('.nav__right ul li')
const delay = 2
const __year = document.querySelector('.__year')

const currentYear = new Date;
const pass = currentYear.getFullYear()
__year.innerHTML = pass

hamburger.addEventListener('click', (e) => {
    nav__block.classList.toggle('active')

    nav__links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `nav__animation .5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${index/7 + 0.5}s`
        }
    })

    hamburger.classList.toggle('toggle')
})

// create a function that handles 
// the subscribe to newsletter section 
// below