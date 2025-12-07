import { calcularIRRF } from "./imposto_renda.js";
import { calcularINSS } from "./inss.js";

export function salarioFerias(salario_bruto) {
  var valor_ferias = salario_bruto / 3;
  var salario_ferias = salario_bruto + valor_ferias;
  var desconto_INSS = calcularINSS(salarioFerias);
  var desconto_IRRF = calcularIRRF(salarioFerias);
  var liquido_ferias = salario_ferias - desconto_INSS - desconto_IRRF;
  return liquido_ferias;
}
