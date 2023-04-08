import { Component, OnInit } from '@angular/core';
import { NotasI } from '../model/notasM';
import { ServiceService } from '../service/service.service';

const listarNotasI: NotasI[] = [];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  displayedColumns: string[] = ['Curso','C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7'];
  nota = listarNotasI;
  //notas: NotasI[] = [];

  constructor( private serviceService: ServiceService ){

  }

  ngOnInit(): void {
      this.obtenerNotas();
  }

  private obtenerNotas(){
    this.serviceService.getNotas().subscribe(rest => {
      console.log(rest)
      this.nota  = rest;
    })
  }
}
