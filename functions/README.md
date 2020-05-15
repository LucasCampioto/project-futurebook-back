# FutureTube

## Stack
Essa é a parte do backend do projeto FutureTube. Nele foi utilizando NodeJS, Express, Typescript e firebase. Além disso, ele segue uma arquitetura em camadas simples:
1. Presentation: responsável pela comunicação com agentes externos (como o Frontend)
1. Data: responsável pela comunicação direta com o banco de dados
1. Business: responsável pela lógica de negócio
Por fim, ressalta-se que a comunicação da camada `Data` e a `Business` é feita através de interfaces denominadas `Gateway`, para possibilitar os testes unitários desta última camada (inversão de dependências)

## Sobre
Esse projeto simula o site Youtube. Nele é possivel deletar, alterar, enviar, pegar detalhes e retornar todos os videos. Não tem nada relacionado ao usuário, porque toda parte de atenticação foi feito usando firebase authentication e foi feita diretamente no frontend

## Instruções para rodar
As instruções são:
1. `npm install` para instalar todas as dependências;
1. `npm run start` para rodar localmente o projeto
1. `npm run build` para gerar uma versão possível de ser deployada com os arquivos transpilados para Javascript

## Contato (opcional)
Lucas Campioto Constantino
l_campioto@hotmail.com
(011) 94783-7190