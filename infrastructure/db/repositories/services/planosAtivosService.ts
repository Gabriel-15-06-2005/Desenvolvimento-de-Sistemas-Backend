import { PlanoAtivo } from '../models/plano'; // Importa o modelo PlanoAtivo
import { Assinatura } from '../models/assinatura'; // Importa o modelo Assinatura

export class PlanosAtivosService {
    private planosAtivos: PlanoAtivo[] = []; // Array para armazenar planos ativos

    // Método para verificar se uma assinatura está ativa
    public verificarAssinaturaAtiva(codAssinatura: number): boolean {
        const assinatura = this.planosAtivos.find(plano => plano.codAssinatura === codAssinatura);
        return assinatura !== undefined; // Retorna true se a assinatura estiver ativa
    }

    // Método para adicionar um plano ativo
    public adicionarPlanoAtivo(planoAtivo: PlanoAtivo): void {
        this.planosAtivos.push(planoAtivo); // Adiciona o plano ativo ao array
    }

    // Método para listar todos os planos ativos
    public listarPlanosAtivos(): PlanoAtivo[] {
        return this.planosAtivos; // Retorna todos os planos ativos
    }

    // Método para remover um plano ativo
    public removerPlanoAtivo(codAssinatura: number): void {
        this.planosAtivos = this.planosAtivos.filter(plano => plano.codAssinatura !== codAssinatura); // Remove o plano ativo do array
    }
}