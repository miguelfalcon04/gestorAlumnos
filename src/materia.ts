import { Alumno } from "./Alumno";

export class Materia{
    private name: String;
    private curso: number;

    constructor(name: String, curso: number){
        this.name = name;
        this.curso = curso;
    }

    public getCurso(): number{
        return this.curso;
    }

    public get getName(): String {
        return this.name;
    }

    public show(): String{
        return(`${this.curso}º ${this.name}`)
    }

}