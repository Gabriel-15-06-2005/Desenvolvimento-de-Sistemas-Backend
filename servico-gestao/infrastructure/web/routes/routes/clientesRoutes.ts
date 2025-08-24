import { Router } from 'express';
import ClientesController from '../controllers/clientesController';

const router = Router();
const clientesController = new ClientesController();

router.get('/clientes', clientesController.listarClientes.bind(clientesController));
router.post('/clientes', clientesController.criarCliente.bind(clientesController));
router.patch('/clientes/:id', clientesController.atualizarCliente.bind(clientesController));

export default router;