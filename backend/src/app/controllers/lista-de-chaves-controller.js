"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database/database");
class ListaDeChavesController {
    get(req, res) {
        const sql = "SELECT * FROM contatos_favoritos ORDER BY lista_de_chaves";
        database_1.database.query(sql, (err, result) => {
            if (err) {
                console.error("Erro ao buscar tipos de chaves pix: " + err.message);
                res.status(500).json({ error: "Erro interno do servidor" });
            }
            else {
                res.json(result);
            }
        });
    }
}
exports.default = new ListaDeChavesController();
