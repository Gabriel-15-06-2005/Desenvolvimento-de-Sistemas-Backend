import { Plano } from '../models/plano';

export class PlanosService {
    private planos: Plano[] = [];

    public criarPlano(plano: Plano): Plano {
        this.planos.push(plano);
        return plano;
    }

    public listarPlanos(): Plano[] {
        return this.planos;
    }

    public atualizarPlano(codPlano: number, planoAtualizado: Partial<Plano>): Plano | null {
        const planoIndex = this.planos.findIndex(plano => plano.codPlano === codPlano);
        if (planoIndex === -1) {
            return null;
        }
        this.planos[planoIndex] = { ...this.planos[planoIndex], ...planoAtualizado };
        return this.planos[planoIndex];
    }

    public buscarPlano(codPlano: number): Plano | null {
        return this.planos.find(plano => plano.codPlano === codPlano) || null;
    }

    public removerPlano(codPlano: number): boolean {
        const planoIndex = this.planos.findIndex(plano => plano.codPlano === codPlano);
        if (planoIndex === -1) {
            return false;
        }
        this.planos.splice(planoIndex, 1);
        return true;
    }
}