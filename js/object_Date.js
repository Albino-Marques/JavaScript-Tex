// Objec Date()

/*
[x] n=new Date('Dezembro 22, 1980 03:04:55')
[x] n=new Date('December 22, 1980 03:04:55')
[x] x=new Date('1980-12-17T04:06:22')
[x] y=new Date('1980,11,17')
[x] y=new Date('1980,12,17')
[x] y=new Date('1980,12,18')
[x] w=new Date()
[x] w.getTime()
[x] getMonth() 0 - 11 (Onde 0 é Janeiro e 11 é dezembro.)
[x] getDate() 0 - 6 (Onde 0 é Domindo e 6 é sábado)
[x] Date.now

[] padStar(), padEnd()

*/

let n = new Date("Dezembro 22, 1980 03:04:55");
let n1 = new Date("December 22, 1980 03:04:55");
let x = new Date("1980-12-17T05:12:32");
let y = new Date("1980,12,14");
let tempo = new Date();

// console.log(n);
// console.log(n1);
// console.log(x);
// console.log(y);
// console.log(tempo);
// console.log(tempo.getDate());
// console.log(tempo.gettime());

// function dataDeHoje() {
//   let hoje = new Date();
//   let diaDaSemana = hoje.getDate();
//   let diaDoMes = hoje.getDay().toString;
//   diaDoMes = diaDoMes.length === 1 ? `0${diaDoMes}` : diaDoMes;
//   let mesDoAno = hoje.getMonth();
//   mesDoAno = mesDoAno.length == 1 ? `0${mesDoAno}` : mesDoAno;
//   let anotAtual = hoje.getFullYear();
//   let dataAtual = `${diaDoMes}/${mesDoAno}/${anotAtual}`;
// }

console.log(dataDeHoje());

meses = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];
semana = ["Seg", "Ter", "Quar", "Qui", "Sex", "Sáb", "Dom"];

// function dataDeHoje() {
//   let hoje = new Date();
//   let diaDaSemana = hoje.getDay();
//   let diaDoMes = hoje.getDay().toString;
//   diaDoMes = diaDoMes.length === 1 ? `0${diaDoMes}` : diaDoMes;
//   let mesDoAno = hoje.getMonth();
//   mesDoAno = mesDoAno.length == 1 ? `0${mesDoAno}` : mesDoAno;
//   let anotAtual = hoje.getFullYear();
//   let dataAtual = `São Paulo, ${diaDoMes}, ${semana[diaDaSemana]} de ${meses[mesDoAno]} de ${anotAtual}`;
//   return dataAtual;
// }

function inicio() {
  let tempo = new Date();
  inicio = tempo.getTime();
  console.log(inicio);
  return inicio;
}

let tempoInicial = inicio();

document.querySelector("#btnFim").addEventListener("click", () => {
  let fim = Date.now();
  let tempoDecorrido = fin - tempoInicial;
  document.querySelector(".p3").innText = tempoDecorrido;
});
