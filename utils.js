// utils.js
export function validarEmail(email) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}

export function validarNome(nome) {
    return nome.length > 1;
}

export async function cadastrarClienteAPI(apiUrl, cliente) {
    const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cliente)
    });
    return response.ok;
}

export async function listarClientesAPI(apiUrl) {
    const response = await fetch(apiUrl);
    if (!response.ok) return [];
    return await response.json();
}

export async function removerClienteAPI(apiUrl, id) {
    const response = await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
    return response.ok;
}