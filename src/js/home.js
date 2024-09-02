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

        for (let c = 0; c < 2; c++) {
          const p = document.createElement('p')
          p.innerHTML = categories[c]

          div.append(p)
        }

        const feedBackDiv = document.createElement('div')
        feedBackDiv.classList.add('feedback-div')
        const heartIcon = document.createElement('button') 
        heartIcon.classList.add('heart-btn')
        heartIcon.innerHTML = `&#9829`
        heartIcon.dataset.userId = localStorage.getItem('id')
        heartIcon.dataset.restaurant = restautantsArr[i].name 
        heartIcon.dataset.foodNameMenu = menu[j].name 
        heartIcon.type = 'button'

        const star01 = document.createElement('button')
        star01.classList.add('star')
        star01.innerHTML = `&#9733`

        const star02 = document.createElement('button')
        star02.classList.add('star')
        star02.innerHTML = `&#9733`

        const star03 = document.createElement('button')
        star03.classList.add('star')
        star03.innerHTML = `&#9733`

        const star04 = document.createElement('button')
        star04.classList.add('star')
        star04.innerHTML = `&#9733`

        const star05 = document.createElement('button')
        star05.classList.add('star')
        star05.innerHTML = `&#9733`

        star01.type = 'button'
        star02.type = 'button'
        star03.type = 'button'
        star04.type = 'button'
        star05.type = 'button'

        const starDiv = document.createElement('div')
        starDiv.classList.add('stars')
        starDiv.append(star01, star02, star03, star04, star05)

        feedBackDiv.append(starDiv, heartIcon)

        const addToCart = document.createElement('button')
        addToCart.type = 'button'
        addToCart.classList.add('add-to-cart-btn')
        addToCart.dataset.menuId = menu[j].id
        addToCart.dataset.name = restautantsArr[i].name
        addToCart.textContent = '+'

        const bottomDiv = document.createElement('div')
        bottomDiv.classList.add('bottom-div')

        const price = document.createElement('p')
        price.classList.add('price-element')
        price.textContent = `R$ ${menu[j].price}`

        bottomDiv.append(addToCart, price)

        card.append(h2Title, image, foodName,div, feedBackDiv, bottomDiv)
        container.append(card)
      }
  }

  const likeBtn = document.querySelectorAll('.heart-btn')
  likeBtn.forEach((btn) => {
      btn.addEventListener('click',() => {
        if (!btn.classList.contains('liked')) {
          const userId = btn.dataset.userId
          const restaurantName = btn.dataset.restaurant
          const foodName = btn.dataset.foodNameMenu
          btn.classList.add('liked')

          sendFeedBackLike(userId, restaurantName, foodName)
        }
      })
  })
  } catch (e) {
    console.error(`Erro ao processar dado: ${e}`);
  }

  console.log(restautantsArr);
  
}

renderData()

const cartBtn = document.querySelector('.cart-div')
cartBtn.addEventListener('click', () => {
  const cart = document.querySelector('.carrinho')
  cart.classList.add('cart-openned')

  document.querySelector('#close-btn').addEventListener('click', () => {
    cart.classList.remove('cart-openned')
  })
})


async function sendFeedBackLike(userId, restaurantName, foodName) {
  const feedback = { restaurantName, foodName };

  const user = await fetch(`http://localhost:3000/user/${userId}`).then((res) => res.json());

  const existFeed = user.feedback || [];
  const feedbackExists = existFeed.some(
    (element) => element.restaurantName === restaurantName && element.foodName === foodName
  );

  if (!feedbackExists) {
    const updatedFeedback = [...existFeed, feedback];

    await fetch(`http://localhost:3000/user/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ feedback: updatedFeedback }),
    });

    console.log('Feedback atualizado:', updatedFeedback);
  } else {
    console.log('Feedback já existe:', feedback);
  }
}

async function updateLikeButtons() {
  const user = await fetch(`http://localhost:3000/user/${localStorage.getItem('id')}`).then((result) => result.json())

  const feedback = user.feedback
  
  const like = document.querySelectorAll('.heart-btn')
  like.forEach((element) => {
    feedback.filter((restaurante) => {
      if (restaurante.foodName === element.dataset.foodNameMenu) {
        element.classList.add('liked')
      } else {
        element.classList.remove('liked')
      }
    })
  })
}

updateLikeButtons()

