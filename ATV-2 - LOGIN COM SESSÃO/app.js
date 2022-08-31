const express = require('express')
const session = require('express-session')
const flash = require('connect-flash')
const app = express()

//--------Configuração de Sessão--------
    app.use(session({
        secret: "b308891811721f1d6a9c6a0da82cc568",
        resave: true,
        saveUninitialized: true
    }))
    app.use(flash())
    //----Midleware----
    app.use((req, res, next) =>{
        res.locals.success_login = req.flash("success_login")
        res.locals.error_login = req.flash("error_login")
        next()
    })

app.get('/', (req, res) =>{//-----Rota Padrão-----
    return res.send("<h1>Pagina Inicial</h1>")
})

app.get('/login', (req, res) =>{//-----Rota de Login-----
    return res.sendFile(`${__dirname}/login.html`)
})

app.listen(3000, () => {//
    console.log("Servirdor rodando na porta 3000")
})