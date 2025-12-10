import { empresa } from "../main.js";
import { calcularFGTS } from "./fgts.js";
import { calcularIRRF } from "./imposto_renda.js";
import { calcularINSS } from "./inss.js";

export function exibirDetalhamentoFuncionarios() {
  var contador = 0;
  var numero = 1;
  var texto = "";
  var totalizador_salario_bruto = 0;
  var totalizador_desconto_INSS = 0;
  var totalizador_desconto_IRRF = 0;
  var totalizador_liquido_a_pagar = 0;
  var totalizador_valor_FGTS = 0;

  texto += `
  ---------------------------------------------------    
  📋 **DETALHAMENTO POR FUNCIONÁRIOS**
  ---------------------------------------------------`;

  for (contador; contador < empresa.funcionarios.length; contador++) {
    var salario_bruto = empresa.funcionarios[contador].salario_bruto;
    var valor_FGTS = calcularFGTS(salario_bruto);
    var desconto_INSS = calcularINSS(salario_bruto);
    var desconto_IRRF = calcularIRRF(salario_bruto);
    var salario_liquido = salario_bruto - desconto_INSS - desconto_IRRF;
    var salario_ferias = salario_liquido / 3 + salario_liquido;

    texto += `
    ${numero + contador}. 👤 ${empresa.funcionarios[contador].nome}
        🧰 Cargo:     ${empresa.funcionarios[contador].cargo}
        
        💰 Salário Bruto:     R$ ${empresa.funcionarios[contador].salario_bruto.toFixed(2)}
        📉 Desconto INSS:     R$ ${desconto_INSS.toFixed(2)}
        📉 Desconto IRRF:     R$ ${desconto_IRRF.toFixed(2)}
        ================================================= 
        🟢 Salário Líquido:   R$ ${salario_liquido.toFixed(2)}
        🏦 FGTS (8%):         R$ ${valor_FGTS.toFixed(2)}
        🌴 Férias (liq + 1/3): R$ ${salario_ferias.toFixed(2)}\n`;

    totalizador_salario_bruto += salario_bruto;
    totalizador_valor_FGTS += valor_FGTS;
    totalizador_desconto_INSS += desconto_INSS;
    totalizador_desconto_IRRF += desconto_IRRF;
    totalizador_liquido_a_pagar += totalizador_salario_bruto - totalizador_desconto_INSS - totalizador_desconto_IRRF;
  }

  texto += `
    ====================================================== 
    📊 **RESUMO TOTAL DA FOLHA**
    ======================================================
    💵 Total Salários Brutos: R$ ${totalizador_salario_bruto.toFixed(2)}
    🏛️ Total Desconto INSS:   R$ ${totalizador_desconto_INSS.toFixed(2)}
    🧾 Total Desconto IRRF:   R$ ${totalizador_desconto_IRRF.toFixed(2)}
    ======================================================
    🟢 Total Líquido a Pagar: R$ ${totalizador_liquido_a_pagar.toFixed(2)}
    
    ℹ️ **INFORMAÇÕES ADICIONAIS**
    🏦 Total FGTS (8%): R$ ${totalizador_valor_FGTS.toFixed(2)}
     `;
  //return texto;
  console.log(texto);
}
