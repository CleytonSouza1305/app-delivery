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

export function cpfValidate() {
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