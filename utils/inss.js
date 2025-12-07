export function calcularINSS(salario_bruto) {
  var desconto_INSS = 0;
  if (salario_bruto <= 1518.0) {
    desconto_INSS = salario_bruto * 0.075 - 0.0;
    return desconto_INSS;
  } else if (salario_bruto >= 1518.01 && salario_bruto <= 2793.88) {
    desconto_INSS = salario_bruto * 0.09 - 22.77;
    return desconto_INSS;
  } else if (salario_bruto >= 2793.89 && salario_bruto <= 4190.83) {
    desconto_INSS = salario_bruto * 0.12 - 106.59;
    return desconto_INSS;
  } else if (salario_bruto >= 4190.84 && salario_bruto <= 8157.41) {
    desconto_INSS = salario_bruto * 0.14 - 190.4;
    return desconto_INSS;
  } else {
    desconto_INSS = 951.62;
    return desconto_INSS;
  }
}
