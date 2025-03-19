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