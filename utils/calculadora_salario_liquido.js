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
                CALCULADORA DE SALARIO LIQUIDO
    =============================================================
    
    Salario bruto informado: R$ ${salario_bruto.toFixed(2)}

    =============================================================
                DEMONSTRATIVO DE PAGAMENTO
    =============================================================
    
    Salario Bruto:           R$ ${salario_bruto.toFixed(2)}
    Valor FGTS   :           R$ ${valor_FGTS.toFixed(2)}
    Desconto INSS:           R$ ${desconto_INSS.toFixed(2)}
    Desconto IRRF:           R$ ${desconto_IRRF.toFixed(2)}  
    -------------------------------------------------------------
    Salario Liquido:         R$ ${salario_liquido.toFixed(2)}
    
     =============================================================
                        FORMULA DO CALCULO
    =============================================================
    
    Salario Liquido = Salario Bruto - INSS - IRRF
    
    Salario Liquido = ${salario_bruto.toFixed(2)} - ${desconto_INSS.toFixed(2)} - ${desconto_IRRF.toFixed(2)}`);

  // 🔹 PAUSA PARA LEITURA
  readline.question("\nPressione ENTER para continuar...");
}
