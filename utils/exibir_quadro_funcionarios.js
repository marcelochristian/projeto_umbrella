import { empresa } from "../main.js";
import { exibirListaFuncionarios } from "./exibir_lista_funcionarios.js";

export function exibirQuadroFuncionarios() {
  var total_funcionarios = empresa.funcionarios.length - 1;

  console.log(`
    👥 QUADRO DE FUNCIONÁRIOS
    ----------------------------------------------------
    📊 Total de Funcionários: ${empresa.funcionarios.length}
    
    🥇 PRIMEIRO FUNCIONÁRIO
    👤 Nome: ${empresa.funcionarios[0].nome}
    🧰 Cargo: ${empresa.funcionarios[0].cargo}
    💰 Salário: R$ ${empresa.funcionarios[0].salario_bruto}

    🏁 ÚLTIMO FUNCIONÁRIO
    👤 Nome: ${empresa.funcionarios[total_funcionarios].nome}
    🧰 Cargo: ${empresa.funcionarios[total_funcionarios].cargo}
    💰 Salário: R$ ${empresa.funcionarios[total_funcionarios].salario_bruto}
    
    📋 LISTA COMPLETA:
    ${exibirListaFuncionarios()}
    `);
}
