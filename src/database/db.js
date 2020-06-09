//importa a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//inicia o obj que ira fazer operações no banco de dados

const db = new sqlite3.Database("./src/database/database.db")

//utilizar o objeto de banco de dados, para nosssas operações
db.serialize(() => {
    //como comandos SQL irei:

    //cria uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //inserir dados na tabela
    const query =  `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items            
    ) VALUES (?,?,?,?,?,?,?);
`
    db.run(query,[])

    //consultar os dados na tabela

    //deletar um dado da tabela
})