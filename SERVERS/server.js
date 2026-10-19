const http = require('http');

let count = 0;

const servidor = http.createServer((requisicao, resposta) => {
  // Configura a resposta para aceitar textos em português
  resposta.setHeader('Content-Type', 'text/html; charset=utf-8');

  // Se a requisição for do tipo GET
  if (requisicao.method === 'GET') {
    resposta.writeHead(200);
    resposta.end('<b>Olá mundo do Node.js!</b>');
    console.log(++count);
  } 
  // Se a requisição for do tipo POST
  else if (requisicao.method === 'POST') {
    resposta.writeHead(200);
    resposta.end('O Post deve retornar Olá mundo do POST!');
  } else {
    resposta.writeHead(405);
    resposta.end('Método não permitido');
  }
});

// O servidor vai escutar na porta 3000
servidor.listen(3000, () => {
  console.log('Servidor Node.js rodando na porta 3000!');
});