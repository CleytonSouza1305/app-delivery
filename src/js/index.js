async function renderData() {
  const url = 'http://localhost:3000/restaurants'
  const data = await fetch(url).then((response) => response.json())

  console.log(data);
}

renderData()