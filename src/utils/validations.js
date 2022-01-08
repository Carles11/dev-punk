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
export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

export const aol = (value) =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined

export const alphaNumeric = (value) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined

export const phoneNumber = (value) =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Formato inválido. Escríbelo por favor con el prefijo necesario y sin espacios (ej.: 0034636484950'
    : undefined
