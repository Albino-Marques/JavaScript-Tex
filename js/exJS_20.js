let resultado = 0
let carrinho = {
    item1: {
        imagem: "mix-salad.jpg",
        nome: "Salada Mix",
        preco: 12,
        quantidade: 0,
        total: 0, fechar: 'x'
    },
    item2: {
        imagem: "beef.jpg",
        nome: "Carne Grelhada",
        preco: 25,
        quantidade: 0,
        total: 0, fechar: 'x'
    },
    item3: {
        imagem: "breakfast.jpg",
        nome: "Ovos com Bacon",
        preco: 31,
        quantidade: 0,
        total: 0, fechar: 'x'
    },
    item4: {
        imagem: "salmon.jpg",
        nome: "Salmão Grelhado",
        preco: 78,
        quantidade: 0,
        total: 0, fechar: 'x'
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
        inputNumber.value = carrinho[key].quantidade;
        obj.appendChild(inputNumber);


        // let qtd = document.querySelector(".input-item-qtd");

        inputNumber.onchange = function () {
            let total = carrinho[key].preco * this.value;
            resultado = 0
            document.querySelector(
                `.item-carrinho-${i} .item-total span`
            ).innerText = `R$ ${total.toFixed(2).replace(".", ",")}`;
            carrinho[key].quantidade = this.value;
            carrinho[key].total = total;
            carrinho['totalCarrinho']()
        };


    },
    criaSpan: function (key, otherkey, obj) {
        var span = document.createElement("span");
        otherkey == 'total' ? span.innerText = `R$ ${carrinho[key][otherkey].toFixed(2)}` :
            span.innerText = carrinho[key][otherkey];
        otherkey == 'fechar' ? span.onclick = function () { carrinho['deleteItem'](key) } : null;
        obj.appendChild(span);
    },

    totalCarrinho: function () {
        document.querySelectorAll('.item-total').forEach((n) => {
            let obj = n.querySelector('span').innerText
            resultado += parseInt(obj.substring(3, obj.length));
            document.querySelector('#totalCarrinho').innerText = `R$ ${resultado.toFixed(2)}`
        })
    },
    deleteItem: function (item) {
        resultado -= carrinho[item].total
        document.querySelector("#totalCarrinho").innerText = `R$ ${resultado.toFixed(2).replace('.', ',')}`
        delete carrinho[item]
        montaCarinho()
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
function montaCarinho() {
    const divBox = document.getElementById('itens-carrinho')
    while (divBox.firstChild) {
        divBox.removeChild(divBox.firstChild)
    }

    Object.keys(carrinho).forEach((key, i) => {
        if (typeof carrinho[key] == "object") {
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
        }
    })
};
montaCarinho()


function cumpomDesconto() {
    let cupom = Math.random().toString(36).substring(2, 9)
    return cupom
}



document.querySelector('#cupom p').innerText = cumpomDesconto()
document.querySelector('#btnCupom').addEventListener('click', () => {
    let desconto = resultado * 0.9
    document.querySelector('#inputDesconto').value.toLowerCase() == document.querySelector('#cupom p').innerText ?
        document.querySelector('#totalCarrinho').innerText = desconto.toFixed(2) : alert('Cupom inválido!')
})



/* Criando Elementos HTML através de createElement() */
let p = document.createElement("div");
p.style = "color:brown";
p.setAttribute("class", "w-100");
document.querySelector("#mensagem").appendChild(p);
p.innerText = "Nosssos alimentos passam por uma rigorosa análise de qualidade.";


