export interface ClienteRepository {
    criar(cliente: any): Promise<any>;
    findById(id: number): Promise<any | null>;
    update(cliente: any): Promise<any | null>;
    delete(id: number): Promise<boolean>;
    findAll(): Promise<any[]>;
}