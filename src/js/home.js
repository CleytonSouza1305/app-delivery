async function randomRestaurantSlider() {
  const url = `http://localhost:3000/restaurants/`
  const data = await fetch(url).then((r) => r.json())

  try {
    const container = document.querySelector('.restaunrant-content-slider')
    console.log(container);
    
      for (let i = 0; i < data.length; i++) {
        const card = document.createElement('div')
        card.classList.add('card')
        card.id = data[i].id

        const restaurantImage = document.createElement('img')
        restaurantImage.src = data[i].restaurantPhoto
        restaurantImage.classList.add('image-restaurant')

        const restaunrantName = document.createElement('h2')
        restaunrantName.innerText = data[i].name
        restaunrantName.classList.add('restaurant-name')

        const categoryDiv = document.createElement('div')
        categoryDiv.classList.add('category-div')

        const categories = data[i].category
        for (let i = 0; i < categories.length; i++) {
          const p = document.createElement('p')
          p.innerText = categories[i]

          categoryDiv.append(p)
        }

        card.append(restaurantImage, restaunrantName, categoryDiv)
        container.append(card)
    }
  } catch (e) { 
    console.log(`Erro ao executar o código, motivo: ${e}`);
  }
  console.log(data);
}

randomRestaurantSlider()