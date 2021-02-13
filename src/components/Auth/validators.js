export function required (value) {
  return !!value
}

export function minLength (length) {
  return value => {
    return value.length >= length
  }
}

export function sameAs (key) {
  return function (value, form) {
    if (form[key]) return value === form[key].value
    return true
  }
}
