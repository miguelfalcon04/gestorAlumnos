class Materia{
    name: string;
    curso: string;

    constructor(name: string, curso: string){
        this.name = name;
        this.curso = curso;
    }

    public show(){
        console.log("Estoy en el curso ${curso}${name}")
    }
}