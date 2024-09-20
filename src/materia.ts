import { Alumno } from "./Alumno";

export class Materia{
    private name: string;
    private curso: string;

    constructor(name: string, curso: string){
        this.name = name;
        this.curso = curso;
    }

    public getCurso(): string{
        return this.curso;
    }

    public get getName(): string {
        return this.name;
    }

    public show(){
        console.log(`Estoy en el curso ${this.curso}, materia: ${this.name}`)
    }
}