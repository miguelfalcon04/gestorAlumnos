import { Alumno } from "./Alumno";
import { Materia } from "./Materia";

export class MatAlu{
    private alumno: Alumno;
    private materia: Materia;

    constructor (materia: Materia, alumno: Alumno){
        this.alumno = alumno;
        this.materia = materia;
    }

    public show(): String{
        return(`Alumno: ${this.alumno.mostrarInfo()} matriculado en ${this.materia.show()}`);
    }

}