const linkFormEmail = document.querySelector('.link-form-email')
const containerForm = document.querySelector('.popup-form-email')

const closePopup = () => {
  if (containerForm.classList.contains('close-popup')) 
    containerForm.classList.add('hidden')
}

const showPopup = () => {
  containerForm.classList.remove('hidden')
}

linkFormEmail.addEventListener('click', () => {
  showPopup()

  const formEmail = new FormEmail('.form')
  formEmail.init()
})

containerForm.addEventListener('click', closePopup())