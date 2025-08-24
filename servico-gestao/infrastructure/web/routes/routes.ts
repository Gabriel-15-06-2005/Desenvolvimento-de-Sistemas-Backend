import { Router } from "express";

const router = Router();

// Exemplo de rota
router.get("/", (req, res) => {
  res.send("API Serviço Gestão ativa!");
});

export default router;