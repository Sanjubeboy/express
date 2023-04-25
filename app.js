const express = require('express')
const app = express()

// const home = require('./home.js')
// const about = require('./about.js')

// const contact = require('./contact.js')
// const signup = require('./signup.js')
const services = require('./services.js')
const mware = require('./middleware.js')


app.get('/' , (request, response) => {
    response.send("hello")
})

// app.use('/home', home)
// app.use('/about', about)
// app.use('/contact', contact)
// app.use('/signup', signup)
app.use('/service', services)
app.use('/middle', mware)


app.listen(3500)