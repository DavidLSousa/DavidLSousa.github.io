class FormEmail {
  constructor(form) {
    this.form = document.querySelector(form);
    if (this.form) this.url = this.form.getAttribute("action");

    this.sendForm = this.sendForm.bind(this);
  }

  displaySuccess() {
    this.form.parentElement.innerHTML = `
      <div class="container container-form">
        <h2 class="text-center success">
          Enviado com sucesso!
        </h2>
      </div>`;
  }

  displayError() {
    this.form.parentElement.innerHTML = `
      <div class="container container-form">
        <h2 class="text-center error">
          Falha no Envio :(
        </h2>
      </div>`;
  }

  getFormInfo() {
    const fields = this.form.querySelectorAll("[name]");

    return Array.from(fields).reduce(
      (acc, { name, value }) => ({ ...acc, [name]: value }),
      {}
    );
  }

  async sendForm(event) {
    event.preventDefault();

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