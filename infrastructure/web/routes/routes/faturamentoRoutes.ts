import { Router } from 'express';
import FaturamentoController from '../controllers/faturamentoController';

const router = Router();
const faturamentoController = new FaturamentoController();

// Rota para registrar um pagamento
router.post('/registrarpagamento', faturamentoController.registrarPagamento.bind(faturamentoController));

export default router;