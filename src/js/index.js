async function renderDataUser() {
  const url = `http://localhost:3000/user`

  try {
    const data = await fetch(url).then((response) => response.json())
    console.log(data);

    const enterButton = document.getElementById('access-acount-btn')
    enterButton.addEventListener('click', () => {
      const emailInput = document.getElementById('email-input')
      const passwordlInput = document.getElementById('password-input')
  
      data.forEach((u) => {
        if (u.email !== emailInput.value || u.password !== passwordlInput.value) {
          const inputGroupName = document.querySelector('.input-group-name')
          const inputGroupAddress = document.querySelector('.input-group-address')
          const inputGroupConfirmPass = document.querySelector('.input-group-cpass')

          inputGroupName.classList.remove('display')
          inputGroupAddress.classList.remove('display')
          inputGroupConfirmPass.classList.remove('display')

          const h2 = document.querySelector('h2')

          h2.textContent = 'Register'
        } else {
          alert('proxima pagina...')
        }
      })
    })
  } catch (e) {
    console.log(`Erro ao consultar API, motivo: ${e}`);
  }
}

renderDataUser()