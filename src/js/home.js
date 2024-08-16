async function getUserDetails(id) {
  const url = `http://localhost:3000/user/${id}`

  const data = await fetch(url).then((r) => r.json())
  const name = document.querySelector('span')
  name.innerText = data.name
}

const id = localStorage.getItem('id')
getUserDetails(id)