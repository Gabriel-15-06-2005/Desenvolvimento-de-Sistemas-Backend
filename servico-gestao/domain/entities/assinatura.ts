export class Assinatura {
    codAssinatura: number;
    codCliente: number;
    codPlano: number;
    custoFinal: number;
    descricao: string;
    dataInicio: Date;
    dataFim: Date;

    constructor(
        codAssinatura: number,
        codCliente: number,
        codPlano: number,
        custoFinal: number,
        descricao: string,
        dataInicio: Date,
        dataFim: Date
    ) {
        this.codAssinatura = codAssinatura;
        this.codCliente = codCliente;
        this.codPlano = codPlano;
        this.custoFinal = custoFinal;
        this.descricao = descricao;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
    }
}