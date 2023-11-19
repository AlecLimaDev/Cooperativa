import { database } from "../database/database";
import { Request, Response } from "express"

class ListaDeChavesController {
    
    get(req: Request, res: Response) {
        const sql = "SELECT * FROM contatos_favoritos ORDER BY lista_de_chaves";
        database.query(sql, (err, result) => {
          if (err) {
            console.error("Erro ao buscar tipos de chaves pix: " + err.message);
            res.status(500).json({ error: "Erro interno do servidor" });
          } else {
            res.json(result);
          }
        });
      }



}

export default new ListaDeChavesController()