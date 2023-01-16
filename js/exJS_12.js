import { trocaSetor, trocaTurno } from "./module/module.js";

let t1Txt,
  t2Txt,
  st1Txt,
  st2Txt,
  btnConfTurno,
  btnConfSetor,
  st1,
  st2,
  temp,
  tipo1Txt,
  tipo2Txt,
  ativo,
  anterior,
  duplas;

t1Txt = document.querySelector("#func01-turno");
t2Txt = document.querySelector("#func02-turno");
st1Txt = document.querySelector("#func01-setor");
st2Txt = document.querySelector("#func02-setor");
tipo1Txt = document.querySelector("#func01-extra");
tipo2Txt = document.querySelector("#func02-extra");

duplas = {
  dupla0: ["Estela Martins", "Adonis Santos"],
  dupla1: ["Cleonildo Amarante", "Pilar Detomasi"],
  dupla2: ["Francis Albieri", "Portella Afonso Silva"],
};

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

document
  .querySelector("#btnConfTipoTurno")
  .addEventListener("click", function () {
    temp = tipo1Txt.value;
    tipo1Txt.value = tipo2Txt.value;
    document.querySelector("#info1-00 span:nth-of-type(3)").innerText =
      tipo1Txt.value;
    tipo2Txt.value = temp;
    document.querySelector("#info1-01 span:nth-of-type(3)").innerText =
      tipo2Txt.value;
  });

// Para saber se um radio está ativo e marcado.
anterior = 0;
ativo = 0;
document.querySelectorAll("input[type=radio]").forEach((n, i) => {
  n.onchange = function () {
    i == 0 ? (anterior = 1) : null;

    document
      .querySelector(`.dupla:nth-of-type(${i + 1})`)
      .classList.remove("bg-light");

    document
      .querySelector(`.dupla:nth-of-type(${anterior + 1})`)
      .classList.add("bg-light");
    anterior = i;
    ativo = i;
    document.querySelector("label");
    duplas[`dupla${i}`];
  };
});
