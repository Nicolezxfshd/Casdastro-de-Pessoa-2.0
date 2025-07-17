// Classes corretas para clientes
export const API_URL = "https://crudcrud.com/api/01c2abd8965e49e5bbe7844a09689ac7/clientes";
export const listaClientes = document.getElementById("clientes");
export const form = document.getElementById("formCliente");
export const nomeInput = document.getElementById("nome");
export const emailInput = document.getElementById("email");
// Classes corretas para clientes
// Classes removidas para clientes

export class Cliente {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}

export class ListaDeClientes {
    constructor() {
        this.clientes = [];
    }
    adicionar(cliente) {
        this.clientes.push(cliente);
    }
    removerPorIndice(indice) {
        this.clientes.splice(indice, 1);
    }
    listar() {
        return this.clientes;
    }
    buscarPorEmail(email) {
        return this.clientes.find(c => c.email === email);
    }
    total() {
        return this.clientes.length;
    }
}

// ...apenas as novas classes e métodos, sem duplicidade...