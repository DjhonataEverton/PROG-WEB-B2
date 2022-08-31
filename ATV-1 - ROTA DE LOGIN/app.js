const express = require('express')
const app = express()


app.get('/', (req, res) =>{
    return res.send("<h1>Pagina Inicial</h1>")
})

app.get('/login', (req, res) =>{
    return res.sendFile(`${__dirname}/login.html`)
})

app.listen(3000, () => {
    console.log("Server Started")
})