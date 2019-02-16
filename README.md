<p align="center">
  <img src="https://i.ibb.co/WzmSM0w/LOGO1250.jpg raw=true"/>
</p>


O Guia do Corretor é um web site responsivo, no qual os profissionais que têm interesse nesse ramo, obterão as informações necessárias para seguir na carreira e prosperar nos negócios

## Getting Started

As instruções abaixo vão possibilitar que você tenha uma cópia funcional do projeto em seu computador local. 

### Prerequisites

What things you need to install the software and how to install them
Para que você consiga realizar os passos de instalação abaixo e os demais você precisa ter os itens abaixo instalados em sua maquina local:


```
Git
Node.js
Nodemon
Typescript
Ts-node
Angular 7
```

### Installing

Para que você tenha o projeto instalado em seu computador local, você precisa rodar o comando abaixo:

```
git clone XXX
```

Após isso, será necessário fazer a instalação de dependencias no frontend e no backend. Para fazer a instalação no backend você deve seguir os comandos abaixo:

```
cd guiaApp
npm install
```

Após a última instalação ser finalizada, neste mesmo terminal, você deve realizar a seguinte sequencia de comando:
```
cd ../server
npm install
```

Após isso você terá o ambiente instalado e pronto para rodar a aplicação em ambiente de desenvolvimento.

### Production Environment

Para deixar a aplicação pronta para produção, após realizado todo o desenvolvimento, rode o comando abaixo na pasta do frontend, guiaApp:

```
ng build --prod
```

Este comando vai fazer o build da aplicação e deixar todos os arquivos necessarios na pasta dist.


## Development Mode

Após todas as instalações, é necessário rodar o seguinte comando na pasta de frontend, guiaApp:

```
ng serve -o 
```

Este comando vai abrir uma alicação live reload do Angular para desenvolvimento na porta 4200, ou seja, acessível em http://localhost:4200;

Para rodar o backend da aplicação, basta rodar o simples comando abaixo na pasta server:

```
npm run dev
```

E em um outro terminal um comando que vai rodar o Typescript:

```
npm run build
```

Para que você possa consultar as APIs, suas documentações e tipos de métodos, utilizamos o Swagger, que traz a possibilidade até mesmo de  realização de testes das APIs:

```
http://localhost:3000/api-docs/swagger/#/
```

## Production Mode

Quando o ambiente de produção estiver pronto, é necessário apenas rodar o comando abaixo para que a aplicação esteja rodando:

```
npm run prod
```


## Built With

* [Angular](https://angular.io/) - O framework frontend utilizado na aplicação
* [Node.js](https://nodejs.org/en/) - O ecosistema de backend utilizado na palicação
* [Typescript](https://www.typescriptlang.org/) - Compilador de Javascript utilizado para melhor organização do código

## Contributing

Este é um projeto Open Source, portanto você pode colaborar!! Faça um git clone, desenvolva e faça um pull request!

## Versioning

Essa é uma aplicação que foi desenvolvida, primeiramente, para um hackathon. Portanto a mesma está em versão beta. Porém, após finalização da versão beta, passaremos a utilizar [SemVer](http://semver.org/)

## Authors

* **Marília Suzart** - *Desenvolvedora FrontEnd* 
* **José Martins** - *Cientista de Dados* 
* **David Dias** - *Designer e Profissional de UX/UI*
* **Lukas Fialho** - *Desenvolvedor FullStack*

