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
});