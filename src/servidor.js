import express from 'express';
import url from 'url';
import path from 'path';

const app = express();
const PORTA = process.env.PORT || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..","public");
app.use(express.static(diretorioPublico));


app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});