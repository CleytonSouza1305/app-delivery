async function renderData(endPoint) {
  const url = `http://localhost:3000/${endPoint}`
  const data = await fetch(url).then((response) => response.json())

  console.log(data);
}

renderData('user')