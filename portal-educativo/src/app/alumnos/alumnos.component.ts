import { Component, OnInit, Input } from '@angular/core';
import { Alumno } from './alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {
   alumnos: Alumno[]=[];
   alumno: Alumno = new Alumno();
  
  /*
  alumnos: Alumno[] = [
    { dni: 43586953, nombre: 'cedrid', apellido: 'llanos garcia', fechaNacimiento: '18/03/2020', sexo: 'M', direccion: 'Av, manco capac 627', correo: 'cedridcj@gmail.com' },
    { dni: 43586954, nombre: 'paul', apellido: 'llanos garcia', fechaNacimiento: '18/03/2020', sexo: 'M', direccion: 'Av, manco capac 627', correo: 'cedridcj@gmail.com' },
    { dni: 43586955, nombre: 'edgar', apellido: 'llanos garcia', fechaNacimiento: '18/03/2020', sexo: 'M', direccion: 'Av, manco capac 627', correo: 'cedridcj@gmail.com' },
    { dni: 43586956, nombre: 'alex', apellido: 'Contreras Granados', fechaNacimiento: '18/03/2020', sexo: 'M', direccion: 'Av, manco capac 627', correo: 'cedridcj@gmail.com' },
    { dni: 43586957, nombre: 'ino', apellido: 'Abanto Rueda', fechaNacimiento: '18/03/2020', sexo: 'M', direccion: 'Av, manco capac 627', correo: 'cedridcj@gmail.com' }
  ];*/

  constructor() {


  }

  ngOnInit(){
  }

  public create(): void{
    console.log("click");
    console.log(this.alumno);

    this.alumnos.push(this.alumno);
  }

  public limpiar(): void{
    this.alumno = new Alumno();
    console.log("limpiar");
  }
}
