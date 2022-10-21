const express = require('express')
const routes = require('./routes/routes')
const app = express()
const porta = 3300

/*app.get("/Hello", (req, res) =>{
    return res.send("Hello World")
})*/

/*app.get("/page", (req, res) =>{
    return res.sendFile(`${__dirname}/pagina.html`)
})*/

app.use(routes)

app.listen(porta, () =>{
    console.log("Server Started")
})