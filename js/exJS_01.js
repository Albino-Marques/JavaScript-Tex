console.log("Hello Wolrd!");

nivel = 2;
statusEmprego = "";

switch (nivel) {
  case 1:
    statusEmprego = "Estagiário";
    break;
  case 2:
    statusEmprego = "Efetivado";
    break;
  default:
    statusEmprego = "Em contatação";
    break;
}

console.log(statusEmprego);
