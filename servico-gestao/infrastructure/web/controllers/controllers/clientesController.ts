import { Request, Response } from 'express';
import { ClientesService } from '../services/clientesService';

export class ClientesController {
    private clientesService: ClientesService;

    constructor() {
        this.clientesService = new ClientesService();
    }

    public async listarClientes(req: Request, res: Response): Promise<void> {
        try {
            const clientes = await this.clientesService.listarTodos();
            res.status(200).json(clientes);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao listar clientes', error });
        }
    }

    public async criarCliente(req: Request, res: Response): Promise<void> {
        try {
            const novoCliente = await this.clientesService.criar(req.body);
            res.status(201).json(novoCliente);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao criar cliente', error });
        }
    }

    public async atualizarCliente(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const clienteAtualizado = await this.clientesService.atualizar(id, req.body);
            res.status(200).json(clienteAtualizado);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao atualizar cliente', error });
        }
    }
}