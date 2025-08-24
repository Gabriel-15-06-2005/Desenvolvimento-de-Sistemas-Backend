// Update the import path below if the location is different, or create the file if missing
import { Pagamento } from '../../../domain/entities/models/pagamento';
// If the file does not exist, create '../../../domain/entities/models/pagamento.ts' with the Pagamento interface/class.
  
export interface Assinatura {
    codAssinatura: number;
    // Add other properties as needed
}

export class AssinaturasService {
    private assinaturas: Assinatura[] = [];
    private pagamentos: Pagamento[] = [];

    public criarAssinatura(assinatura: Assinatura): Assinatura {
        this.assinaturas.push(assinatura);
        return assinatura;
    }

    public listarAssinaturas(): Assinatura[] {
        return this.assinaturas;
    }

    public cancelarAssinatura(codAssinatura: number): boolean {
        const index = this.assinaturas.findIndex(assinatura => assinatura.codAssinatura === codAssinatura);
        if (index !== -1) {
            this.assinaturas.splice(index, 1);
            return true;
        }
        return false;
    }

    public registrarPagamento(pagamento: Pagamento): Pagamento {
        this.pagamentos.push(pagamento);
        return pagamento;
    }

    public listarPagamentos(): Pagamento[] {
        return this.pagamentos;
    }
}