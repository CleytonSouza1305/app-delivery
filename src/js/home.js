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
      const menu = restautantsArr[i].menu
      for (let j = 0; j < menu.length; j++) {
        const card = document.createElement('div')
        card.classList.add('card-menu')
        card.dataset.foodname = restautantsArr[i].name
        card.dataset.idfood = menu[j].name

        const h2Title = document.createElement('h2')
        h2Title.classList.add('menu-title')
        h2Title.innerHTML = `<i class="fa-solid fa-utensils"></i> - "${restautantsArr[i].name}"`
        const image = document.createElement('img')
        image.classList.add('menu-image')
        image.src = menu[j].imageFood

        const foodName = document.createElement('p')
        foodName.classList.add('name-menu-food')
        foodName.textContent = menu[j].name

        const categories = menu[j].foodCategory
        const div = document.createElement('div')
        div.classList.add('categories-menu')

        for (let c = 0; c < categories.length; c++) {
          const p = document.createElement('p')
          p.innerHTML = `<span class="rounded"></span> ${categories[c]}`

          div.append(p)
        }

        const feedBackDiv = document.createElement('div')
        feedBackDiv.classList.add('feedback-div')
        const heartIcon = document.createElement('button') 
        heartIcon.classList.add('heart-btn')
        heartIcon.innerHTML = `<i class="fa-solid fa-heart"></i>`

        const star01 = document.createElement('button')
        star01.classList.add('stars')
        star01.innerHTML = `<i class="fa-solid fa-star"></i>`

        const star02 = document.createElement('button')
        star02.classList.add('stars')
        star02.innerHTML = `<i class="fa-solid fa-star"></i>`

        const star03 = document.createElement('button')
        star03.classList.add('stars')
        star03.innerHTML = `<i class="fa-solid fa-star"></i>`

        const star04 = document.createElement('button')
        star04.classList.add('stars')
        star04.innerHTML = `<i class="fa-solid fa-star"></i>`

        const star05 = document.createElement('button')
        star05.classList.add('stars')
        star05.innerHTML = `<i class="fa-solid fa-star"></i>`

        const starDiv = document.createElement('div')
        starDiv.classList.add('star-div')
        starDiv.append(star01, star02, star03, star04, star05)

        feedBackDiv.append(starDiv, heartIcon)

        card.append(h2Title, image, foodName,div, feedBackDiv)
        container.append(card)
      }
  }

  } catch (e) {
    console.log(`Erro ao processar dado: ${e}`);
  }

  console.log(restautantsArr);
  
}

renderData()