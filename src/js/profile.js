function openProfile() {
  const openProfileButton = document.getElementById('profile-btn')
  openProfileButton.addEventListener('click', (ev) => {
    ev.preventDefault()
    const container = document.querySelector('.profile-content')
    container.classList.toggle('openned-profile')

    document.getElementById('close-btn-profile').addEventListener('click', () => {
      container.classList.remove('openned-profile')
    })
  })
}

openProfile()

async function callApi(id) {
  try {
    const data = await fetch(`http://localhost:3000/user/${id}`).then((r => r.json()))

    const userName = data.name
    const spanUser = document.getElementById('user-name')
    spanUser.textContent = userName + '!'

    console.log(data);
  } catch (e) {
    console.error(`Erro ao executar função: ${e}`); 
  }
}

callApi(localStorage.getItem('id'))


