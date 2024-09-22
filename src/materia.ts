import { Alumno } from "./Alumno";

export class Materia{
    public name: String;
    public curso: number;

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