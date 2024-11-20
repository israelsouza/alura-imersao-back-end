/*    AULA 01

// trazer o pacote EXPRESS que foi instalado
import exp from "express";

// armazenar o EXPRESS dentro de uma constante para facilitar os métodos a serem utilizados
const app = exp();


// metodo do express que recebe dois parametros, a porta e uma arrow function com o que vai ser executado ao acessarem a porta determinada
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

// metodo do express que tem um caminho e uma funcao como parametros. Na funcao é definido que esta sendo enviado uma mensagem na tela se o status for OK (protocolo http)
app.get("/api", (requisicao, resposta) => {
    resposta.status(200).send("Boas vindas, você trouxe uma informação do back-end para a tela!!");
}); */

import express from 'express';

// criação base de dados pra teste (com IA)
const posts = [
    { mensagem: "Um lindo pôr do sol", imagem: "https://source.unsplash.com/random/300x200" },
    { mensagem: "Receita de bolo de chocolate", imagem: "https://www.example.com/bolo.jpg" },
    { mensagem: "Citação inspiradora", imagem: "https://quotescover.com/wp-content/uploads/2021/04/quotes-images-22.jpg" },
    { mensagem: "Meme engraçado", imagem: "https://imgflip.com/memetemplate" },
    { mensagem: "Paisagem montanhosa", imagem: "https://cdn.pixabay.com/photo/2015/04/23/22/00/mountains-736889_960_720.jpg" },
    { mensagem: "Vídeo de um cachorro", imagem: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }, 
]

// adicionar um id em cada item do array
const postsComID = posts.map( (post, index) => ({
    id: index+1,
    ...post
}));

const app = express();
// conversao do que for usado em JSON
app.use(express.json());

app.listen(3000, () => {
    console.log('servidor escutando');
});

// exibindo todos objetos no formato JSON
app.get("/posts", (req, res) => {
    res.status(200).json(postsComID);
});

// e se eu quiser exibir só um?

// vai identificar o numero que usuario digitou na URL e transformar em uma posicao no array
function buscarPostPorID(id) {
    return postsComID.findIndex( (post) => {
        return post.id === Number(id);
    } );
};

// identifica numero digitado na URL
// aciona funcao com essa 'posicao'
// vai exibir o Array[posicao]
app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(postsComID[index]);
});