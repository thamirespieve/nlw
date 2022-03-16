// DOM- Document Object Model
/* Abre e fecha o menu quando clicar no icone */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

// Para cada elemento de toggle
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* Quando clicar em um item do menu, esconder o menu */
/* Pegou os seletores da lista */
const links = document.querySelectorAll('nav ul li a')

for (const element of links) {
  element.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Mudar o header da pagina quando der Scroll */

function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (this.window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* Testimonials Swiper*/

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  mousewheel: true,
  keyboard: true
})

/* Scrollreveal Mostrar elementos quando der scroll na pagina */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
#home .image, #home .text,
#about .image, #home .text,
#service header , #service .card,
#testimonials header , #testimonials .testimonials,
#contact .text, #contact .link,
footer .brand, footer .social
`,
  {
    interval: 100
  }
)

/* Button back-to-top */

function backToTop() {
  const backToTopButton =
    document.querySelector('.back-to-top') /* Pegando o botão */

  if (this.window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
