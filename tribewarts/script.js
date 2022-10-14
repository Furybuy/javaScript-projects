const btnLogin = document.getElementById('btn-login');
function alerta() {
  if (document.getElementById('email1').value === 'tryber@teste.com') {
    if (document.getElementById('password').value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnLogin.addEventListener('click', alerta);

const agree = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
function enableBtn() {
  if (agree.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
agree.addEventListener('click', enableBtn);
