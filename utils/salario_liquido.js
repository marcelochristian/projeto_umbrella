import { calcularINSS } from "./inss.js";
import { calcularIRRF } from "./imposto_renda.js";

export function calcularSalarioLiquido(salario_bruto) {
  var desconto_INSS = calcularINSS(salario_bruto);
  var desconto_IRRF = calcularIRRF(salario_bruto);
  var salario_liquido = salario_bruto - desconto_INSS - desconto_IRRF;
  return salario_liquido;
}
