import * as fs from "fs";
import * as path from "path";
import { Consulta } from "../models/Consultas";

export class ConsultaRepository {
    private readonly filePath = path.resolve(__dirname, "../database/consultas.json");

    getAll(): Consulta[] {
        const data = fs.readFileSync(this.filePath, "utf-8");
        const consultas: Consulta[] = JSON.parse(data); // array de usuários
        return consultas;
    }

    add(consulta: Consulta): void {
        const consultas = this.getAll(); // array
        consultas.push(consulta);            // uso de array.push
        this.saveAll(consultas);
    }

    private saveAll(consultas: Consulta[]): void {
        const data = JSON.stringify(consultas, null, 2);
        fs.writeFileSync(this.filePath, data);
    }

    removeById(id: number): void {
        const consultas = this.getAll();
        const filtered = consultas.filter(c => c.id !== id); // uso de array.filter
        this.saveAll(filtered);
    }   
}