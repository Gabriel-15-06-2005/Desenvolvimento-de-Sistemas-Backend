import { Router } from 'express';
import AssinaturasController from '../controllers/assinaturasController';

const router = Router();
const assinaturasController = new AssinaturasController();

// Rotas relacionadas a assinaturas
router.post('/assinaturas', assinaturasController.criarAssinatura);
router.get('/assinaturas', assinaturasController.listarAssinaturas);
router.get('/assinaturas/:id', assinaturasController.obterAssinatura);
router.delete('/assinaturas/:id', assinaturasController.cancelarAssinatura);

export default router;