import readline from "readline-sync";
import { calcularIRRF } from "./imposto_renda.js";
import { calcularINSS } from "./inss.js";
import { calcularSalarioLiquido } from "./salario_liquido.js";
import { calcularFGTS } from "./fgts.js";

export function calculadoraSalarioLiquido(salario_bruto) {
  var valor_FGTS = calcularFGTS(salario_bruto);
  var desconto_INSS = calcularINSS(salario_bruto);
  var desconto_IRRF = calcularIRRF(salario_bruto);
  var salario_liquido = calcularSalarioLiquido(salario_bruto);

  console.log(`
    =============================================================
                🧮 CALCULADORA DE SALÁRIO LÍQUIDO
    =============================================================
    
    💵 Salário bruto informado: R$ ${salario_bruto.toFixed(2)}

    =============================================================
                📄 DEMONSTRATIVO DE PAGAMENTO
    =============================================================
    
    💰 Salário Bruto:           R$ ${salario_bruto.toFixed(2)}
    🏦 Valor FGTS   :           R$ ${valor_FGTS.toFixed(2)}
    📉 Desconto INSS:           R$ ${desconto_INSS.toFixed(2)}
    📉 Desconto IRRF:           R$ ${desconto_IRRF.toFixed(2)}  
    -------------------------------------------------------------
    🟢 Salário Líquido:         R$ ${salario_liquido.toFixed(2)}
    
     =============================================================
                        🧾 FÓRMULA DO CÁLCULO
    =============================================================
    
    🧩 Salário Líquido = Salário Bruto - INSS - IRRF
    
    🧩 Salário Líquido = ${salario_bruto.toFixed(2)} - ${desconto_INSS.toFixed(2)} - ${desconto_IRRF.toFixed(2)}`);

  // 🔹 PAUSA PARA LEITURA
  readline.question("\n⏸️ Pressione ENTER para continuar...");
}
