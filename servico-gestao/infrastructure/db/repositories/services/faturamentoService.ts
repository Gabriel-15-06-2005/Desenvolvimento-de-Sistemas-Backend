import { Pagamento } from '../../../../domain/entities/models/pagamento';

export class FaturamentoService {
    private pagamentos: Pagamento[] = [];

    public registrarPagamento(pagamento: Pagamento): void {
        this.pagamentos.push(pagamento);
        // Lógica adicional para registrar o pagamento, como persistir em um banco de dados
    }

    public listarPagamentos(): Pagamento[] {
        return this.pagamentos;
    }

    // Outros métodos relacionados ao faturamento podem ser adicionados aqui
}