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