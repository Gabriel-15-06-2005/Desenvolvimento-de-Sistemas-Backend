import { Router } from 'express';
import PlanosController from '../controllers/planosController';

const router = Router();
const planosController = new PlanosController();

// Rotas relacionadas a planos
router.get('/planos', planosController.listarPlanos);
router.post('/planos', planosController.criarPlano);
router.patch('/planos/:id', planosController.atualizarPlano);

export default router;