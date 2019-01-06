const express = require('express')
const app = express()
app.get('/', (req, res, next) => {
  res.send('API root')
})

app.get('/status', (req, res) => {
  //console.log(req)
  res.send({
    message: "go api status"
  })
})
// export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
