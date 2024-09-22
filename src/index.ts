import { Alumno } from "./Alumno";
import { Materia } from "./Materia";
import { MatAlu } from "./MatAlu";

import * as readline from 'readline-sync';

let salir = false;
let alumnos: Alumno[] = [];
let materias: Materia[] = [];
let matAlu: MatAlu[] = [];

do {
    console.log('Bienvenido al Gestor de Alumnos\nOpciones:\n1º Crear Alumno\n2º Asignar Materia');
    console.log('3º Listar Materias Alumno\n4º Crear Materia\n5º Listar Materias');
    console.log('6º Asignar nota a Materia de un Alumno\n7º Listar Alumnos con nota\n8º Salir');
    let opc: number = readline.questionInt('Que desea hacer?: ');


    switch(opc){
        // Crear ALumno
        case 1:
            let name: String = readline.question('\nIntroduzca el nombre y apellidos del alumno: ');
            let age: number = readline.questionInt('Introduzca la edad del alumno: ');

            alumnos.push(new Alumno(name, age));

            console.log(`\n${name} añadido a la lista`)
            break;

        // Asignar Materia
        case 2:
            console.log('Lista de Alumnos ')
            let i = 1;
            for(let alu of alumnos){
                console.log(`\n${i}: ${alu.mostrarInfo()}`);
                i++;
            }

            let opcAlu: number = readline.questionInt('Escoja un alumno: ');
            let aluOpc: Alumno = alumnos[opcAlu - 1];

            console.log('Lista de Materias')
            i = 1;
            for (let mat of materias){
                console.log(`\n${i}: ${mat.show()}`);
                i++;
            }

            let opcMat: number = readline.questionInt('Escoja una Materia: ');
            let matOpc: Materia =  materias[opcMat - 1];

            matAlu.push(new MatAlu(matOpc, aluOpc));
            break;

        // Listar Materias Alumno
        case 3:
            
            break;

        // Crear Materia
        case 4:
            let curso: number = readline.questionInt('\nIntroduzca el curso: ');
            let materia: String = readline.question('Introduzca el nombre de la materia: ');

            materias.push(new Materia(materia,curso));

            console.log(`\n${materia} de ${curso}º añadida\n`);
            break;

        // Listar Materias
        case 5:
            for (let mat of materias){
                console.log(mat.show());
            }
            break;

        // Asignar nota a Materia de un Alumno
        case 6:
            break;

        // Listar Alumnos con nota
        case 7:
            break;

        // Salir
        case 8:
            salir = true;
            break;

        default:
            console.log("\nError\n");
            break;
    }

} while (salir==false);

