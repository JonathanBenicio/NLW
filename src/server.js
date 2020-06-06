const express = require("express")
const server = express()

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
    return res.render("index.html", {title:"te"})
})
server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})
server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

// ligar servidor
server.listen(3000)

