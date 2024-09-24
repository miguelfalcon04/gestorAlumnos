import { Alumno } from "./Alumno";
import { Materia } from "./Materia";
import { Matriculado } from "./Matriculado";

import * as readline from 'readline-sync';

function listarAlumnoMatricula(matAlu: Matriculado[], alumno: Alumno): string {  
    let idAlu: number = alumno.getId();  

    let aparece: number = 0;
    let matricula: string = `El Alumno ${alumno.getName()} está matriculado en: \n`;  

    for (let matriculado of matAlu) {
        if (matriculado.getAlumno().getId() == idAlu) {
            aparece++;
            matricula += `${matriculado.getMateria().getName}\n`; 
        }
    }

    if (aparece == 0) {
        matricula += `0 asignaturas\n`;
    }

    return matricula;
}

/**
 * Verifica que el indice seleccionado este dentro del array proporcionado
 * @param arr array de tipo T
 * @param i Selección de indice que se ha hecho dentro del array
 * @returns Un nuevo indice en caso de que este fuera de t.lenght()
 */
function verificarDentroArray<T extends Alumno | Materia>(arr: T[], i: number): number {
    let index = i;

    if(index-1 < 0 || index-1 >= arr.length ){
        do {
            index = readline.questionInt('Fuera de rango\nElija otro: ');
        } while (index-1 < 0 || index-1 >= arr.length);
    }

    return index;
}

function listarAlumnos(){
    console.log('Lista de Alumnos ')
    i = 1;
    for(let alu of alumnos){
        console.log(`${i}: ${alu.show()}`);
        i++;
    }
    console.log("");
}

function listarMaterias(){
    console.log('Lista de Materias')
    i = 1;
    for (let mat of materias){
        console.log(`${i}: ${mat.show()}`);
        i++;
    }
    console.log("");
}

function crearAlumno(){
    let name: String = readline.question('\nIntroduzca el nombre y apellidos del alumno: ');
    let age: number = readline.questionInt('Introduzca la edad del alumno: ');

    alumnos.push(new Alumno(name, age));

    console.log(`\n${name} añadido a la lista`)
}

function asignarMateria(){
    listarAlumnos();

    let opcAlu: number = readline.questionInt('Escoja un alumno: ');
    opcAlu = verificarDentroArray(alumnos, opcAlu);
    let aluOpc: Alumno = alumnos[opcAlu - 1];

    listarMaterias();

    let opcMat: number = readline.questionInt('Escoja una Materia: ');
    opcMat = verificarDentroArray(materias, opcMat);
    let matOpc: Materia =  materias[opcMat - 1];

    matAlu.push(new Matriculado(matOpc, aluOpc));
    console.log(`Alumno: ${aluOpc.getName()} matriculado en ${matOpc.show()}`);
}

function listarMateriasAlumno(){
    listarAlumnos();

    let opcAlu: number = readline.questionInt('Escoja un alumno: ');
    opcAlu = verificarDentroArray(alumnos, opcAlu);

    let aluOpc: Alumno = alumnos[opcAlu - 1];

    console.log(listarAlumnoMatricula(matAlu,aluOpc));
}

function crearMateria(){
    let curso: number = readline.questionInt('\nIntroduzca el curso: ');
    let materia: String = readline.question('Introduzca el nombre de la materia: ');

    materias.push(new Materia(materia,curso));

    console.log(`\n${materia} de ${curso}º añadida\n`);
}

function asignarNota() {
    listarAlumnos();
    let opcAlu: number = readline.questionInt('Escoja un alumno: ');
    opcAlu = verificarDentroArray(alumnos, opcAlu);
    let aluOpc: Alumno = alumnos[opcAlu - 1];

    let materiasAlumno: Matriculado[] = matAlu.filter(matriculado => matriculado.getAlumno().getId() === aluOpc.getId());

    if (materiasAlumno.length === 0) {
        console.log(`El alumno ${aluOpc.getName()} no está matriculado en ninguna materia.`);
        return;
    }

    console.log(`El alumno ${aluOpc.getName()} está matriculado en las siguientes materias:`);
    for (let i = 0; i < materiasAlumno.length; i++) {
        console.log(`${i + 1}: ${materiasAlumno[i].getMateria().getName}`);
    }

    let opcMat: number = readline.questionInt('A cual asignatura va a asignarle una nota?: ');
    opcMat = verificarDentroArray(materias, opcMat);
    let matriculado: Matriculado = materiasAlumno[opcMat - 1];

    let nota: number = readline.questionInt('Que nota ha sacado?: ');

    matriculado.setNota(nota);

    console.log(`Nota ${nota} asignada a ${matriculado.getMateria().getName} para el alumno ${aluOpc.getName()}.`);
}

function listarAlumnosConNota(){
    for(let alu of matAlu){
        if(alu.getNota() !== null){
            console.log(alu.showNota());
        }
    }
}

let salir = false;
let i = 0;
let alumnos: Alumno[] = [new Alumno("Miguel Falcón", 20), new Alumno("Noelia Quesada", 23), new Alumno("Pepe", 79)];
let materias: Materia[] = [new Materia("Mates",2), new Materia("Lengua",4), new Materia("Historia",3)];
let matAlu: Matriculado[] = [];


do {
    console.log('Bienvenido al Gestor de Alumnos\nOpciones:\n1º Crear Alumno\n2º Asignar Materia');
    console.log('3º Listar Materias Alumno\n4º Crear Materia\n5º Listar Materias');
    console.log('6º Asignar nota a Materia de un Alumno\n7º Listar Alumnos con nota\n8º Salir');
    let opc: number = readline.questionInt('Que desea hacer?: ');

    switch(opc){
        case 1:
            crearAlumno();
            break;

        case 2:
            asignarMateria();
            break;

        case 3:
            listarMateriasAlumno();
            break;

        case 4:
            crearMateria();
            break;

        case 5:
            listarMaterias();
            break;

        case 6:
            asignarNota();
            break;

        case 7: // Arreglar console.log
            listarAlumnosConNota();
            break;

        case 8:
            salir = true;
            break;

        default:
            console.log("\nError\n");
            break;
    }

} while (salir==false);

