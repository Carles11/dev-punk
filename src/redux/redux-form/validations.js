export const validations = (values) => {
  const errors = {}
  if (!values.fullName) {
    errors.fullName = 'Required'
  } else if (values.fullName.length < 4) {
    errors.fullName = 'Must be at least 4 carachters'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Dirección de email inválida'
  }
  if (!values.phone && isNaN(Number(values.phone))) {
    errors.phone = 'Must be a number'
  }
  return errors
}

export const required = (value) =>
  value ? undefined : 'Necesitamos este campo para contactarte'
export const maxLength = (max) => (value) =>
  value && value.length > max
    ? `Este campo puede tener como máximo ${max} caracteres`
    : undefined
export const maxLength15 = maxLength(15)
export const minLength = (min) => (value) =>
  value && value.length < min
    ? `Este campo debe tener ${min} caracteres o más`
    : undefined
export const minLength2 = minLength(2)
export const number = (value) =>
  value && isNaN(Number(value)) ? 'Esto debe ser un número' : undefined
export const minValue = (min) => (value) =>
  value && value < min ? `Must be at least ${min}` : undefined

export const alphaNumeric = (value) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined

export const phoneNumber = (phone) => {
  const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/

  if (regex.test(phone)) {
    // Valid international phone number
    undefined
  } else {
    // Invalid international phone number
    ;('Formato inválido. Escríbelo por favor con el prefijo necesario y sin espacios (ej.: 0034636484950')
  }
}
