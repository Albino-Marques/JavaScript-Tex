// AMBOS SÃO VALORES QUE SE TRADUZEM EM VERDADEIRO OU FALSO QUANDO EXISTE UMA ANÁLISE NO CONTEXTO BOOLEANO.

// FALSY
if (false) {
  //Retorna FALSE
}
if (null) {
  //Quando se referencia uma variável que não existe, ela normalmente retorna um null
  //Retorna FALSE
}
if (0) {
  //Retorna FALSE
}
if (NaN) {
  //Retorna FALSE
}
if ("") {
  //Retorna FALSE
}
if ("") {
  //Retorna FALSE
}
if (undefined) {
  //Quando se cria uma variável mas não se determina valor a ela, ela fica caracterizada como "undefined"
  //Retorna FALSE
}

/* =============================================================================== */
/* =============================================================================== */
/* =============================================================================== */

// TRUTHY
if (true) {
  //Retorna TRUE
}
if ([]) {
  //Retorna TRUE
}
if ({}) {
  //Retorna TRUE
}
if ("myVar") {
  //Retorna TRUE
}
if (56) {
  //Retorna TRUE
}
if (new Image()) {
  //Retorna TRUE
}
