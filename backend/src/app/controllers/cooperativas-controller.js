"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database/database");
class CooperativasController {
    get(req, res) {
        database_1.database.query("SELECT * FROM cooperativas", (err, result) => {
            if (err) {
                console.error("Erro ao buscar as cooperativas no banco de dados: " + err.message);
                res.status(500).json({ error: "Erro interno do servidor" });
            }
            else {
                res.json(result);
            }
        });
    }
    post(req, res) {
        const { codigos, descricao } = req.body;
        const sql = "INSERT INTO cooperativas (codigos, descricao) VALUES (?, ?)";
        database_1.database.query(sql, [codigos, descricao], (err, result) => {
            if (err) {
                console.error("Erro ao inserir a nova cooperativa: " + err.message);
                res.status(500).json({ error: "Erro interno do servidor" });
            }
            else {
                res.json("Cooperativa cadastrada com sucesso.");
            }
        });
    }
    update(req, res) {
        const { codigos, descricao } = req.body;
        const id = req.params.id;
        const sql = "UPDATE cooperativas SET codigos = ?, descricao = ? WHERE id = ?";
        database_1.database.query(sql, [codigos, descricao, id], (err, result) => {
            if (err) {
                console.error("Erro ao atualizar a cooperativa: " + err.message);
                res.status(500).json({ error: "Erro interno do servidor" });
            }
            else {
                res.json("Cooperativa atualizada com sucesso.");
            }
        });
    }
    delete(req, res) {
        const id = req.params.id;
        const sql = "DELETE FROM cooperativas WHERE id = ?";
        database_1.database.query(sql, [id], (err, result) => {
            if (err) {
                console.error("Erro ao excluir a cooperativa: " + err.message);
                res.status(500).json({ error: "Erro interno do servidor" });
            }
            else {
                res.json("Cooperativa excluída com sucesso.");
            }
        });
    }
}
exports.default = new CooperativasController();
