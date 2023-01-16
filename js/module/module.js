let t1, t2;
t1 = 8;
t2 = 4;

function trocaTurno(t1Txt, t2Txt, info0, info1) {
  t1 = t1 + t2; //12
  t2 = t1 - t2; //8
  t1 = t1 - t2; //4
  t1Txt.value = `${t1}hs`;
  info0.innerText = `${t1}hs`;
  t2Txt.value = `${t2}hs`;
  info1.innerText = `${t2}hs`;
}

function trocaSetor(st1Txt, st2Txt, setor0, setor1) {
  st2Txt.value === st1Txt.value && st1Txt.value !== "" && st2Txt.value !== ""
    ? alert("Escolha setores diferentes")
    : (setor0.innerText = st1Txt.value);
  setor1.innerText = st2Txt.value;
}

export { trocaTurno, trocaSetor };
