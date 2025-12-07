import readline from "readline-sync";

export function exibirSoftware() {
  console.log(`
      ==========================================================
                   💼  SISTEMA DE GESTÃO EMPRESARIAL               
      ==========================================================
      
      👨‍💻  AUTOR: Marcelo Christian Ibañez
      
      📝  DESCRIÇÃO:
      Sistema completo para gerenciamento de empresas,
      permitindo controle de dados cadastrais, funcionários
      e cálculos trabalhistas.
      
      ==========================================================
                          ⚙️  FUNCIONALIDADES               
      ==========================================================
      
      📘  INFORMAÇÕES DO SOFTWARE
          ➜ Exibir detalhes sobre o sistema e autor
      
      🧮  CALCULADORA DE SALÁRIO LÍQUIDO
           ➜ Calcula INSS, IRRF e salário líquido
           ➜ Fornece demonstrativo completo de descontos
      
      🏢  EDITAR DADOS BÁSICOS DA EMPRESA
           ➜ Nome, Razão Social, CNPJ
           ➜ Inscrição Estadual, Data de Fundação
        
      📍  EDITAR ENDEREÇO DA EMPRESA
          ➜ Logradouro, Número, Complemento
          ➜ Bairro, Cidade, Estado, CEP
        
      ☎️  EDITAR DADOS DE CONTATO
           ➜ Telefone, E-mail, Site
        
      🎯  EDITAR META ANUAL
           ➜ Define metas mensais (12 meses)
           ➜ Acompanhamento financeiro anual
        
      🧩  EDITAR ÁREAS DE ATUAÇÃO
           ➜ Cadastra até 4 áreas de atuação
      `);

  // 🔹 PAUSA PARA LEITURA
  readline.question("\nPressione ENTER para continuar...");
}
