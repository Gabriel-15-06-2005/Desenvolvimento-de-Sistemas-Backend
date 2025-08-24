export class Plano {
    id: number;
    nome: string;
    custoMensal: number;
    descricao: string;

    constructor(id: number, nome: string, custoMensal: number, descricao: string) {
        this.id = id;
        this.nome = nome;
        this.custoMensal = custoMensal;
        this.descricao = descricao;
    }
}