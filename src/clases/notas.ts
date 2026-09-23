export class Nota {
    private id: number;
    private titulo: string;
    private contenido: string;
    private completada: boolean;

    constructor(id: number, titulo: string, contenido: string, completada: boolean=false){
        this.id = id
        this.titulo = titulo
        this.contenido = contenido
        this.completada = completada
    }
    
    getTitle() {
        return this.titulo;
    }

    setTitle(titulo: string) {
        this.titulo = titulo;
    }

    getCompleted() {
        return this.completada;
    }

    setCompleted(completada: boolean) {
        this.completada = completada;
    }

    getContenido() {
        return this.contenido;
    }

    setContenido(contenido: string) {
        this.contenido = contenido;
    }

    getId() {
        return this.id;
    }
}