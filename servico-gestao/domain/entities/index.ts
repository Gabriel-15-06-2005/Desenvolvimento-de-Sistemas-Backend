import express from 'express';
import { routes } from './infrastructure/web/routes/routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export * from './cliente';
export * from './plano';
export * from './assinatura';
export * from './pagamento';