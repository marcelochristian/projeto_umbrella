import { empresa } from "../main.js";

export function exibirAreasdeAtuacoes() {
  var contador = 0;
  var texto = "";
  for (contador; contador <= 3; contador++) {
    texto = texto + 1;
    texto += `    ➜ ${empresa.areas_atuacao[contador]}\n`;
  }
  return texto;
}
