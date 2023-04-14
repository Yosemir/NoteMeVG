import { Component, OnInit } from '@angular/core';
import { NotasI } from '../model/notasM';
import { ServiceService } from '../service/service.service';

const listarNotasI: NotasI[] = [];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['Curso', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7'];
  headers: string[] = [];



  notaTabla1: NotasI[] = [];
  headersTabla1: string[] = [];

  notaTabla2: NotasI[] = [];
  headersTabla2: string[] = [];
  notaTabla3: NotasI[] = [];
  headersTabla3: string[] = [];
  notaTabla4: NotasI[] = [];
  headersTabla4: string[] = [];
  notaTabla5: NotasI[] = [];
  headersTabla5: string[] = [];
  notaTabla6: NotasI[] = [];
  headersTabla6: string[] = [];
  notaTabla7: NotasI[] = [];
  headersTabla7: string[] = [];
  notaTabla8: NotasI[] = [];
  headersTabla8: string[] = [];
  notaTabla9: NotasI[] = [];
  headersTabla9: string[] = [];
  notaTabla10: NotasI[] = [];
  headersTabla10: string[] = [];
  notaTabla11: NotasI[] = [];
  headersTabla11: string[] = [];


  constructor(private serviceService: ServiceService) {

  }

  ngOnInit(): void {
    this.obtenerNotas();
    this.obtenerDatos();
  }

  private obtenerNotas() {
    this.serviceService.getNotas().subscribe(rest => {
     
      // Obtener las notas y headers para cada tabla
      this.notaTabla1 = rest.filter(item => item.Curso === 'TEC');
      const firstElementTabla1: Record<string, any> = this.notaTabla1[0];
      this.headersTabla1 = Object.keys(firstElementTabla1);

      this.notaTabla2 = rest.filter(item => item.Curso === 'LYF');
      const firstElementTabla2: Record<string, any> = this.notaTabla2[0];
      this.headersTabla2 = Object.keys(firstElementTabla2);

      this.notaTabla3 = rest.filter(item => item.Curso === 'OEI');
      const firstElementTabla3: Record<string, any> = this.notaTabla3[0];
      this.headersTabla3 = Object.keys(firstElementTabla3);

      this.notaTabla4 = rest.filter(item => item.Curso === 'AED');
      const firstElementTabla4: Record<string, any> = this.notaTabla4[0];
      this.headersTabla4 = Object.keys(firstElementTabla4);

      this.notaTabla5 = rest.filter(item => item.Curso === 'HEI');
      const firstElementTabla5: Record<string, any> = this.notaTabla5[0];
      this.headersTabla5 = Object.keys(firstElementTabla5);

      this.notaTabla6 = rest.filter(item => item.Curso === 'POE');
      const firstElementTabla6: Record<string, any> = this.notaTabla6[0];
      this.headersTabla6 = Object.keys(firstElementTabla6);

      this.notaTabla7 = rest.filter(item => item.Curso === 'AEC');
      const firstElementTabla7: Record<string, any> = this.notaTabla7[0];
      this.headersTabla7 = Object.keys(firstElementTabla7);

      this.notaTabla8 = rest.filter(item => item.Curso === 'CFD');
      const firstElementTabla8: Record<string, any> = this.notaTabla8[0];
      this.headersTabla8 = Object.keys(firstElementTabla8);

      this.notaTabla9 = rest.filter(item => item.Curso === 'IB1');
      const firstElementTabla9: Record<string, any> = this.notaTabla9[0];
      this.headersTabla9 = Object.keys(firstElementTabla9);

      this.notaTabla10 = rest.filter(item => item.Curso === 'PPP');
      const firstElementTabla10: Record<string, any> = this.notaTabla10[0];
      this.headersTabla10 = Object.keys(firstElementTabla10);

      this.notaTabla11 = rest.filter(item => item.Curso === 'BOLETA');
      const firstElementTabla11: Record<string, any> = this.notaTabla11[0];
      this.headersTabla11 = Object.keys(firstElementTabla11);










    });
  }

  public async obtenerDatos(): Promise<any> {
    const tiempoInicio = performance.now();
    const respuesta = await fetch('http://35.203.38.167:8080/api/v1/getNotas/get/ylermo@vallegrande.edu.pe');
    const tiempoFin = performance.now();
    const tiempoRespuesta = tiempoFin - tiempoInicio;
    console.log(`El servicio tardó ${tiempoRespuesta} milisegundos en responder`);
    return respuesta.json();
  }


}
