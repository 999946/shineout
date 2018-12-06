export class FormError extends Error {
  constructor(message, name, value) {
    super()
    this.message = message
    this.name = name
    this.value = value
  }
}

export const wrapFormError = (error) => {
  if (error instanceof Error) {
    return new FormError(error.message)
  }
  if (Array.isArray(error)) {
    return error.map(wrapFormError)
  }
  return error
}

export const promiseAll = (ops, isForm = true) => new Promise((resolve, reject) => {
  Promise.all(ops).then((res) => {
    const error = res.find(r => r !== true)
    if (error) reject(error)
    else resolve(true)
  }).catch((e) => {
    reject(isForm ? wrapFormError(e) : e)
  })
})
