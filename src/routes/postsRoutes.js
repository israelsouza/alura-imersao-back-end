// responsabilidade de criar as rotas da aplicação
import express from 'express';
import { listarPosts } from '../controller/postsControler.js';

const routes = (app) => {
    app.use(express.json());

    app.get("/posts", listarPosts);
}

export default routes;