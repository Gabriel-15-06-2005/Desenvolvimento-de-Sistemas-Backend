import { Request, Response } from 'express';
import FaturamentoService from '../services/faturamentoService';

class FaturamentoController {
    private faturamentoService: FaturamentoService;

    constructor() {
        this.faturamentoService = new FaturamentoService();
    }

    public async registrarPagamento(req: Request, res: Response): Promise<Response> {
        try {
            const { dia, mes, ano, codAss, valorPago } = req.body;
            const resultado = await this.faturamentoService.registrarPagamento(dia, mes, ano, codAss, valorPago);
            return res.status(201).json(resultado);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default FaturamentoController;