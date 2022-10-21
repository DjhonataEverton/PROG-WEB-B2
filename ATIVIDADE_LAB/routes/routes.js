const { Router } = require('express')
//const controller = require("../controller/controller")
//const view = require("../view")
const routes = new Router()

routes.get("/Hello", (req, res) =>{
    return res.send("Hello World")
})

routes.get("/page", (req, res) =>{
    return res.sendFile("../view/pagina.html")
})
module.exports = routes