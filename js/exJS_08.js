let carrinho = {
  item1: {
    imagem: "mix-salad.jpg",
    nome: "Salada Mix",
    preco: 12,
    quantidade: 1,
    total: 1,
  },
  item2: {
    imagem: "beef.jpg",
    nome: "Carne Grelhada",
    preco: 25,
    quantidade: 1,
    total: 1,
  },
  item3: {
    imagem: "breakfast.jpg",
    nome: "Ovos com Bacon",
    preco: 31,
    quantidade: 1,
    total: 1,
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

let fraseCarrinho = document.querySelector("#msgCarrinho").innerText;
let busca = /opções/g;
let msg02 = fraseCarrinho.replace(busca, "refeições");
document.querySelector("#msgCarrinho").innerText = msg02;

/*===============================================*/

Object.keys(carrinho).forEach((key, i) => {
  var divItem = document.createElement("div");
  divItem.setAttribute("class", `item-carrinho-${i} row mt-2`);
  console.log(i, "x");

  Object.keys(carrinho[key]).forEach((otherkey, ii) => {
    var item = document.createElement("div");
    item.setAttribute("class", `col item-${otherkey}`);
    item.innerText = carrinho[key][otherkey];
    divItem.appendChild(item);
    //   //   document.querySelector(
    //   //     `.item-carrinho-${i} .item-imagem`
    //   //   ).innerHTML = `<img src='../images/produtos/${carrinho[key].imagem}' alt='Salada Mix' class='w-100' />`;
    //   //   document.querySelector(`.item-carrinho-${i} .item-nome span`).innerText =
    //   //     carrinho[key].nome;
    //   //   document.querySelector(
    //   //     `.item-carrinho-${i} .item-preco span`
    //   //   ).innerText = `R$ ${carrinho[key].preco.toFixed(2).replace(".", ",")}`;
    //   //   document.querySelector(
    //   //     `.item-carrinho-${i} .item-total span`
    //   //   ).innerText = `R$ ${carrinho[key].preco.toFixed(2).replace(".", ",")}`;
  });

  document.querySelector("#itens-carrinho").appendChild(divItem);
});

/* Criando Elementos HTML através de createElement() */
// let p = document.createElement("p");
// p.style = "color:brown";
// p.setAttribute("class", "w-100");
// document.querySelector("#mensagem").appendChild(p);
// p.innerText = "Nossos alimentos passam por uma rigorosa análise de qualidade.";

// let qtd = document.querySelector(".input-item-qtd");

// qtd.onchange = function () {
//   let total = carrinho["item1"].preco * this.value;
//   document.querySelector(" .item-total").innerText = `R$ ${total
//     .toFixed(2)
//     .replace(".", ",")}`;
// };

/* <div class="row mt-4 item-carrinho-0">
<div class="col item-imagem"></div>
<div class="col item-nome">
  <span></span>
</div>
<div class="col item-preco">
  <span></span>
</div>
<div class="col item-quantidade">
  <input
    value="1"
    type="number"
    name="item-qtd"
    class="input-item-qtd w-50 border-0 bg-light"
    min="0"
    max="10"
  />
</div>
<div class="col item-total">
  <span></span>
</div>
</div> */
