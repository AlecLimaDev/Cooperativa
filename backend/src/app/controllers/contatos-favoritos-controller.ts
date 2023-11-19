import { database } from "../database/database";
import { Request, Response } from "express";

class ContatosFavoritosController {

  get(req: Request, res: Response) {
    const sql = "SELECT * FROM contatos_favoritos";
    database.query(sql, (err, result) => {
      if (err) {
        console.error("Erro ao buscar os contatos favoritos: " + err.message);
        res.status(500).json({ error: "Erro interno do servidor" });
      } else {
        res.json(result);
      }
    });
  }

  post(req: Request, res: Response) {
    const {
      nome_contato,
      tipo_chave_pix,
      chave_pix,
      cooperado_id,
      lista_de_chaves,
    } = req.body;
    const sql =
      "INSERT INTO contatos_favoritos (nome_contato, tipo_chave_pix, chave_pix, cooperado_id, lista_de_chaves) VALUES (?, ?, ?, ?, ?)";
    database.query(
      sql,
      [nome_contato, tipo_chave_pix, chave_pix, cooperado_id, lista_de_chaves],
      (err, result) => {
        if (err) {
          console.error("Erro ao inserir o contato favorito: " + err.message);
          res.status(500).json({ error: "Erro interno do servidor" });
        } else {
          res.json("Contato favorito cadastrado com sucesso.");
        }
      }
    );
  }

  update(req: Request, res: Response) {
    const { nome_contato, tipo_chave_pix, chave_pix, cooperado_id } = req.body;
    const id = req.params.id;
    const sql =
      "UPDATE contatos_favoritos SET nome_contato = ?, tipo_chave_pix = ?, chave_pix = ?, cooperado_id = ? WHERE id = ?";
    database.query(
      sql,
      [nome_contato, tipo_chave_pix, chave_pix, cooperado_id, id],
      (err, result) => {
        if (err) {
          console.error("Erro ao atualizar o contato favorito: " + err.message);
          res.status(500).json({ error: "Erro interno do servidor" });
        } else {
          res.json("Contato favorito atualizado com sucesso.");
        }
      }
    );
  }

  delete(req: Request, res: Response) {
    const id = req.params.id;
    const sql = "DELETE FROM contatos_favoritos WHERE id = ?";
    database.query(sql, [id], (err, result) => {
      if (err) {
        console.error("Erro ao excluir o contato favorito: " + err.message);
        res.status(500).json({ error: "Erro interno do servidor" });
      } else {
        res.json("Contato favorito excluído com sucesso.");
      }
    });
  }
  
}

export default new ContatosFavoritosController();
