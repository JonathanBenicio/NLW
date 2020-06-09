//importa a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//inicia o obj que ira fazer operações no banco de dados

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// //utilizar o objeto de banco de dados, para nosssas operações
// db.serialize(() => {
//     //como comandos SQL irei:

//     //cria uma tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     //inserir dados na tabela
//     const query = `
//     INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items            
//     ) VALUES (?,?,?,?,?,?,?);
//     `
//     const values = [
//         "data:image/jpeg;base64,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",
//         "Papersider",
//         "Guilherme  Gemballa, Jardim América",
//         "Número 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Residuos Eletrônicos, Lâmpadas"
//     ]

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }

//     db.run(query, values, afterInsertData)

//     //consultar os dados na tabela
//     db.all(`SELECT name FROM places`, function (err, rows) {
//         if (err) {
//             return colonso.log(err)
//         }

//         console.log("Aqui estão seu registros:")
//         console.log(rows)
//         console.log()
//         console.log()
//     })

//     //deletar um dado da tabela
//     // db.run(`DELETE FROM places WHERE id = ?`, [2], function(err) {
//     //     if(err) {
//     //         console.log(err)
//     //     }

//     //     console.log("Registro Deletado com sucesso")
//     // })
// })