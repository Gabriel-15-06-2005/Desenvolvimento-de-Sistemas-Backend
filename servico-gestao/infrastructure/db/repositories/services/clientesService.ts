import { Cliente } from '../models/cliente';

export class ClientesService {
    private clientes: Cliente[] = [];

    public criarCliente(cliente: Cliente): Cliente {
        this.clientes.push(cliente);
        return cliente;
    }

    public listarClientes(): Cliente[] {
        return this.clientes;
    }

    public atualizarCliente(codCli: number, clienteAtualizado: Partial<Cliente>): Cliente | null {
        const clienteIndex = this.clientes.findIndex(cliente => cliente.codCli === codCli);
        if (clienteIndex === -1) {
            return null;
        }
        this.clientes[clienteIndex] = { ...this.clientes[clienteIndex], ...clienteAtualizado };
        return this.clientes[clienteIndex];
    }

    public buscarCliente(codCli: number): Cliente | null {
        return this.clientes.find(cliente => cliente.codCli === codCli) || null;
    }
}

export interface Cliente {
    codCli: number;
    nome: string;
    // Adicione outros campos conforme necessário
}