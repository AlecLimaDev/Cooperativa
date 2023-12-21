"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database/database");
class CooperadosController {
    get(req, res) {
        database_1.database.query("SELECT * FROM cooperados", (err, result) => {
            if (err) {
                console.error("Erro ao buscar os cooperados no banco de dados: " + err.message);
                res.status(500).json({ error: "Erro interno do servidor" });
            }
            else {
                res.json(result);
            }
        });
    }
    post(req, res) {
        const { cooperativa_id, conta_corrente, nome } = req.body;
        const sql = "INSERT INTO cooperados (cooperativa_id, conta_corrente, nome) VALUES (?, ?, ?)";
        database_1.database.query(sql, [cooperativa_id, conta_corrente, nome], (err, result) => {
            if (err) {
                console.error("Erro ao inserir o cooperado: " + err.message);
                res.status(500).json({ error: "Erro interno do servidor" });
            }
            else {
                res.json("Cooperado cadastrado com sucesso.");
            }
        });
    }
    update(req, res) {
        const { cooperativa_id, conta_corrente, nome } = req.body;
        const id = req.params.id;
        const sql = "UPDATE cooperados SET cooperativa_id = ?, conta_corrente = ?, nome = ? WHERE id = ?";
        database_1.database.query(sql, [cooperativa_id, conta_corrente, nome, id], (err, result) => {
            if (err) {
                console.error("Erro ao atualizar o cooperado: " + err.message);
                res.status(500).json({ error: "Erro interno do servidor" });
            }
            else {
                res.json("Cooperado atualizado com sucesso.");
            }
        });
    }
    delete(req, res) {
        const id = req.params.id;
        const sql = "DELETE FROM cooperados WHERE id = ?";
        database_1.database.query(sql, [id], (err, result) => {
            if (err) {
                console.error("Erro ao excluir o cooperado: " + err.message);
                res.status(500).json({ error: "Erro interno do servidor" });
            }
            else {
                res.json("Cooperado excluído com sucesso.");
            }
        });
    }
}
exports.default = new CooperadosController();
