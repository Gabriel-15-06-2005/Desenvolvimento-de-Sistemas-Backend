import { Request, Response } from 'express';
import { AssinaturasService } from '../services/assinaturasService';

export class AssinaturasController {
    private assinaturasService: AssinaturasService;

    constructor() {
        this.assinaturasService = new AssinaturasService();
    }

    public async criarAssinatura(req: Request, res: Response): Promise<Response> {
        try {
            const novaAssinatura = await this.assinaturasService.criarAssinatura(req.body);
            return res.status(201).json(novaAssinatura);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    public async listarAssinaturas(req: Request, res: Response): Promise<Response> {
        try {
            const assinaturas = await this.assinaturasService.listarAssinaturas();
            return res.status(200).json(assinaturas);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    public async cancelarAssinatura(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            await this.assinaturasService.cancelarAssinatura(id);
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}