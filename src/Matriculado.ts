import { Alumno } from "./Alumno";
import { Materia } from "./Materia";

export class Matriculado{
    private alumno: Alumno;
    private materia: Materia;

    constructor (materia: Materia, alumno: Alumno){
        this.alumno = alumno;
        this.materia = materia;
    }

    public getAlumno(): Alumno{
        return this.alumno;
    }

    public getMateria(): Materia{
        return this.materia;
    }

    public show(): String{
        return(`Alumno: ${this.alumno.show()} matriculado en ${this.materia.show()}`);
    }

    public listar(matAlu: Matriculado[], alumno: Alumno): String{
        let idAlu: number = alumno.getId();

        let aparece: number = 0;
        let matricula: String = `El Alumno ${alumno.getName()} esta matriculado en: \n`;

        for(let alumno of matAlu){
            if(alumno.getAlumno().getId() == idAlu){
                aparece++;
                matricula+= `${alumno.getMateria().getName}\n`;
            }
        }

        if(aparece==0){
            matricula += `0 asignaturas \n`;
        }else{
        }

        return matricula;
    }

}