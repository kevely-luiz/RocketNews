const inputEmail = document.getElementById('input-email')
const button = document.getElementById('button')

function start() {
  inputEmail.focus()
  sendEmail()
}

function showAlert(message) {
  alert(message)
}

function isInputEmpty() {
  if (inputEmail.value === '') {
    showAlert('E-mail vazio!')
    inputEmail.focus()
  } else {
    showAlert('E-mail enviado com sucesso!')
  }
}

function sendEmail() {
  button.addEventListener('click', () => {
    isInputEmpty()
  })
}

start();
