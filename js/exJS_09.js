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
  item4: {
    imagem: "salmon.jpg",
    nome: "Salmão Grelhado",
    preco: 78,
    quantidade: 1,
    total: 1,
  },
  criaImagem: function (url, nome, obj) {
    let imagem = new Image();
    imagem.src = url;
    imagem.setAttribute("class", "w-100");
    imagem.alt = nome;
    obj.appendChild(imagem);
  },
  criaInputNumber: function (obj, key, i) {
    let inputNumber = document.createElement("input");
    inputNumber.type = "number";
    inputNumber.setAttribute("class", "w-50 border-0 bg-ligth");
    inputNumber.min = "0";
    inputNumber.max = "10";
    inputNumber.value = "1";
    obj.appendChild(inputNumber);

    // let qtd = document.querySelector(".input-item-qtd");

    inputNumber.onchange = function () {
      let total = carrinho[key].preco * this.value;
      document.querySelector(
        `.item-carrinho-${i} .item-total`
      ).innerText = `R$ ${total.toFixed(2).replace(".", ",")}`;
    };
  },
  criaSpan: function (key, otherkey, obj) {
    var span = document.createElement("span");
    span.innerText = carrinho[key][otherkey];
    obj.appendChild(span);
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

  Object.keys(carrinho[key]).forEach((otherkey, ii) => {
    var item = document.createElement("div");
    item.setAttribute("class", `col item-${otherkey}`);
    ii === 0
      ? carrinho["criaImagem"](
        `/images/produtos/${carrinho[key].imagem}`,
        carrinho[key].nome,
        item
      )
      : ii === 3
        ? carrinho["criaInputNumber"](item, key, i)
        : carrinho["criaSpan"](key, otherkey, item);
    // (item.innerText = carrinho[key][otherkey]);
    divItem.appendChild(item);
  });

  document.querySelector("#itens-carrinho").appendChild(divItem);
});
/* Criando Elementos HTML através de createElement() */
let p = document.createElement("p");
p.style = "color:brown";
p.setAttribute("class", "w-100");
document.querySelector("#mensagem").appendChild(p);
p.innerText = "Nosssos alimentos passam por uma rigorosa análise de qualidade.";

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
