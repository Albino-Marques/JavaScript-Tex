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

let qtd = document.querySelector(".input-item-qtd");

qtd.addEventListener("change", () => {
  let total = carrinho["item1"].preco * qtd.value;
  document.querySelector(".item-total").innerText = `R$ ${total.toFixed(2)}`;
});
