

import { Cliente, API_URL, listaClientes, form, nomeInput, emailInput } from "./classes.js";
import { validarEmail, validarNome, cadastrarClienteAPI, listarClientesAPI, removerClienteAPI } from "./utils.js";


async function renderizarLista() {
    const clientes = await listarClientesAPI(API_URL);
    listaClientes.innerHTML = "";
    clientes.map((cliente) => {
        const item = document.createElement("li");
        item.innerHTML = `${cliente.nome} - ${cliente.email} <button data-id="${cliente._id}">Remover</button>`;
        listaClientes.appendChild(item);
    });
}

form.addEventListener("submit", async function(e) {
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
    // Verifica se já existe email cadastrado na API
    const clientes = await listarClientesAPI(API_URL);
    if (clientes.find(c => c.email === email)) {
        alert("Email já cadastrado!");
        return;
    }
    await cadastrarClienteAPI(API_URL, new Cliente(nome, email));
    nomeInput.value = "";
    emailInput.value = "";
    renderizarLista();
});

listaClientes.addEventListener("click", async function(e) {
    if (e.target.tagName === "BUTTON") {
        const id = e.target.getAttribute("data-id");
        await removerClienteAPI(API_URL, id);
        renderizarLista();
    }
});

// Inicializar lista
renderizarLista();
