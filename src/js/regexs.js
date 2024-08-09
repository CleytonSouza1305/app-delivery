export function emailRegex(text) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (regex.test(text)) {
    console.log(true);
    return true
  } else {
    console.log(false);
    return false
  }
}

export function passwordRegex(text) {
  const regex = /[A-Za-z0-9]\d/
  if (regex.test(text)) {
    console.log(true);
    return true
  } else {
    console.log(false);
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
    // if (input.value.match(/\d{3}.\d{3}.\d{3}-\d{2}/)) {
    //   console.log(true);
    //   return true
    // } else {
    //   console.log(false);
    //   return false
    // }
  })
}

export function validateCpf(text) {
  if (text.match(/\d{3}.\d{3}.\d{3}-\d{2}/)) {
      console.log(true);
      return true
    } else {
      console.log(false);
      return false
    }
}

export function nameValidate(name) {
  if (name.length > 2) {
    console.log(true);
    return true
  } else {
    console.log(false);
    return false
  }
}

export function addressValidade(address) {
  if (address === '') {
    console.log(false);
    return false
  } else {
    console.log(true);
    return true
  }
}