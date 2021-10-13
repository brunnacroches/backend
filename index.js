const express = require('express'); // só aparecer se instalar as dependencias 
const server = express(); // criar mais uma constante que vai ser o nosso servidor ( const server ), ele vai receber o express com todas as dependencias ( express )


// o nosso servidor ele precisa escutar em alguma porta, então vamos definir uma porta que ele precisa escutar

server.get('/usuario', (req,res) => {// requisição do tipo GET
// passar dentro dos parentese : ('/') => toda que vez que for acessar o servidor e colocar barra (/) vamos acessar todos os dados dentro dessa API
// (req, res) ==> requisição e resposta do nosso backend 
  return res.json({usuario:'Marcos Duarte'});

});
  // retornar uma estrutura em json  =>  retornar uma resposta que vai ser o json e dentro de parentese coloca o objeto mensagem 

  server.listen(3000, ()=> {
    console.log('Servidor está funcionando...')
}) 
// o .listen é um método para escutar alguma coisa, e a porta que vamos escutar vai ser (a porta 3000)
// é add um função anomina (, () => {})


