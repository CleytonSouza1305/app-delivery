let restautantsArr = []

promotionalBannerLoop()


async function randomRestaurantSlider() {
  const url = `http://localhost:3000/restaurants/`
  const data = await fetch(url).then((r) => r.json())

  try {
    const container = document.querySelector('.restaunrant-content-slider')
    
      for (let i = 0; i < 8; i++) {

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
          p.classList.add('category-text')

          categoryDiv.append(p)
        }

        const funcionamentDiv = document.createElement('div')
        const textP = document.createElement('p')

        const houer = document.createElement('p')
        houer.textContent = data[i].openHour + 'h - ' + data[i].closeHour + 'h'
        houer.classList.add('houer-restaurant')

        const currentDate = new Date().getHours()

        if (currentDate >= data[i].openHour && currentDate < data[i].closeHour) {
          textP.textContent = 'Aberto'
          textP.classList.remove('close')
          textP.classList.add('open')
        } else {
          textP.textContent = 'Fechado'
          textP.classList.remove('open')
          textP.classList.add('close')
        }

        funcionamentDiv.classList.add('funcionament-div')
        funcionamentDiv.append(textP, houer)

        card.append(restaurantImage, restaunrantName, funcionamentDiv, categoryDiv)
        container.append(card)
    }
  } catch (e) { 
    console.log(`Erro ao executar o código, motivo: ${e}`);
  }
}
randomRestaurantSlider()

function promotionalBannerLoop() {
  const imageSrc = document.getElementById('banner-image')

  let interval = 0

  setInterval(() => {
    interval++ 
    imageSrc.src = '../imgs/promotional-banner-1.avif'
    imageSrc.dataset.category = 'hamburguer'
    
    if (interval === 2) {
      imageSrc.src = '../imgs/promotional-banner-2.jpg!w700wp'
      imageSrc.dataset.category = 'pizza'
    } else if (interval === 3) {
      imageSrc.src = '../imgs/promotional-banner-3.jpg'
      imageSrc.dataset.category = 'comida japonesa'
    } else if (interval === 4) {
      imageSrc.src = '../imgs/promotional-banner-4.avif'
      imageSrc.dataset.category = 'massa'
    } else if (interval === 5) {
      imageSrc.src = '../imgs/promotional-banner-5.jpg'
      imageSrc.dataset.category = 'sobremesa'
    } else if (interval === 6) {
      imageSrc.src = '../imgs/promotional-banner-6.jpg'
      imageSrc.dataset.category = 'fast-food'
      interval = 0
    }
  }, 1000 * 5)

  const arrows = document.querySelectorAll('.arrows')
  arrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      if (arrow.id === 'left-image' && imageSrc.dataset.category !== 'hamburguer') {
        interval--
      } else {
        while (interval <= 6) {
          interval++
        }
      }
    })
  })
}

async function  renderData() {
  const url = `http://localhost:3000/restaurants/`
  restautantsArr = await fetch(url).then((r) => r.json())
  restautantsArr.sort(() => Math.random() - 0.5)

  try {
    
    const container = document.querySelector('.cards-all-restaurants')
    for (let i = 0; i < restautantsArr.length; i++) {

      const card = document.createElement('div')
      card.classList.add('card-all')
      card.id = restautantsArr[i].id

      const restaurantImage = document.createElement('img')
      restaurantImage.src = restautantsArr[i].restaurantPhoto
      restaurantImage.classList.add('image-restaurant')

      const restaunrantName = document.createElement('h2')
      restaunrantName.innerText = restautantsArr[i].name
      restaunrantName.classList.add('restaurant-name')

      const categoryDiv = document.createElement('div')
      categoryDiv.classList.add('category-div')

      const categories = restautantsArr[i].category
      for (let i = 0; i < categories.length; i++) {
        const p = document.createElement('p')
        p.innerText = categories[i]
        p.classList.add('category-text')

        categoryDiv.append(p)
      }

      const funcionamentDiv = document.createElement('div')
      const textP = document.createElement('p')

      const houer = document.createElement('p')
      houer.textContent = restautantsArr[i].openHour + 'h - ' + restautantsArr[i].closeHour + 'h'
      houer.classList.add('houer-restaurant')

      const currentDate = new Date().getHours()

      if (currentDate >= restautantsArr[i].openHour && currentDate < restautantsArr[i].closeHour) {
        textP.textContent = 'Aberto'
        textP.classList.remove('close')
        textP.classList.add('open')
      } else {
        textP.textContent = 'Fechado'
        textP.classList.remove('open')
        textP.classList.add('close')
      }

      funcionamentDiv.classList.add('funcionament-div')
      funcionamentDiv.append(textP, houer)

      card.append(restaurantImage, restaunrantName, funcionamentDiv, categoryDiv)
      container.append(card)
  }

  } catch (e) {
    console.log(`Erro ao processar dado: ${e}`);
  }

  console.log(restautantsArr);
  
}

renderData()