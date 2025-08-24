export interface Cliente {
    id: number;
    nome: string;
    email: string;
    telefone: string;
}

export interface Plano {
    id: number;
    nome: string;
    custoMensal: number;
    descricao: string;
}

export interface Assinatura {
    id: number;
    clienteId: number;
    planoId: number;
    dataInicio: Date;
    dataFim: Date;
    status: 'ATIVA' | 'CANCELADA';
}

export interface Pagamento {
    id: number;
    assinaturaId: number;
    valorPago: number;
    dataPagamento: Date;
}

export type { SomeSharedType } from './someSharedType'; // Exemplo de tipo compartilhado