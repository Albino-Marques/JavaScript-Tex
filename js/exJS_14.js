//Mascaramento de cartão de crédito.
let a = "23234544578";
let n = 4;
console.log(a.padStart(a.length + 2, "0"));
console.log(a.padEnd(a.length + 2, "0"));
console.log(a.toString().length == 1 ? `0${n}` : n);
console.log(a.toString().length == 1 ? n.toString().padStart(2, "0") : n);

let ultimosDigitos = a.slice(-4);
let mascara = ultimosDigitos.padStart(a.length, "*");
console.log(ultimosDigitos);
console.log(mascara);

document.querySelector(
  ".p1"
).innerHTML = `Número do cartão de crédito: ${a} <br> Número do cartão de crédito (somente os últimos dígitos): <b>${mascara}</b>`;

//Mascaramento de e-mail:
let email = "usuario_thebest@mail.com.br";
let antes = email.substring(0, email.indexOf("@"));
let depois = email.substring(email.length, email.indexOf("@"));
let primeirasLetras = antes.slice(antes.length - 4);
let mascaraEmail = primeirasLetras.padStart(antes.length, "*");
let emailMascarado = mascaraEmail + depois;
console.log(antes);
console.log(primeirasLetras);
console.log(depois);
console.log(mascaraEmail + depois);

document.querySelector(
  ".p3"
).innerHTML = `E-mail: ${email} <br> E-mail mascarado: <b>${emailMascarado}</b>`;

//Math
let nn = 13.99;
console.log(Math.sqrt(16)); //Raiz Quadrada
let paraBaixo = Math.floor(nn); //Arredonda para baixo.
let paraCima = Math.ceil(nn); //Arredonda para cima.
let arredonda = Math.round(nn); //Arredonda de verdade (até .49 arredonda para baixo, de .5 em diante arredonda para cima.)

let c = Math.random().toString(36).substring(2, 9);
console.log(c);

document.querySelector(".p4").innerHTML = `O seu código é <b>${c}</b>`;
