import { Router } from 'express';
import PlanosAtivosController from '../controllers/planosAtivosController';

const router = Router();
const planosAtivosController = new PlanosAtivosController();

// Rota para verificar a validade de uma assinatura
router.get('/:codass', planosAtivosController.verificarValidade);

export default router;