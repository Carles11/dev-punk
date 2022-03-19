const express = require('express')

const cors = require('cors')

const app = express()

app.use(cors())

const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send({ responseMessage: 'React client connected tot he Express server' })
})

app.listen(port, () => {
  console.log(`App DevPunk-api listening at port: ${port}`)
})
