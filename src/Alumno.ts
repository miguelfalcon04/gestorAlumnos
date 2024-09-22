export class Alumno{
    private static contadorId: number = 0;  // Propiedad estática para llevar el conteo de IDs
    private id: number;  // ID de cada instancia
    private name: String;
    private age: number;

    constructor(name: String, age: number) {
        this.id = ++Alumno.contadorId;
        this.name = name;
        this.age = age;
    }

    public getId(): number{
        return this.id;
    }

    public getName(): String{
        return this.name;
    }

    public getAge(): number{
        return this.age;
    }

    public mostrarInfoCompleta(): void {
        console.log(`ID: ${this.id}, Nombre: ${this.name}, Edad: ${this.age}`);
    }

    public show(): string {
        return(`Nombre: ${this.name}, Edad: ${this.age}`);
    }
}