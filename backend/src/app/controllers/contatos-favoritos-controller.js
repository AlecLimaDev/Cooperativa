"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database/database");
class ContatosFavoritosController {
    get(req, res) {
        const sql = "SELECT * FROM contatos_favoritos";
        database_1.database.query(sql, (err, result) => {
            if (err) {
                console.error("Erro ao buscar os contatos favoritos: " + err.message);
                res.status(500).json({ error: "Erro interno do servidor" });
            }
            else {
                res.json(result);
            }
        });
    }
    post(req, res) {
        const { nome_contato, tipo_chave_pix, chave_pix, cooperado_id, lista_de_chaves, } = req.body;
        const sql = "INSERT INTO contatos_favoritos (nome_contato, tipo_chave_pix, chave_pix, cooperado_id, lista_de_chaves) VALUES (?, ?, ?, ?, ?)";
        database_1.database.query(sql, [nome_contato, tipo_chave_pix, chave_pix, cooperado_id, lista_de_chaves], (err, result) => {
            if (err) {
                console.error("Erro ao inserir o contato favorito: " + err.message);
                res.status(500).json({ error: "Erro interno do servidor" });
            }
            else {
                res.json("Contato favorito cadastrado com sucesso.");
            }
        });
    }
    update(req, res) {
        const { nome_contato, tipo_chave_pix, chave_pix, cooperado_id } = req.body;
        const id = req.params.id;
        const sql = "UPDATE contatos_favoritos SET nome_contato = ?, tipo_chave_pix = ?, chave_pix = ?, cooperado_id = ? WHERE id = ?";
        database_1.database.query(sql, [nome_contato, tipo_chave_pix, chave_pix, cooperado_id, id], (err, result) => {
            if (err) {
                console.error("Erro ao atualizar o contato favorito: " + err.message);
                res.status(500).json({ error: "Erro interno do servidor" });
            }
            else {
                res.json("Contato favorito atualizado com sucesso.");
            }
        });
    }
    delete(req, res) {
        const id = req.params.id;
        const sql = "DELETE FROM contatos_favoritos WHERE id = ?";
        database_1.database.query(sql, [id], (err, result) => {
            if (err) {
                console.error("Erro ao excluir o contato favorito: " + err.message);
                res.status(500).json({ error: "Erro interno do servidor" });
            }
            else {
                res.json("Contato favorito excluído com sucesso.");
            }
        });
    }
}
exports.default = new ContatosFavoritosController();
