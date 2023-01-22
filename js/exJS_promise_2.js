const btnConfirma = document.querySelector("#btnConfirma");
const nomeVisitante = document.querySelector("#nomeVisitante");
const mensagem = document.querySelector("#mensagem");
const txtConfirma = document.querySelector("#comentario")


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


document.querySelector(".sair").style.cursor = "pointer";
document.querySelector(".sair").addEventListener("click", () => {
    document.querySelector(".sair").classList.add("hide");
    document.querySelector("#box02").classList.add("hide");
    document.querySelector("#box01").classList.remove("hide");
    document.querySelector(".user").innerText = "";
});

localStorage.user ? verificaUser() : null;


function f_login(reject, resolve) {
    if (nomeVisitante.value == "") { reject(alert("Preencha o campo nome do visitante")); } else {
        resolve(mensagem.style.display = 'block',
            mensagem.textContent = `Oi ${nomeVisitante.value}, seja bem vindo! 😁🖖`,
            localStorage.setItem("user", nomeVisitante.value),
            document.querySelector('user').innerText = localStorage.getItem("user"),
            document.querySelector('.sair').classList.remove("hide"),)
    }
}

btnConfirma.onclick = function () {
    const login = new Promise(f_login)
    login.then(result => { result }).catch(erro => { erro })
};

function info_1() {
    console.log("Atenção, verifique sua conta.");
}
function info_2() {
    console.log("Atenção, hora de trocar a senha!");
}
function info_3() {
    console.log("Atenção, você ganho 100 pontos!");
}


// Promise.resolve().then(() => console.log(2), info_1())

[info_1, info_2].reduce((a, b) => a.then(b), Promise.resolve())

const aguarde = ms => new Promise((resolve) => setTimeout(resolve, ms));
aguarde(3000).then(() => info_3());