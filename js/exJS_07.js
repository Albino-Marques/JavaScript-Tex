//Pode-se utilizar o this para referenciar o elemento que ativou o evento.
console.log("Olá mundo");

let carrinho = {
  item1: {
    imagem: "mix-salad.jpg",
    nome: "Salada Mix",
    preco: 12,
  },
  item2: {
    imagem: "beef.jpg",
    nome: "Carne Grelhada",
    preco: 25,
  },
  item3: {
    imagem: "breakfast.jpg",
    nome: "Ovos com Bacon",
    preco: 31,
  },
};

/* Buscando uma ocorrêcia em string */
const msgCarrinho =
  "As opções são acompanhadas de batatas e arroz, com exceção das opções como caldos e sopas.";

let acomp01, acomp02, acomp03;
acomp01 = "Batatas Fritas";
acomp02 = "Batatas Rústicas";
acomp03 = "Batatas Souté";

let msg01 = msgCarrinho.replace("batatas", acomp02); //Esse método só irá mudar a primeira ocorrência da palavra "batatas"
document.querySelector("#msgCarrinho").innerText = msg01;

//Abaixo é a forma para encontrar mais ocorrência de string
let fraseCarrinho = document.querySelector("#msgCarrinho").innerText;
let busca = /opções/g;
let msg02 = fraseCarrinho.replace(busca, "refeições");
document.querySelector("#msgCarrinho").innerText = msg02;

/* ================== */
// document.querySelector(".item-nome span").innerText = carrinho["item1"].nome;
// document.querySelector(".item-preco span").innerText = `R$ ${carrinho[
//   "item1"
// ].preco
//   .toFixed(2)
//   .replace(".", ",")}`;
// document.querySelector(
//   ".item-imagem"
// ).innerHTML = `<img src='../images/produtos/mix-salad.jpg' alt='Salada Mix' class='w-100'/>`;

// let count = 0;

Object.keys(carrinho).forEach((key, i) => {
  document.querySelector(
    `.item-carrinho-${i} .item-imagem`
  ).innerHTML = `<img src='../images/produtos/${carrinho[key].imagem}' alt='Salada Mix' class='w-100' />`;
  document.querySelector(`.item-carrinho-${i} .item-nome span`).innerText =
    carrinho[key].nome;
  document.querySelector(
    `.item-carrinho-${i} .item-preco span`
  ).innerText = `R$ ${carrinho[key].preco.toFixed(2).replace(".", ",")}`;
  document.querySelector(
    `.item-carrinho-${i} .item-total span`
  ).innerText = `R$ ${carrinho[key].preco.toFixed(2).replace(".", ",")}`;
  //   count = count + 1;
});

//Alternativa 1 = Sem usar o this.
// let qtd = document.querySelector(".input-item-qtd");

// qtd.addEventListener("change", () => {
//   let total = carrinho["item1"].preco * qtd.value;
//   document.querySelector(".item-total").innerText = `R$ ${total.toFixed(2)}`;
// });

/* ============================================================================================= */

//Alternativa 2 = Usando o 'this'.
//É possível usar a palavra chave 'this' para referênciar a valiável 'qtd' contanto que ela seja declarada como global (usando a palavra 'var' para declarar). É válido para fazer as alterações de forma completa, buscando em toda a 'window' o conteúdo.
// var qtd = document.querySelector(".input-item-qtd");

// qtd.addEventListener("change", () => {
//   let total = carrinho["item1"].preco * this.qtd.value;
//   document.querySelector(".item-total").innerText = `R$ ${total.toFixed(2)}`;
// });

/* ============================================================================================= */

//Alternativa 3 = Usando o 'e' (event).
// let qtd = document.querySelector(".input-item-qtd");

// qtd.addEventListener("change", (e) => {
//   let total = carrinho["item1"].preco * e.target.value;
//   document.querySelector(".item-total").innerText = `R$ ${total.toFixed(2)}`;
// });
//O 'e' na declaração (o event) da função faz uma auto-referência ao conteúdo apontado inicialmente (o 'qtd'). No caso aqui, faz com que seja descartável o uso da variável, pois estará apontando através do e.target o próprio elemento ao qual inicia a função.
// Este funciona com escopo da variável global ou bloco.

//Alternativa 4 = Usando o evento 'onchange'.

let qtd0 = document.querySelector(".item-carrinho-0 .input-item-qtd");

qtd0.onchange = function () {
  let total = carrinho["item1"].preco * this.value;
  document.querySelector(
    ".item-carrinho-0  .item-total"
  ).innerText = `R$ ${total.toFixed(2).replace(".", ",")}`;
};
let qtd1 = document.querySelector(".item-carrinho-1 .input-item-qtd");

qtd1.onchange = function () {
  let total = carrinho["item2"].preco * this.value;
  document.querySelector(".item-carrinho-1 .item-total").innerText = `R$ ${total
    .toFixed(2)
    .replace(".", ",")}`;
};
let qtd2 = document.querySelector(".item-carrinho-2 .input-item-qtd");

qtd2.onchange = function () {
  let total = carrinho["item3"].preco * this.value;
  document.querySelector(".item-carrinho-2 .item-total").innerText = `R$ ${total
    .toFixed(2)
    .replace(".", ",")}`;
};

//Desta forma o this pode ser usado sem a necessidade de referenciar a variável 'qtd' novamente, pois a mesma está sendo referênciada na 'window' com o evento 'onchange'.
//Não podendo ser usado daí a arrow function.

//Alternativa 5 = Usando arrow function com

// let qtd = document.querySelector(".input-item-qtd");

// qtd.onchange = (e) => {
//   // let total = carrinho["item1"].preco * qtd.value;
//   let total = carrinho["item1"].preco * e.target.value;
//   document.querySelector(".item-total").innerText = `R$ ${total.toFixed(2)}`;
// };

/* Percorrendo objetos! */
//Exemplo 01 (for of)
// for (const key of Object.keys(carrinho)) {
//   console.log(key); // Retornará a chave, que se refére ao que antecede o valor (nome = chave, bacon = valor)
//   console.log(carrinho[key].nome); // retorna daí o valor 'nome' dentro do objeto.
//   console.log(carrinho[key].preco); // retorna daí o valor 'preco' dentro do objeto
// }

// //Exemplo 02 (for each)
// let total = 0;
// Object.keys(carrinho).forEach((key) => {
//   total = total + carrinho[key].preco;
//   console.log(key);
//   console.log(carrinho[key].nome);
//   console.log(carrinho[key].preco);
//   console.log(total);
// });
