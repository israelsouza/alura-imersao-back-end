// arquivo que vai se conectar com o banco de dados

import { MongoClient } from 'mongodb';

// função padrão para conectar com o cluster(espaço de armazenamento) do MongoDB Atlas
export default async function conectarAoBanco(stringConexao) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConexao);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');

        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
}