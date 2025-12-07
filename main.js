import readline, { question } from "readline-sync";
import { exbirMenu } from "./utils/exbir_menu.js";
import { exibirSoftware } from "./utils/exibir_software.js";
import { calculadoraSalarioLiquido } from "./utils/calculadora_salario_liquido.js";
import { exibirMeses } from "./utils/exibir_meses.js";
import { exibirInformacoes } from "./utils/exibir_informacoes.js";
import { exibirQuadroFuncionarios } from "./utils/exibir_quadro_funcionarios.js";
import { exibirDetalhamentoFuncionarios } from "./utils/exibir_detalhamento_funcionarios.js";

export var empresa = {
  nome: "",
  razao_social: "",
  cnpj: "",
  inscricao_estadual: "",
  areas_atuacao: [],
  meta_anual: [],
  data_fundacao: "",
  endereco: {
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
  },
  contato: {
    telefone: "",
    email: "",
    site: "",
  },
  funcionarios: [],
};

var entra_loop = true;
var opcao_escolhida = "";

while (entra_loop == true) {
  exbirMenu();
  opcao_escolhida = readline.questionInt("Informe a operação desejada: \n");
  if (opcao_escolhida == 0) {
    entra_loop = false;
    console.log("Encerrando sistema... Volte sempre!!!");
  } else if (opcao_escolhida == 1) {
    exibirSoftware();
  } else if (opcao_escolhida == 2) {
    var salario_bruto = readline.questionFloat("Informe o valor de salario bruto para calcular: ");
    calculadoraSalarioLiquido(salario_bruto);
  } else if (opcao_escolhida == 3) {
    empresa.nome = readline.question("Informe o nome da empresa: ");
    empresa.razao_social = readline.question("Informe o CNPJ da empresa: ");
    empresa.cnpj = readline.question("Informe o CNPJ da empresa: ");
    empresa.inscricao_estadual = readline.question("Informe a inscrição estadual da empresa: ");
    empresa.data_fundacao = readline.question("Informe a data de fundação da empresa: ");
  } else if (opcao_escolhida == 4) {
    empresa.endereco.logradouro = readline.question("Informe o logradouro da empresa: ");
    empresa.endereco.numero = readline.question("Informe o numero da empresa: ");
    empresa.endereco.complemento = readline.question("Informe o complemento do endereço: ");
    empresa.endereco.bairro = readline.question("Informe o bairro da empresa: ");
    empresa.endereco.cidade = readline.question("Informe a cidade da empresa: ");
    empresa.endereco.estado = readline.question("Informe o Estado da empresa: ");
    empresa.endereco.cep = readline.question("Informe o CEP da empresa: ");
  } else if (opcao_escolhida == 5) {
    empresa.telefone = readline.question("Informe o telefone da empresa: ");
    empresa.email = readline.question("Informe o e-mail da empresa: ");
    empresa.site = readline.question("Informe o site da empresa: ");
  } else if (opcao_escolhida == 6) {
    var contador = 0;
    for (contador; contador <= 11; contador++) {
      var meta_mensal = readline.questionFloat(`Informe o valor da meta mensal de ${exibirMeses(contador)}: `);
      empresa.meta_anual.push(meta_mensal);
    }
    console.log(empresa.meta_anual);
  } else if (opcao_escolhida == 7) {
    contador = 1;
    if (empresa.areas_atuacao.length <= 4) {
      empresa.areas_atuacao = [];
    }
    while (contador <= 4) {
      var area_atuacao = readline.question(`Informe a área de atuação nº ${contador}: `);
      empresa.areas_atuacao.push(area_atuacao);
      contador++;
    }
    console.log(`Áreas de atuações ${empresa.areas_atuacao.join(", ")} inseridas com sucesso `);
    // 🔹 PAUSA PARA LEITURA
    readline.question("\nPressione ENTER para continuar...");
  } else if (opcao_escolhida == 8) {
    exibirInformacoes();
    // 🔹 PAUSA PARA LEITURA
    readline.question("\nPressione ENTER para continuar...");
  } else if (opcao_escolhida == 9) {
    var nome = readline.question("Informe o nome do funcionário: ");
    var cargo = readline.question("Informe o cargo do funcionário: ");
    var cpf = readline.question("Informe o CPF do funcionário: ");
    var genero = readline.question("Informe o gênero do funcionário: ");
    var estado_civil = readline.question("Informe o estado civil do funcionário: ");
    var idade = readline.question("Informe a idade do fucionário: ");
    var salario_bruto = readline.questionFloat("Informe o salario bruto do funcionário: ");
    empresa.funcionarios.push({
      nome: nome,
      cargo: cargo,
      cpf: cpf,
      genero: genero,
      estado_civil: estado_civil,
      idade: idade,
      salario_bruto: salario_bruto,
    });

    exibirQuadroFuncionarios();
    // 🔹 PAUSA PARA LEITURA
    readline.question("\nPressione ENTER para continuar...");
  } else if (opcao_escolhida == 10) {
    exibirQuadroFuncionarios();
    // 🔹 PAUSA PARA LEITURA
    readline.question("\nPressione ENTER para continuar...");
  } else if (opcao_escolhida == 11) {
    exibirDetalhamentoFuncionarios();
    // 🔹 PAUSA PARA LEITURA
    readline.question("\nPressione ENTER para continuar...");
  }
}
