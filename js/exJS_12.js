import { trocaSetor, trocaTurno } from "./module/module.js";

let t1Txt,
  t2Txt,
  st1Txt,
  st2Txt,
  temp,
  tipo1Txt,
  tipo2Txt,
  anterior,
  duplas,
  listOn,
  infoT1,
  infoT2,
  infoSt1,
  infoSt2,
  infoStRev1,
  infoStRev2;

anterior = document.querySelector(`.dupla-0`);
var ativo = 0;

//Forms
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

function infos(ativo) {
  (infoT1 = document.querySelector(
    `.dupla-${ativo} #info1-00 span:nth-of-type(1)`
  )),
    (infoT2 = document.querySelector(
      `.dupla-${ativo} #info1-01 span:nth-of-type(1)`
    ));

  infoSt1 = document.querySelector(
    `.dupla-${ativo} #info1-00 span:nth-of-type(2)`
  );
  infoSt2 = document.querySelector(
    `.dupla-${ativo} #info1-01 span:nth-of-type(2)`
  );

  infoStRev1 = document.querySelector(
    `.dupla-${ativo} #info1-00 span:nth-of-type(3)`
  );
  infoStRev2 = document.querySelector(
    `.dupla-${ativo} #info1-01 span:nth-of-type(3)`
  );
}

infos(ativo);
trocaTurno(t1Txt, t2Txt, infoT1, infoT2, false);

document.querySelector("#btnConfTurno").addEventListener("click", function () {
  infos(ativo);
  trocaTurno(t1Txt, t2Txt, infoT1, infoT2, true);
});

trocaSetor(st1Txt, st2Txt, infoSt1, infoSt2);

document.querySelector("#btnConfSetor").addEventListener("click", function () {
  infos(ativo);
  trocaSetor(st1Txt, st2Txt, infoSt1, infoSt2);
});

tipo1Txt.value = "Semana com exceção de feriados.";
tipo2Txt.value = "Fins de semana com feriados.";
document
  .querySelector("#btnConfTipoTurno")
  .addEventListener("click", function () {
    infos(ativo);
    temp = tipo1Txt.value;
    tipo1Txt.value = tipo2Txt.value;
    tipo2Txt.value = temp;
    infoStRev1.innerText = tipo1Txt.value;
    infoStRev2.innerText = tipo2Txt.value;
  });

// Para saber se um radio está ativo e marcado. E tratar seus dados.

listOn = ["border", "border-4", "border-alert"];

document.querySelector(`.dupla-0`).classList.remove("bg-light");

document.querySelector(`.dupla-0`).classList.add(...listOn);

document.querySelectorAll("input[type=radio]").forEach((n, i) => {
  n.onchange = function () {
    document.querySelector(`.dupla-${i}`).classList.remove("bg-light");

    document.querySelector(`.dupla-${i}`).classList.add(...listOn);

    anterior.classList.remove(...listOn); // Os "..." serve para acessar todos os valores do array
    anterior.classList.add("bg-light");

    anterior = document.querySelector(`.dupla-${i}`);
    ativo = i;

    document.querySelector("label[for=func-01]").innerText =
      duplas[`dupla${i}`][0];
    document.querySelector("label[for=func-02]").innerText =
      duplas[`dupla${i}`][1];
  };
});
