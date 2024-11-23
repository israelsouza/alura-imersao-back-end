// responsabilidades de lidar com requisição e respostas

import getTodosPosts from "../models/postModel.js";


export async function listarPosts(req, res) {
    const postsDoBanco = await getTodosPosts();
    res.status(200).json(postsDoBanco);
}