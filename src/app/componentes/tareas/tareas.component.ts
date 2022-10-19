import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listasTareas: Tarea[] = []
  nombredelatarea = ""

  constructor() { }

  ngOnInit(): void {
  }
  agregarTarea(){
    //crear un objeto tarea
    console.log(this.nombredelatarea)
    
    //crear un obj tarea 
    const tarea:Tarea = {
      nombre :  this.nombredelatarea,
      estado: false
    }
    //agregar el objeto tarea 
    this.listasTareas.push(tarea)

    // recet inpout
    this.nombredelatarea = ""
   
  }
  eliminarTarea(index: number):void
  {
    this.listasTareas.splice(index,1)
    
  }

  actualixartarea(tarea:Tarea, index:number):void
  {
    this.listasTareas[index].estado = !tarea.estado
  }
}
