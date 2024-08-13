import { addressValidade, formatcpf, emailRegex, nameValidate, passwordRegex, validateCpf } from "./regexs.js";

let value = 0;

async function renderDataUser() {
  const url = 'http://localhost:3000/user'

  try {
    const data = await fetch(url).then((response) => response.json());
    console.log(data);

    const enterButton = document.getElementById('access-acount-btn');

    enterButton.addEventListener('click', async (event) => {
      event.preventDefault(); // Impede qualquer ação padrão, como envio de formulário

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
        emailInput.value = '';
        passwordInput.value = '';
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

          if (tentativa.textContent <= '0') {
            createAccountModal();
          }
        }
      }
    });
  } catch (e) {
    console.log(`Erro ao executar código, motivo: ${e}`);
  }
}

function createAccountModal() {
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
  enterButton.type = 'submit';
  enterButton.textContent = 'Criar conta';
}

document.querySelector('.create-account').addEventListener('click', createAccountModal);
document.querySelector('.enter-account').addEventListener('click', () => {
  const enterButton = document.getElementById('access-acount-btn');
  enterButton.type = 'button';
  enterButton.textContent = 'Entrar';

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

  value = 0;
});

function switchViewPassword() {
  const icon = document.querySelectorAll('.icon-eye');
  icon.forEach((el) => {
    el.addEventListener('click', () => {
      const inputGroup = el.closest('.input-group');
      const input = inputGroup.querySelector('input');
      if (input.type === 'password') {
        input.type = 'text';
        el.classList.add('icon-actived');
      } else {
        input.type = 'password';
        el.classList.remove('icon-actived');
      }
    });
  });
}

function loopImageBg() {
  let interval = 1;
  let imageLoop = document.querySelector('.img-src');

  if (!imageLoop) return;

  setInterval(() => {
    interval++;
    if (interval > 5) {
      interval = 1;
    }

    imageLoop.classList.add('fade-out');

    setTimeout(() => {
      imageLoop.src = `src/imgs/food-loop-${interval}.jfif`;
      imageLoop.classList.remove('fade-out');
    }, 500);

  }, 1000 * 10);
}

function validateForm() {
  const createAccountBtn = document.getElementById('access-acount-btn');

  createAccountBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Impede qualquer ação padrão do botão

    const element = event.target;

    if (element.type === 'submit') {
      const emailInput = document.getElementById('email-input');
      const emailElement = emailRegex(emailInput.value);

      const passwordInput = document.getElementById('password-input');
      const passwordElement = passwordRegex(passwordInput.value);

      const name = document.getElementById('name-input');
      const nameElement = nameValidate(name.value);

      const addressInput = document.getElementById('address');
      const addressElement = addressValidade(addressInput.value);

      const cpfInput = document.getElementById('cpf-input');
      const cpfElement = validateCpf(cpfInput.value);

      if (emailElement && passwordElement && cpfElement && nameElement && addressElement) {
        const errorDiv = document.querySelector('.error-div');
        errorDiv.classList.add('display');
        createUser(name.value, emailInput.value, passwordInput.value, cpfInput.value, addressInput.value);
      } else {
        const errorDiv = document.querySelector('.error-div');
        errorDiv.classList.remove('display');
        const errorText = document.querySelector('.error-text');
        errorText.textContent = 'Faltam informações corretas';

        const inputList = document.querySelectorAll('input');
        inputList.forEach((el) => {
          if (el.classList.contains('false')) {
            el.style.border = '2px solid #EA1D2C';
            el.addEventListener('input', () => {
              el.style.removeProperty('border');
            });
          }
        });
      }
    }
  });

  formatcpf();
}

async function createUser(nameValue, emailValue, passwordValue, cpfValue, addressValue) {
  const users = await fetch('http://localhost:3000/user')
    .then((res) => res.json());

  const lastId = users.length > 0 ? users[users.length - 1].id : 0;
  const id = lastId + 1;

  const newUser = {
    id,
    name: nameValue,
    email: emailValue,
    password: passwordValue,
    cpf: cpfValue,
    address: addressValue
  };

  const response = await fetch('http://localhost:3000/user', {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    const loader = document.getElementById('success-loader');
    loader.classList.remove('display');
    setTimeout(() => {
      loader.classList.add('display');
    }, 1000 * 10);
  } else {
    console.error('Erro ao criar a conta:', response.status, response.statusText);
  }
}

switchViewPassword();
loopImageBg();
validateForm();
renderDataUser();