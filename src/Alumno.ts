export class Alumno{
    private static contadorId: number = 0;  // Propiedad estática para llevar el conteo de IDs
    public id: number;  // ID de cada instancia
    public name: String;
    public age: number;

    constructor(name: String, age: number) {
        this.id = ++Alumno.contadorId;
        this.name = name;
        this.age = age;
    }

    public mostrarInfoCompleta(): void {
        console.log(`ID: ${this.id}, Nombre: ${this.name}, Edad: ${this.age}`);
    }

    public mostrarInfo(): string {
        return(`Nombre: ${this.name}, Edad: ${this.age}`);
    }
}