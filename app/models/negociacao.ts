export class Negociacao {
    constructor (
        private _data: Date,
        private readonly quantidade: number, 
        private readonly valor: number) {}

    get data(): Date {
        const date = new Date(this._data.getTime());
        return date;
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }
}