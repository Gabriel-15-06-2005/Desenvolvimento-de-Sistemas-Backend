import { ClienteRepository } from "../../domain/repositories/clienteRepository";

export class CriarClienteUseCase {
    private repository: ClienteRepository;

    constructor(repository: ClienteRepository) {
        this.repository = repository;
    }

    public async execute(data: any): Promise<any> {
        // Implementar a lógica de negócio para criar um cliente
        // Utilize this.repository para acessar os dados
    }
}