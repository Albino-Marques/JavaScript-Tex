const btnConfirma = document.querySelector("#btnConfirma");
const nomeVisitante = document.querySelector("#nomeVisitante");
const mensagem = document.querySelector("#mensagem");
//Aqui usa-se const pois aparentemente ela apresenta maior desempenho dos processos e serão valores que não deverão ser alterados, pois mais que sejam dinâmicos.

// console.log(btnConfirma, nomeVisitante);

// Abaixo usa-se uma função anonima através do evento "onclick" para quando for feito o click no button, a função seja disparada. Alterando o tipo de display do paragrafo com id "mensagem" para block, e imprimindo neste a mensagem através do evento "textContent".
btnConfirma.onclick = function () {
  mensagem.style.display = "block";
  mensagem.textContent = `Olá, ${nomeVisitante.value}. Tudo bem? 😁`;
};
