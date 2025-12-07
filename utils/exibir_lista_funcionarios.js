import { empresa } from "../main.js";

export function exibirListaFuncionarios() {
  var contador = 0;
  var numero = 1;
  var texto = "";
  for (contador; contador < empresa.funcionarios.length; contador++) {
    texto += `
    ${numero + contador}. ${empresa.funcionarios[contador].nome}
       Cargo:     ${empresa.funcionarios[contador].cargo}
       Salario:   ${empresa.funcionarios[contador].salario_bruto} \n`;
  }
  return texto;
}
