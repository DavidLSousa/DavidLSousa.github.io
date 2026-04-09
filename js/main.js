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

// Skill cards interaction for mobile
const skillCards = document.querySelectorAll('.skill-card')

skillCards.forEach(card => {
  card.addEventListener('click', () => {
    // Toggle active class on current card
    const isActive = card.classList.contains('active')
    
    // Deactivate all others
    skillCards.forEach(otherCard => otherCard.classList.remove('active'))
    
    if (!isActive) {
      card.classList.add('active')
    }
  })
})

// Modal Photos functionality
const modalPhotos = document.getElementById('modal-photos');
const modalPhotosContent = document.getElementById('modal-photos-content');
const closeModalPhotos = document.getElementById('close-modal-photos');
const viewPhotoButtons = document.querySelectorAll('.btn-view-photos');

viewPhotoButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation(); // Avoid triggering accordion if it was inside a button
    const photos = JSON.parse(button.getAttribute('data-photos'));
    modalPhotosContent.innerHTML = ''; // Clear previous photos
    
    photos.forEach(photoPath => {
      const img = document.createElement('img');
      img.src = photoPath;
      img.alt = 'Projeto Screenshot';
      img.className = 'w-full rounded-lg shadow-md border border-gray-700 transition-all duration-300';
      img.loading = 'lazy';
      
      // Check orientation after load
      img.onload = () => {
        if (img.naturalWidth > img.naturalHeight) {
          img.classList.add('sm:col-span-2');
        }
      };
      
      modalPhotosContent.appendChild(img);
    });
    
    modalPhotos.classList.remove('hidden');
    modalPhotos.classList.add('flex');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  });
});

const hideModal = () => {
  modalPhotos.classList.add('hidden');
  modalPhotos.classList.remove('flex');
  document.body.style.overflow = ''; // Restore background scroll
};

if (closeModalPhotos) {
  closeModalPhotos.addEventListener('click', hideModal);
}

if (modalPhotos) {
  modalPhotos.addEventListener('click', (event) => {
    if (event.target === modalPhotos) {
      hideModal();
    }
  });
}