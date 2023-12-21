"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const fs_1 = __importDefault(require("fs"));
const https_1 = __importDefault(require("https"));
const lista_de_chaves_controller_1 = __importDefault(require("./app/controllers/lista-de-chaves-controller"));
const contatos_favoritos_controller_1 = __importDefault(require("./app/controllers/contatos-favoritos-controller"));
const cooperativas_controller_1 = __importDefault(require("./app/controllers/cooperativas-controller"));
const cooperados_controller_1 = __importDefault(require("./app/controllers/cooperados-controller"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.get("/lista_de_chaves", lista_de_chaves_controller_1.default.get);
app.post("/contatos-favoritos", contatos_favoritos_controller_1.default.post);
app.get("/contatos-favoritos", contatos_favoritos_controller_1.default.get);
app.put("/contatos-favoritos/:id", contatos_favoritos_controller_1.default.update);
app.delete("/contatos-favoritos/:id", contatos_favoritos_controller_1.default.delete);
app.post("/cooperativas", cooperativas_controller_1.default.post);
app.get("/cooperativas", cooperativas_controller_1.default.get);
app.put("/cooperativas/:id", cooperativas_controller_1.default.update);
app.delete("/cooperativas/:id", cooperativas_controller_1.default.delete);
app.post("/cooperados", cooperados_controller_1.default.post);
app.get("/cooperados", cooperados_controller_1.default.get);
app.put("/cooperados/:id", cooperados_controller_1.default.update);
app.delete("/cooperados/:id", cooperados_controller_1.default.delete);
https_1.default
    .createServer({
    cert: fs_1.default.readFileSync("SSL/code.crt"),
    key: fs_1.default.readFileSync("SSL/code.key"),
}, app)
    .listen(2001, () => console.log("API HTTPS RODANDO"));
