export function required (value) {
  return !!value
}

export function minLength (length) {
  return value => {
    return value.length >= length
  }
}
