import { Alumno } from "./Alumno";
import { Materia } from "./Materia";
import * as readline from 'readline-sync';

console.log('Bienvenido al Gestor de Alumnos\nOpciones:\n1º Crear Alumno\n2º Asignar Materia');
console.log('3º Listar Materias Alumno\n4º Crear Materia\n5º Listar Materias');
console.log('6º Asignar nota a Materia de un Alumno\n7º Listar Alumnos con nota');
const opc: number = readline.questionInt('Que desea hacer?: ');
