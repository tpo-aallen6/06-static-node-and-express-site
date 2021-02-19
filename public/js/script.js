'use strict'

/**
 * Handle mobile menu functionality to hide/reveal sidebar on mobile layouts
 */
const body = document.querySelector('body')
let headerBtnClicked = false

document.querySelectorAll('.portfolio-intro')
  .forEach(element => {
    element.style.backgroundColor = '#abdae6'
  })

document.querySelectorAll('.portfolio-intro p')
  .forEach(element => {
    element.style.color = 'black'
  })

document.querySelectorAll('.cell')
  .forEach(element => {
    element.style.boxShadow = '5px 5px #888888'
  })

document.querySelector('#menu-icon').addEventListener('click', e => {
  !headerBtnClicked ? body.style.transform = 'translateX(300px)' : body.style.transform = 'translateX(0px)'
  return headerBtnClicked = !headerBtnClicked
})
