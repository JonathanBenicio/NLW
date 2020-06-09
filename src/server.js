const express = require("express")
const server = express()

// pegar o banco de dados

const db = require("./database/db.js")

// conficuração pasta publica
server.use(express.static("public"))

// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// configurar caminhos da minha aplicação
// pagina inicial
// req: Requisição
// res: Resposta
server.get("/", (req, res) => {
    return res.render("index.html", { title: "te" })
})
server.get("/create-point", (req, res) => {
    
    
    
    return res.render("create-point.html")
})
server.get("/search", (req, res) => {
    //pegar os dados do banco de dados
    db.all(`SELECT * FROM places`, function (err, rows) {
        if (err) {
            return colonso.log(err)
        }

        const total = rows.length

        //mostrar a pagina HTML com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total })
    })
})

// ligar servidor
server.listen(3000)

