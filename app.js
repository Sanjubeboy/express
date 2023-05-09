const express = require('express')
const app = express()

// const search = require('./searchapi.js')
const services = require('./services.js')
const mware = require('./middleware.js')
const service = require('./service.js')
const cors = require('cors');
// const user =  require('./apiserver.js')
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}


app.use(cors(corsOptions));
// app.use(express.static('public'))


app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))

app.get('/' , (request, response) => {
    // response.send("hello")
    response.render('index',{text:"sanjay", age:20})
})

console.log("API Working!!")
app.use('/services', services)
app.use('/middle', mware)
app.use('/service',service)


app.listen(3500)