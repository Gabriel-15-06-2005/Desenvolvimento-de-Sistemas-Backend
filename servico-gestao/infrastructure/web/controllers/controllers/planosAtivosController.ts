import { Request, Response } from 'express';
import PlanosAtivosService from '../services/planosAtivosService';

class PlanosAtivosController {
    private planosAtivosService: PlanosAtivosService;

    constructor() {
        this.planosAtivosService = new PlanosAtivosService();
    }

    public async verificarAssinaturaAtiva(req: Request, res: Response): Promise<Response> {
        const { codAss } = req.params;

        try {
            const resultado = await this.planosAtivosService.verificarAssinaturaAtiva(codAss);
            return res.status(200).json(resultado);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao verificar assinatura ativa', error });
        }
    }
}

export default PlanosAtivosController;