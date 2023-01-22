function f_carregaTxt(resolve, reject) {
    let req = new XMLHttpRequest()
    req.open('GET', '/src/files/arquivo1.txt')
    req.onload = function () {
        req.status = 200 ? resolve(document.querySelector('.conteudo').innerHTML = req.response) : reject('Algo de errado aconteceu. Seu arquivo não foi encontrado.')
    }
    req.send()
}

const carregaTxt = new Promise(f_carregaTxt)

carregaTxt.then(result => { result }).catch(erro => { erro })

//async - await


async function saudacao() {
    const m = await 'Olá, mundo!'
    return m
}
saudacao().then(result => { console.log(result) })

async function despedida(msg) {
    const tchau = await msg
    return tchau
}

despedida('Estou indo').then(result => { console.log(result) })

function carregaEm5S(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x)
        }, 5000)
    })
}

async function verificaCarregamento() {
    const x = await carregaEm5S('Arquivo ok.')
    console.log(x);
}

verificaCarregamento()