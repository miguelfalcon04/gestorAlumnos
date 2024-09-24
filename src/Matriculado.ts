import { Alumno } from "./Alumno";
import { Materia } from "./Materia";

export class Matriculado{
    private alumno: Alumno;
    private materia: Materia;
    private nota: number;

    constructor (materia: Materia, alumno: Alumno, nota: number | null = null){
        this.alumno = alumno;
        this.materia = materia;
        this.nota = 0;
    }

    public getAlumno(): Alumno{
        return this.alumno;
    }

    public getMateria(): Materia{
        return this.materia;
    }

    public getNota(): number{
        return this.nota;
    }

    public setNota(nota: number): void{
        this.nota = nota;
    }

    public show(): String{
        return(`Alumno: ${this.alumno.show()} matriculado en ${this.materia.show()}`);
    }

    public showNota(): String{
        return(`Alumno ${this.alumno.show()} matriculado en ${this.materia.show()} con nota ${this.nota}`);
    }

}