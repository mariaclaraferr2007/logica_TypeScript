export class Consulta{
    constructor(
        public id: number,
        public pacienteId: number,
        public medicoId: number,
        public data: number,
        public receita: string,
    ) {}
}
