import * as fs from "fs";
import * as path from "path";
import { Medico } from "../models/Medicos";

export class MedicoRepository {
    private readonly filePath = path.resolve(__dirname, "../database/medicos.json");

    getAll(): Medico[] {
        const data = fs.readFileSync(this.filePath, "utf-8");
        const medicos: Medico[] = JSON.parse(data); // array de usuários
        return medicos;
    }

    add(medico: Medico): void {
        const medicos = this.getAll(); // array
        medicos.push(medico);            // uso de array.push
        this.saveAll(medicos);
    }

    private saveAll(medicos: Medico[]): void {
        const data = JSON.stringify(medicos, null, 2);
        fs.writeFileSync(this.filePath, data);
    }

    removeById(id: number): void {
        const medicos = this.getAll();
        const filtered = medicos.filter(m => m.id !== id); // uso de array.filter
        this.saveAll(filtered);
    }   
}