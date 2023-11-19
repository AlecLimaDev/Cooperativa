import { database } from "../database/database";
import { Request, Response } from "express";

class CooperadosController {
  get(req: Request, res: Response) {
    database.query("SELECT * FROM cooperados", (err, result) => {
      if (err) {
        console.error(
          "Erro ao buscar os cooperados no banco de dados: " + err.message
        );
        res.status(500).json({ error: "Erro interno do servidor" });
      } else {
        res.json(result);
      }
    });
  }

  post(req: Request, res: Response) {
    const { cooperativa_id, conta_corrente, nome } = req.body;
    const sql =
      "INSERT INTO cooperados (cooperativa_id, conta_corrente, nome) VALUES (?, ?, ?)";
    database.query(
      sql,
      [cooperativa_id, conta_corrente, nome],
      (err, result) => {
        if (err) {
          console.error("Erro ao inserir o cooperado: " + err.message);
          res.status(500).json({ error: "Erro interno do servidor" });
        } else {
          res.json("Cooperado cadastrado com sucesso.");
        }
      }
    );
  }

  update(req: Request, res: Response) {
    const { cooperativa_id, conta_corrente, nome } = req.body;
    const id = req.params.id;
    const sql =
      "UPDATE cooperados SET cooperativa_id = ?, conta_corrente = ?, nome = ? WHERE id = ?";
    database.query(
      sql,
      [cooperativa_id, conta_corrente, nome, id],
      (err, result) => {
        if (err) {
          console.error("Erro ao atualizar o cooperado: " + err.message);
          res.status(500).json({ error: "Erro interno do servidor" });
        } else {
          res.json("Cooperado atualizado com sucesso.");
        }
      }
    );
  }

  delete(req: Request, res: Response) {
    const id = req.params.id;
    const sql = "DELETE FROM cooperados WHERE id = ?";
    database.query(sql, [id], (err, result) => {
      if (err) {
        console.error("Erro ao excluir o cooperado: " + err.message);
        res.status(500).json({ error: "Erro interno do servidor" });
      } else {
        res.json("Cooperado excluído com sucesso.");
      }
    });
  }
  
}

export default new CooperadosController();
