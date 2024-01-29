const linkFormEmail = document.querySelector('.link-form-email')
const containerForm = document.querySelector('.popup-form-email')

const showPopup = () => {
  containerForm.classList.remove('hidden')
}

const closePopup = event => {
  if (event.target.classList.contains('close-popup')) 
    containerForm.classList.add('hidden')
}

linkFormEmail.addEventListener('click', () => {
  showPopup()

  const formEmail = new FormEmail('.form')
  formEmail.init()
})

containerForm.addEventListener('click', closePopup)