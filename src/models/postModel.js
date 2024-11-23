// camada que faz a conexão com o banco de dados
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO_BANCO_DADOS);

export default function getTodosPosts() {
    const db = conexao.db("imersao-backend");
    const colecao = db.collection("posts")
    return colecao.find().toArray();
}