import { Cliente, ListaDeClientes } from "./classes.js";
import { validarEmail, validarNome } from "./utils.js";

const listaClientes = document.getElementById("clientes");
const form = document.getElementById("formCliente");
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");

const lista = new ListaDeClientes();

function renderizarLista() {
    listaClientes.innerHTML = "";
    lista.listar().map((cliente, idx) => {
        const item = document.createElement("li");
        item.innerHTML = `${cliente.nome} - ${cliente.email} <button data-idx="${idx}">Remover</button>`;
        listaClientes.appendChild(item);
    });
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    if (!validarNome(nome)) {
        alert("Digite um nome válido.");
        return;
    }
    if (!validarEmail(email)) {
        alert("Digite um email válido.");
        return;
    }
    if (lista.buscarPorEmail(email)) {
        alert("Email já cadastrado!");
        return;
    }
    lista.adicionar(new Cliente(nome, email));
    nomeInput.value = "";
    emailInput.value = "";
    renderizarLista();
});

listaClientes.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
        const idx = e.target.getAttribute("data-idx");
        lista.removerPorIndice(idx);
        renderizarLista();
    }
});

// Inicializar lista
renderizarLista();
