// ----------------- Formulário -----------------

import { criarContato, criarNegocio } from "./requests.js";

const inputsForm = [...document.querySelectorAll(".inputFormularioFs")];
const labelsForm = [...document.querySelectorAll(".labelInputFormularioFs")];

inputsForm.map((el, ind) => {
  // Quando o input receber foco
  el.addEventListener("focus", () => {
    labelsForm[ind].classList.add("activeLabelJS");
  });

  // Quando o input perder o foco
  el.addEventListener("blur", () => {
    if (!el.value) {
      // Se não houver texto no input
      labelsForm[ind].classList.remove("activeLabelJS");
    }
  });
});

// ----------------- Modal -----------------

// Obtendo os elementos
const modal = document.getElementById("modalForm");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];

// Quando o usuário clica no botão, abre o modal
btn.onclick = () => (modal.style.display = "block");

// Quando o usuário clica em <span> (x), fecha o modal
span.onclick = () => (modal.style.display = "none");

// Quando o usuário clica fora do modal, fecha-o
window.onclick = (event) => {
  if (event.target === modal) modal.style.display = "none";
};

// Função para fechar o modal
const fecharModal = () => (modal.style.display = "none");

// ----------------- Funções -----------------

function mascaraCelular(event) {
  var valor = event.target.value;

  valor = valor.replace(/\D/g, "");
  valor = valor.slice(0, 11);
  valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
  valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");

  event.target.value = valor;
}

// Adicionar event listener ao seu input de celular
document.getElementById("telefone").addEventListener("input", mascaraCelular);

// ----------------- Requisições -----------------

document.getElementById("myForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    // Coleta os dados do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    // Valida os campos obrigatórios
    if (!nome || !telefone) {
      alert("Nome e telefone são obrigatórios!");
      return;
    }

    // Chama função criarContato de requests.js
    const contatoCriado = await criarContato(nome, email, telefone);
    const idContato = contatoCriado.id;

    // Chama função criarNegocio de requests.js
    const negocioCriado = await criarNegocio(nome, idContato);

    console.log("Negócio criado com sucesso:", negocioCriado);
    toastr.success("Contrato solicitado com sucesso");

    fecharModal();
  } catch (error) {
    console.error("Erro ao enviar dados:", error);
    toastr.error("Erro ao solicitar contrato");

    fecharModal();
  }
});
