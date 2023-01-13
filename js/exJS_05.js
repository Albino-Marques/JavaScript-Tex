console.log("Olá mundo");

let carrinho = {
  item1: {
    nome: "Salada Mix",
    preco: 12,
  },
  item2: {
    nome: "Carne Grelhada",
    preco: 25,
  },
  item3: {
    nome: "Ovos com Bacon",
    preco: 31,
  },
};

document.querySelector(".item-nome span").innerText = carrinho["item1"].nome;
document.querySelector(".item-preco span").innerText = `R$ ${carrinho[
  "item1"
].preco.toFixed(2)}`;
document.querySelector(
  ".item-imagem"
).innerHTML = `<img src='../images/produtos/salad-gf22844a91_1920.jpg' alt='Salada Mix' class='w-100'/>`;

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

let qtd = document.querySelector(".input-item-qtd");

qtd.onchange = function () {
  let total = carrinho["item1"].preco * this.value;
  document.querySelector(".item-total").innerText = `R$ ${total.toFixed(2)}`;
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
