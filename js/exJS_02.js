console.log("Hello World!");

/*
A forma mais fácil de gerenciar dados do HTML com JavaScript é atribuir os valores que deseja-se modificar ou refenciar a uma variável, ou várias.
*/

let titulo01 = document.getElementById("titulo01"); //Referenciando através do ID, busca elemento único, pois id's são únicas.
let titulo01_a = document.getElementsByClassName("titulo"); //Referenciando através da Classe, busca a coleção de elementos, pois classes podem se aplicar a vários.
let titulo01_b = document.querySelector("h2"); //Referenciando através do QuerySelector, limita pois não pode ser atribuído um índice numérico. Também causa um problema o fato de essa referência pegar somente o primeiro item que encontrar dentro da hierarquia do HTML no documento para poder usar. Ou seja, se possuír mais de um h2, só pegará o primeiro.
let titulo01_c = document.querySelectorAll("h2"); //Referenciando através do QuerySelectorAll, é necessário informar um índice numérico caso queira um item específico. Irá, assim como no caso das referência por "getElementByClassName", pegar todas os elementos com a correspondência informada.

console.log(titulo01); //Dessa forma será impresso somente o elemento referente a id.
console.log(titulo01_a); //Dessa forma será impresso uma coleção dos elementos com essa classe.
console.log(titulo01_a[0]); //Dessa forma será impresso o item de índice zero dentro da coleção de items que possuem a classe titulo. Como um array.
console.log(titulo01_b); //Dessa forma será impreeso somente o primeiro item H2 do documento HTML encontrado.
console.log(titulo01_b.innerHTML); // O "innerHTML" funciona para podermos pegar os dados de determinado item no documento e imprimi-lo, seja no console, seja no documento mesmo, também podendo alterá-los.
console.log(titulo01_a[0].innerHTML); // A saída aqui será EX_02 JavaScript, pois através do seletor de classe terá toda a colection da mesma, e selecionando através do índice, é possível específicar a posição do mesmo no HMTL.
console.log(titulo01_a[1].innerHTML); // A saída aqui será EX_02_1 JavaScript, pois através do seletor de classe terá toda a colection da mesma, e selecionando através do índice, é possível específicar a posição do mesmo no HMTL.
console.log(titulo01_c[0].innerHTML); // A saída aqui será EX_02 JavaScript, pois através do seletor "querySelectorAll" terá toda a colection da mesma, e selecionando através do índice, é possível específicar a posição do mesmo no HMTL.
console.log(titulo01_c[1].innerHTML); // A saída aqui será EX_02_1 JavaScript, pois através do seletor "querySelectorAll" terá toda a colection da mesma, e selecionando através do índice, é possível específicar a posição do mesmo no HMTL.

titulo01_c[1].innerHTML = "Aula de lógica."; // Aqui será impresso na tela o dado "Aula de lógica" no segundo elemento h2 no html que for encontrado em decorrência do uso de seletor escolhido.
titulo01_c[1].style = "color:brown"; // Como é possível ver aqui, é possível também alterar os estilos do HTML com o JavaPcript, entretanto. Desta forma, o estilo fica inline.

/* Importante salientar que o innerHTML não altera o código fonte da página, somente altera o status no momento da execução. Agente externo vizualizará somente o que está renderizado no HTML, as máquinas verão somente isso também. Só o usuário verá o que foi alterado com o JavaScript.*/
