const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const fs = require("fs");
const https = require("https");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../backend/swagger.json");

require("dotenv").config({});

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/lista_de_chaves", (rea, res) => {
  const sql = "SELECT * FROM contatos_favoritos ORDER BY lista_de_chaves";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Erro ao buscar tipos de chaves pix: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    } else {
      res.json(result);
    }
  });
});

app.post("/contatos-favoritos", (req, res) => {
  const {
    nome_contato,
    tipo_chave_pix,
    chave_pix,
    cooperado_id,
    lista_de_chaves,
  } = req.body;
  const sql =
    "INSERT INTO contatos_favoritos (nome_contato, tipo_chave_pix, chave_pix, cooperado_id, lista_de_chaves) VALUES (?, ?, ?, ?, ?)";
  db.query(
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
});

app.get("/contatos-favoritos", (req, res) => {
  const sql = "SELECT * FROM contatos_favoritos";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Erro ao buscar os contatos favoritos: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    } else {
      res.json(result);
    }
  });
});

app.put("/contatos-favoritos/:id", (req, res) => {
  const { nome_contato, tipo_chave_pix, chave_pix, cooperado_id } = req.body;
  const id = req.params.id;
  const sql =
    "UPDATE contatos_favoritos SET nome_contato = ?, tipo_chave_pix = ?, chave_pix = ?, cooperado_id = ? WHERE id = ?";
  db.query(
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
});

app.delete("/contatos-favoritos/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM contatos_favoritos WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Erro ao excluir o contato favorito: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    } else {
      res.json("Contato favorito excluído com sucesso.");
    }
  });
});

app.post("/cooperativas", (req, res) => {
  const { codigos, descricao } = req.body;
  const sql = "INSERT INTO cooperativas (codigos, descricao) VALUES (?, ?)";
  db.query(sql, [codigos, descricao], (err, result) => {
    if (err) {
      console.error("Erro ao inserir a nova cooperativa: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    } else {
      res.json("Cooperativa cadastrada com sucesso.");
    }
  });
});

app.get("/cooperativas", (req, res) => {
  db.query("SELECT * FROM cooperativas", (err, result) => {
    if (err) {
      console.error(
        "Erro ao buscar as cooperativas no banco de dados: " + err.message
      );
      res.status(500).json({ error: "Erro interno do servidor" });
    } else {
      res.json(result);
    }
  });
});

app.put("/cooperativas/:id", (req, res) => {
  const { codigos, descricao } = req.body;
  const id = req.params.id;
  const sql = "UPDATE cooperativas SET codigos = ?, descricao = ? WHERE id = ?";
  db.query(sql, [codigos, descricao, id], (err, result) => {
    if (err) {
      console.error("Erro ao atualizar a cooperativa: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    } else {
      res.json("Cooperativa atualizada com sucesso.");
    }
  });
});

app.delete("/cooperativas/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM cooperativas WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Erro ao excluir a cooperativa: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    } else {
      res.json("Cooperativa excluída com sucesso.");
    }
  });
});

app.post("/cooperados", (req, res) => {
  const { cooperativa_id, conta_corrente, nome } = req.body;
  const sql =
    "INSERT INTO cooperados (cooperativa_id, conta_corrente, nome) VALUES (?, ?, ?)";
  db.query(sql, [cooperativa_id, conta_corrente, nome], (err, result) => {
    if (err) {
      console.error("Erro ao inserir o cooperado: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    } else {
      res.json("Cooperado cadastrado com sucesso.");
    }
  });
});

app.get("/cooperados", (req, res) => {
  db.query("SELECT * FROM cooperados", (err, result) => {
    if (err) {
      console.error(
        "Erro ao buscar os cooperados no banco de dados: " + err.message
      );
      res.status(500).json({ error: "Erro interno do servidor" });
    } else {
      res.json(result);
    }
  });
});

app.put("/cooperados/:id", (req, res) => {
  const { cooperativa_id, conta_corrente, nome } = req.body;
  const id = req.params.id;
  const sql =
    "UPDATE cooperados SET cooperativa_id = ?, conta_corrente = ?, nome = ? WHERE id = ?";
  db.query(sql, [cooperativa_id, conta_corrente, nome, id], (err, result) => {
    if (err) {
      console.error("Erro ao atualizar o cooperado: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    } else {
      res.json("Cooperado atualizado com sucesso.");
    }
  });
});

app.delete("/cooperados/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM cooperados WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Erro ao excluir o cooperado: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    } else {
      res.json("Cooperado excluído com sucesso.");
    }
  });
});

https
  .createServer(
    {
      cert: fs.readFileSync("SSL/code.crt"),
      key: fs.readFileSync("SSL/code.key"),
    },
    app
  )
  .listen(2001, () => console.log("API HTTPS RODANDO"));
