import { Request, Response } from 'express';
import { PlanosService } from '../../../db/repositories/services/planosService';

export class PlanosController {
    private planosService: PlanosService;

    constructor() {
        this.planosService = new PlanosService();
    }

    public async listarPlanos(req: Request, res: Response): Promise<void> {
        try {
            const planos = await this.planosService.listarTodos();
            res.status(200).json(planos);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao listar planos', error });
        }
    }

    public async criarPlano(req: Request, res: Response): Promise<void> {
        try {
            const novoPlano = await this.planosService.criar(req.body);
            res.status(201).json(novoPlano);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar plano', error });
        }
    }

    public async atualizarPlano(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const planoAtualizado = await this.planosService.atualizar(id, req.body);
            res.status(200).json(planoAtualizado);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar plano', error });
        }
    }
}