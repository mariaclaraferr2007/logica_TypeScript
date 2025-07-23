import * as fs from "fs";
import * as path from "path";
import { Paciente } from "../models/Paciente";

export class PacienteRepository {
    private readonly filePath = path.resolve(__dirname, "../database/pacientes.json");

    getAll(): Paciente[] {
        const data = fs.readFileSync(this.filePath, "utf-8");
        const pacientes: Paciente[] = JSON.parse(data); // array de usuários
        return pacientes;
    }

    add(paciente: Paciente): void {
        const pacientes = this.getAll(); // array
        pacientes.push(paciente);            // uso de array.push
        this.saveAll(pacientes);
    }

    private saveAll(pacientes: Paciente[]): void {
        const data = JSON.stringify(pacientes, null, 2);
        fs.writeFileSync(this.filePath, data);
    }

    removeById(id: number): void {
        const pacientes = this.getAll();
        const filtered = pacientes.filter(p => p.id !== id); // uso de array.filter
        this.saveAll(filtered);
    }   
}