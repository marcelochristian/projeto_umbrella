import readline from "readline-sync";
import { empresa } from "../main.js";
import { exibirAreasdeAtuacoes } from "./exibir_areas_de_atuacoes.js";
import { exibirMetaAnual } from "./meta_anual.js";

export function exibirInformacoes() {
  console.log(`
    ==========================================================
                     📊✨ CADASTRO DE EMPRESA ✨📊
    ==========================================================

    🏢 **DADOS DA EMPRESA**
    • 🏷️ Nome Fantasia: ${empresa.nome}
    • 📝 Razão Social: ${empresa.razao_social}
    • 🆔 CNPJ: ${empresa.cnpj}
    • 🔖 Inscrição Estadual: ${empresa.inscricao_estadual}
    • 📅 Data de Fundação: ${empresa.data_fundacao}

    🧭 **ÁREAS DE ATUAÇÃO**
${exibirAreasdeAtuacoes()}

    🎯 **METAS ANUAIS (POR MÊS)**
${exibirMetaAnual()}

    📍 **ENDEREÇO**
    • 🏠 ${empresa.endereco.logradouro}
    • 🏘️ Bairro: ${empresa.endereco.bairro}
    • 🌆 Cidade/UF: ${empresa.endereco.cidade} - ${empresa.endereco.estado}
    • 📨 CEP: ${empresa.endereco.cep}

    ☎️ **CONTATO**
    • 📞 Telefone: ${empresa.contato.telefone}
    • 📧 E-mail: ${empresa.contato.email}
    • 🌐 Site: ${empresa.contato.email}
`);
}
