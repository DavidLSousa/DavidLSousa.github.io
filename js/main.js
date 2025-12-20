import { FormEmail } from  './popup-form/script-popup-form-email.js';

const linkFormEmail = document.querySelector('[data-js="link-form-email"]')
const containerForm = document.querySelector('[data-js="popup-form-email"]')

const closePopup = event => {
  if (event.target.classList.contains('close-popup')) 
    containerForm.classList.add('hidden')
}

const showPopup = () => {
  containerForm.classList.remove('hidden')
}

const handleSubmitForm = () => {
  showPopup()

  const formEmail = new FormEmail({
    form: '[data-js="form-popup"]',
    button: '[data-js="btn-popup"]'
  })
  formEmail.init()
}

linkFormEmail.addEventListener('click', handleSubmitForm)
containerForm.addEventListener('click', closePopup)

// Accordion functionality
const accordionButtons = document.querySelectorAll('.accordion-button')

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-accordion')
    const content = document.querySelector(`[data-content="${targetId}"]`)
    const icon = button.querySelector('.accordion-icon')

    // Close all other accordions
    accordionButtons.forEach(otherButton => {
      if (otherButton !== button) {
        const otherId = otherButton.getAttribute('data-accordion')
        const otherContent = document.querySelector(`[data-content="${otherId}"]`)
        const otherIcon = otherButton.querySelector('.accordion-icon')

        otherContent.style.maxHeight = '0'
        otherIcon.style.transform = 'rotate(0deg)'
      }
    })

    // Toggle current accordion
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
      content.style.maxHeight = '0'
      icon.style.transform = 'rotate(0deg)'
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'
      icon.style.transform = 'rotate(180deg)'
    }
  })
})