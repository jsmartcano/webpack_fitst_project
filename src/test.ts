export class Test {
    private _nombre:string;

    constructor(nombre:string) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }
}