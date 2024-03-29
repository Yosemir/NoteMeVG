import { Component, OnInit } from '@angular/core';
import { NotasI } from '../model/notasM';
import { ServiceService } from '../service/service.service';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { LoginComponent } from '../login/login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

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

  colorTECP1: any;
  user: any;



  constructor(
    private router: Router,
    private serviceService: ServiceService,
    private authService: SocialAuthService) {
      this.authService.authState.subscribe((user) => {
        this.user = user
      })

  }

  ngOnInit(): void {
    this.obtenerNotas();
  }




  obtenerNotas(): void {
    console.log(this.user.email)
    this.serviceService.getNotas(this.user.email).subscribe(rest => {
      // Obtener las notas y headers para cada tabla
      this.notaTabla1 = rest.filter(item => item.Curso === 'IPT');
      const firstElementTabla1: Record<string, any> = this.notaTabla1[0];
      this.headersTabla1 = Object.keys(firstElementTabla1);

      this.notaTabla2 = rest.filter(item => item.Curso === 'ESG');
      const firstElementTabla2: Record<string, any> = this.notaTabla2[0];
      this.headersTabla2 = Object.keys(firstElementTabla2);

      this.notaTabla3 = rest.filter(item => item.Curso === 'CUA');
      const firstElementTabla3: Record<string, any> = this.notaTabla3[0];
      this.headersTabla3 = Object.keys(firstElementTabla3);

      this.notaTabla4 = rest.filter(item => item.Curso === 'FUI');
      const firstElementTabla4: Record<string, any> = this.notaTabla4[0];
      this.headersTabla4 = Object.keys(firstElementTabla4);

      this.notaTabla5 = rest.filter(item => item.Curso === 'POO');
      const firstElementTabla5: Record<string, any> = this.notaTabla5[0];
      this.headersTabla5 = Object.keys(firstElementTabla5);

      this.notaTabla6 = rest.filter(item => item.Curso === 'OE2');
      const firstElementTabla6: Record<string, any> = this.notaTabla6[0];
      this.headersTabla6 = Object.keys(firstElementTabla6);

      this.notaTabla7 = rest.filter(item => item.Curso === 'SOV');
      const firstElementTabla7: Record<string, any> = this.notaTabla7[0];
      this.headersTabla7 = Object.keys(firstElementTabla7);

      this.notaTabla8 = rest.filter(item => item.Curso === 'BD1');
      const firstElementTabla8: Record<string, any> = this.notaTabla8[0];
      this.headersTabla8 = Object.keys(firstElementTabla8);

      this.notaTabla9 = rest.filter(item => item.Curso === 'IB2');
      const firstElementTabla9: Record<string, any> = this.notaTabla9[0];
      this.headersTabla9 = Object.keys(firstElementTabla9);

      this.notaTabla10 = rest.filter(item => item.Curso === 'PPP');
      const firstElementTabla10: Record<string, any> = this.notaTabla10[0];
      this.headersTabla10 = Object.keys(firstElementTabla10);

      /*this.notaTabla11 = rest.filter(item => item.Curso === 'BOLETA');
      const firstElementTabla11: Record<string, any> = this.notaTabla11[0];
      this.headersTabla11 = Object.keys(firstElementTabla11);*/

      console.log("Finalizo la consulta");
    });
  }



  public signOut(): void {
    this.authService.signOut();
    this.router.navigate(['/login']);
   }


}
