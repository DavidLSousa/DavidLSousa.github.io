class FormEmail {
  constructor(setting) {
    this.form = document.querySelector(setting.form);
    this.button = document.querySelector(setting.button);
    if (this.form) this.url = this.form.getAttribute("action");

    this.sendForm = this.sendForm.bind(this);
  }

  displaySuccess() {
    this.form.parentElement.innerHTML = `
      <h2 class="text-center success">
        Enviado com sucesso!
      </h2>`;
  }

  displayError() {
    this.form.parentElement.innerHTML = `
      <h2 class="text-center error">
        Falha no Envio :(
      </h2>`;
  }

  getFormInfo() {
    const fields = this.form.querySelectorAll("[name]");

    return Array.from(fields).reduce(
      (acc, { name, value }) => ({ ...acc, [name]: value }),
      {}
    );
  }

  isSubmission(event) {
    event.preventDefault();
    this.button.innerText = 'Enviando...'
    this.button.disabled = true
  }

  async sendForm(event) {
    this.isSubmission(event)

    try {
      await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.getFormInfo()),
      });

      this.displaySuccess()
    } catch (error) {
      this.displayError()
    }

  }
  
  init() {
    this.form.addEventListener("submit", this.sendForm);
  }
}