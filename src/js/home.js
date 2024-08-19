async function randomRestaurantSlider() {
  const url = `http://localhost:3000/restaurants/`
  const data = await fetch(url).then((r) => r.json())

  try {
    const container = document.querySelector('.restaunrant-content-slider')
    
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

        const funcionamentDiv = document.createElement('div')
        const textP = document.createElement('p')

        if (data[i].isOpen === true) {
          textP.textContent = 'Aberto'
          textP.classList.remove('close')
          textP.classList.add('open')
          houer.classList.remove('close')
          houer.classList.add('open')
        } else {
          textP.textContent = 'Fechado'
          textP.classList.remove('open')
          textP.classList.add('close')
          houer.classList.remove('open')
          houer.classList.add('close')
        }

        const houer = document.createElement('p')
        houer.textContent = data[i].openHouer + 'h - ' + data[i].closeHouer + 'h'

        funcionamentDiv.append(textP, houer)

        card.append(restaurantImage, restaunrantName, funcionamentDiv, categoryDiv)
        container.append(card)
    }
  } catch (e) { 
    console.log(`Erro ao executar o código, motivo: ${e}`);
  }
  console.log(data);
}

randomRestaurantSlider()
