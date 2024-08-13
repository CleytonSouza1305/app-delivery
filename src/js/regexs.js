export function emailRegex(text) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const emailEl = document.getElementById('email-input')
  if (regex.test(text)) {
    emailEl.classList.add('true')
    emailEl.classList.remove('false')
    return true
  } else {
    emailEl.classList.remove('true')
    emailEl.classList.add('false')
    return false
  }
}

export function passwordRegex(text) {
  const regex = /[A-Za-z0-9]\d/
  const passwordEl = document.getElementById('password-input')
  if (regex.test(text)) {
    passwordEl.classList.add('true')
    passwordEl.classList.remove('false')
    return true
  } else {
    passwordEl.classList.remove('true')
    passwordEl.classList.add('false')
    return false
  }
}

export function formatcpf() {
  const cpfInput = document.getElementById('cpf-input')
  cpfInput.addEventListener('input', (el) => {
    let finalCpf = ''
    let input = el.target
    if (input.value.length === 3) {
      finalCpf = input.value + '.'
      input.value = finalCpf
    }
    if (input.value.length === 7) {
      finalCpf = input.value + '.'
      input.value = finalCpf
    }
    if (input.value.length === 11) {
      finalCpf = input.value + '-'
      input.value = finalCpf
    }
    if (input.value.length > 14) {
      input.value = input.value.substring(0, 14)
    }
  })
}

export function validateCpf(text) {
  const cpfEl = document.getElementById('cpf-input')
  if (text.match(/\d{3}.\d{3}.\d{3}-\d{2}/)) {

      cpfEl.classList.add('true')
      cpfEl.classList.remove('false')
      return true
    } else {

      cpfEl.classList.remove('true')
      cpfEl.classList.add('false')
      return false
    }
}

export function nameValidate(name) {
  const nameEl = document.getElementById('name-input')
  if (name.length > 2) {
    nameEl.classList.add('true')
    nameEl.classList.remove('false')
    return true
  } else {
    nameEl.classList.remove('true')
    nameEl.classList.add('false')
    return false
  }
}

export function addressValidade(address) {
  const addressEl = document.getElementById('address')
  if (address === '') {
    addressEl.classList.add('false')
    addressEl.classList.remove('true')
    return false
  } else {
    addressEl.classList.remove('false')
    addressEl.classList.add('true')
    return true
  }
}