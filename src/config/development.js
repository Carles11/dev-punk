/* eslint-disable */
export const api = {
  API_URL:
    process.env.REACT_APP_DEV_API_URL || 'http://localhost:4000/api/leo/',
  API_AUTH: process.env.REACT_APP_AUTH_URL || 'http://localhost:4000/auth/',
  API_TOKEN: process.env.REACT_APP_TOKEN_KEY || 'leoleoAuthToken',
}
/* eslint-enable */
