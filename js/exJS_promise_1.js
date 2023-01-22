const btnConfirma = document.querySelector("#btnConfirma");
const nomeVisitante = document.querySelector("#nomeVisitante");
const mensagem = document.querySelector("#mensagem");
const txtConfirma = document.querySelector("#comentario")

//Função ocultar o forms e mostrar uma mensagem.
function verificaUser() {
    document.querySelector(".user").innerText = localStorage.getItem(`user`);
    document.querySelector("#box02").classList.remove("hide");
    document.querySelector("#box01").classList.add("hide");

    document.querySelector("#box02 p").innerText = `Oi ${localStorage.getItem(
        "user"
    )}, seja bem vindo! 😁🖖  `;
}

function f_comentario() {
    sessionStorage.setItem('salvarTxt', txtConfirma.value)
}
sessionStorage.getItem('salvarTxt') ? txtConfirma.value = sessionStorage.getItem('salvarTxt') : null
txtConfirma.addEventListener('change', f_comentario())

// function sair() {
//   document.querySelector("#box02").classList.add("hide");
//   document.querySelector("#box01").classList.remove("hide");
//   document.querySelector(".user").innerText = "";
// }

document.querySelector(".sair").style.cursor = "pointer";
document.querySelector(".sair").addEventListener("click", () => {
    document.querySelector(".sair").classList.add("hide");
    document.querySelector("#box02").classList.add("hide");
    document.querySelector("#box01").classList.remove("hide");
    document.querySelector(".user").innerText = "";
});

//Verificação se há valor em Local Storage
localStorage.user ? verificaUser() : null;

//Função para quando clicar em "confirmar" submeter o valor as variáveis.
btnConfirma.onclick = function () {
    mensagem.style.display = "block";
    document.querySelector("#box01").classList.add("hide");
    document.querySelector("#box02").classList.remove("hide");
    mensagem.textContent = `Oi ${nomeVisitante.value}, seja bem vindo 😁🖖`;
    user = localStorage.setItem("user", nomeVisitante.value);
    document.querySelector(".user").innerText = localStorage.getItem(`user`);
    document.querySelector(".sair").classList.remove("hide");
};


//PROMISES
let info = true
function principal(resolve, reject) {
    info ? resolve('Deu certo', document.querySelector('#titulo01').innerText = 'EX_17 JavaScript') : reject('Aconteceu algo errado!')
}
const minhaPromise = new Promise(principal)

minhaPromise.then(m => {
    console.log('então: ', m);
}).catch(err => {
    console.log('errp: ', err);
})