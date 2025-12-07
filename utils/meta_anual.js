import { empresa } from "../main.js";
import { exibirMeses } from "./exibir_meses.js";

export function exibirMetaAnual() {
  var meses_meta_anual = "";
  var totalizador = 0;

  for (let contador = 0; contador <= 11; contador++) {
    var valor_mes = empresa.meta_anual[contador];
    meses_meta_anual += `    ${exibirMeses(contador)} : R$ ${valor_mes}\n`;
    totalizador += valor_mes;
  }

  // adiciona o total no final
  meses_meta_anual += `\n    TOTAL ANUAL : R$ ${totalizador}`;

  return meses_meta_anual;
}
