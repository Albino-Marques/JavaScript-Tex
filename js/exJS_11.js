import { trocaSetor, trocaTurno } from "./module/module.js";

let t1Txt, t2Txt, st1Txt, st2Txt, btnConfTurno, btnConfSetor;
let st1, st2, temp;

t1Txt = document.querySelector("#func01-turno");
t2Txt = document.querySelector("#func02-turno");
st1Txt = document.querySelector("#func01-setor");
st2Txt = document.querySelector("#func02-setor");

console.log(st1Txt);

trocaTurno(
  t1Txt,
  t2Txt,
  document.querySelector("#info1-00 span:nth-of-type(1)"),
  document.querySelector("#info1-01 span:nth-of-type(1)")
);

document.querySelector("#btnConfTurno").addEventListener("click", function () {
  trocaTurno(
    t1Txt,
    t2Txt,
    document.querySelector("#info1-00 span:nth-of-type(1)"),
    document.querySelector("#info1-01 span:nth-of-type(1)")
  );
});

trocaSetor(
  st1Txt,
  st2Txt,
  document.querySelector("#info1-00 span:nth-of-type(2)"),
  document.querySelector("#info1-01 span:nth-of-type(2)")
);

document.querySelector("#btnConfSetor").addEventListener("click", function () {
  trocaSetor(
    st1Txt,
    st2Txt,
    document.querySelector("#info1-00 span:nth-of-type(2)"),
    document.querySelector("#info1-01 span:nth-of-type(2)")
  );
});

// Para saber se um radio está ativo e marcado.
let anterior = 0;
document.querySelectorAll("input[type=radio]").forEach((n, i) => {
  n.onclick = function () {
    i == 0 ? (anterior = 1) : null;
    if (n.checked) {
      document
        .querySelector(`.dupla:nth-of-type(${i + 1})`)
        .classList.remove("bg-light");
    }
    document
      .querySelector(`.dupla:nth-of-type(${anterior + 1})`)
      .classList.add("bg-light");
    anterior = i;
  };
});
