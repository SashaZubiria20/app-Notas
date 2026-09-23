import { Nota } from "./clases/notas";

const listaNotas: Nota[] = [];

const nombre = document.getElementById('tituloNota') as HTMLInputElement;
const descripcion = document.getElementById('contenidoNota') as HTMLInputElement;
const btn = document.getElementById('botonAgregar') as HTMLButtonElement;
const lista = document.getElementById('listaNotas') as HTMLUListElement;

const renderizarNotas = () => {
    lista.innerHTML = '';
    const fragment = document.createDocumentFragment();

    listaNotas.forEach((nota) => {
        const li = document.createElement('li');
        const divTexto = document.createElement('div');
        const t = document.createElement('p');
        const p = document.createElement('p');
        const check = document.createElement('input');

        li.classList.add('notaItem');
        divTexto.classList.add('contenedorTexto');
        t.classList.add('tituloNota');
        p.classList.add('contenidoNota');

        t.textContent = nota.getTitle();
        p.textContent = nota.getContenido();
        check.type = 'checkbox';

        divTexto.append(t);
        divTexto.append(p);
        li.append(divTexto);
        li.append(check);
        
        fragment.append(li);
    });

    lista.append(fragment);
};



btn.addEventListener('click', () => {
    const id: number = Math.floor(Math.random() * 1000) + 1;
    const titulo = nombre.value;
    const contenido = descripcion.value;

    const nota = new Nota (id, titulo, contenido);
    listaNotas.push(nota);

    renderizarNotas();
    nombre.value = '';
    descripcion.value = '';
})