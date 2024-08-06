import { cpfValidate, emailRegex, passwordRegex } from "./regexs.js";

let value = 0;

async function renderDataUser() {
  const url = `http://localhost:3000/user`

  try {
    const data = await fetch(url).then((response) => response.json());
    console.log(data);

  const enterButton = document.getElementById('access-acount-btn');

  enterButton.addEventListener('click', (btn) => {
  const emailInput = document.getElementById('email-input');
  const passwordInput = document.getElementById('password-input');
  const errorDiv = document.querySelector('.error-div');
  const tentativa = document.querySelector('#tentativa');

  let userFound = false;

  data.forEach((user) => {
    if (user.email === emailInput.value && user.password === passwordInput.value) {
      userFound = true;
    }
  });

  if (userFound) {

    emailInput.value = ''
    passwordInput.value = ''
    alert('Próxima página...');
  } else {
    if (enterButton.type === 'button') {
      value++;
      errorDiv.classList.remove('display');
      tentativa.textContent = 4 - value;

      emailInput.addEventListener('input', () => {
        errorDiv.classList.add('display');
      });
      passwordInput.addEventListener('input', () => {
        errorDiv.classList.add('display');
      });

      if  (tentativa.textContent <= '0') {
        createAccount()
      }
    }
  }
});
  } catch (e) {
    console.log(`Erro ao executar código, motivo: ${e}`);
  }
}

function createAccount() {
  const errorDiv = document.querySelector('.error-div');
  errorDiv.classList.add('display');
  const inputGroupName = document.querySelector('.input-group-name');
  const inputGroupAddress = document.querySelector('.input-group-address');
  const inputGroupConfirmPass = document.querySelector('.input-group-cpass');

  inputGroupName.classList.remove('display');
  inputGroupAddress.classList.remove('display');
  inputGroupConfirmPass.classList.remove('display');

  const h2 = document.querySelector('h2');
  h2.textContent = 'Register';

  const newAccount = document.querySelector('.p-create-account');
  newAccount.classList.add('display');

  const enterAccount = document.querySelector('.p-enter-account');
  enterAccount.classList.remove('display');

  const enterButton = document.getElementById('access-acount-btn');
  enterButton.type = 'submit'
  enterButton.textContent = 'Criar conta'
}

document.querySelector('.create-account').addEventListener('click', createAccount)
document.querySelector('.enter-account').addEventListener('click', () => {
  const enterButton = document.getElementById('access-acount-btn');
  enterButton.type = 'button'
  enterButton.textContent = 'Entrar'

  const inputGroupName = document.querySelector('.input-group-name');
  const inputGroupAddress = document.querySelector('.input-group-address');
  const inputGroupConfirmPass = document.querySelector('.input-group-cpass');

  inputGroupName.classList.add('display');
  inputGroupAddress.classList.add('display');
  inputGroupConfirmPass.classList.add('display');

  const h2 = document.querySelector('h2');
  h2.textContent = 'Login';

  const newAccount = document.querySelector('.p-create-account');
  newAccount.classList.remove('display');

  const enterAccount = document.querySelector('.p-enter-account');
  enterAccount.classList.add('display');

  value = 0
})

function switchViewPassword() {
  const icon = document.querySelectorAll('.icon-eye')
  icon.forEach((el) => {
    el.addEventListener('click', () => {
      const inputGroup = el.closest('.input-group')
      const input = inputGroup.querySelector('input')
      if (input.type === 'password') {
        input.type = 'text'
        el.classList.add('icon-actived')
      } else {
        input.type = 'password'
        el.classList.remove('icon-actived')
      }
    })
  })
}

function loopImageBg() {
  let interval = 1
  let imageLoop = document.querySelector('.img-src')

  if (!imageLoop) return

  setInterval(() => {
    interval++
    if (interval > 5) {
      interval = 1
    }

    imageLoop.classList.add('fade-out')

    setTimeout(() => {
      imageLoop.src = `src/imgs/food-loop-${interval}.jfif`
      imageLoop.classList.remove('fade-out')
    }, 500)

    
  }, 1000 * 10)
}

switchViewPassword()
renderDataUser()
loopImageBg()

function validateForm() {
  const emailInput = document.getElementById('email-input')
  emailRegex(emailInput.value)

  const passwordInput = document.getElementById('password-input')
  passwordRegex(passwordInput.value)

  cpfValidate()
}

validateForm()
