import config from '../config'

const { API_URL } = config.api

const request = (verb, route, data, next) => {
  const xhr = new XMLHttpRequest()

  xhr.withCredentials = false
  console.log('starting-request------------->', verb, route)
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      let o = null
      try {
        o = JSON.parse(xhr.responseText)
      } catch (e) {
        console.log('xhr.onreadystatechange-ERROR------------->', e)
        o = {
          error: `Interner Fehler (invalid JSON from ${verb.toUpperCase()} ${route})`,
        }
      }
      let err = null

      if (xhr.status !== 200 || o.error) {
        err = new Error(o.error)
      }
      next(err, o, xhr.status)
    }
  }
  const newRoute = getRoute(route)

  xhr.open(verb, newRoute, true)

  xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')

  xhr.send(data !== null ? JSON.stringify(data) : undefined)
}

const getRoute = (route) => {
  const final = `${API_URL}${route}`
  return final
}

export const get = (url, next) => request('GET', url, {}, next)
