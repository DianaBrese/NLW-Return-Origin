window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
    
    // scrollY: pega o tamanho top topo do body até o topo visivel
    // innerHeight: tamanho da tela visivel
  const targetLine = scrollY + innerHeight / 2


  //verificar se a seção passou da linha
  //quais dados vou precisar?
  const sectionTop = section.offsetTop // offsetTop: pega o topo da secao em relacao ao topo do body
  const sectionHeight = section.offsetHeight // offsetHeight: pega o tamanho do elemento independente se está visivel ou nao


  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop //verifica se a secao ultrapassou a linha imaginaria do meio da tela

  //quais dados vou precisar?
  //a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight // pega o onde ternima a secao

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine // verifica se o final da secao ultrapassou a linha imaginaria do meio da tela

  //limites sa seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')

  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')

    // Trocar cor do icone de menu para branco

    const path = document.getElementsByClassName('svg')
    for (index = 0; index < path.length; index++) {
      path[index].style.stroke = 'white'
    }
  } else {
    navigation.classList.remove('scroll')

    //Trocar cor do icone de menu para a cor primária
    const path = document.getElementsByClassName('svg')
    for (index = 0; index < path.length; index++) {
      const footer = document.getElementsByTagName('footer')[0]
      path[index].style.stroke = window.getComputedStyle(footer).backgroundColor
    }
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(
  '#home,#home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about content, #contact header, #contact'
)
