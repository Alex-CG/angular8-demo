import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {

  alumnos: Alumno[] = [
    { dni: 43586953, nombre: 'cedrid', apellido: 'llanos garcia', fechaNacimiento: '18/03/2020', sexo: 'M', direccion: 'Av, manco capac 627', correo: 'cedridcj@gmail.com' },
    { dni: 43586954, nombre: 'paul', apellido: 'llanos garcia', fechaNacimiento: '18/03/2020', sexo: 'M', direccion: 'Av, manco capac 627', correo: 'cedridcj@gmail.com' },
    { dni: 43586955, nombre: 'edgar', apellido: 'llanos garcia', fechaNacimiento: '18/03/2020', sexo: 'M', direccion: 'Av, manco capac 627', correo: 'cedridcj@gmail.com' },
    { dni: 43586956, nombre: 'alex', apellido: 'Contreras Granados', fechaNacimiento: '18/03/2020', sexo: 'M', direccion: 'Av, manco capac 627', correo: 'cedridcj@gmail.com' },
    { dni: 43586957, nombre: 'ino', apellido: 'Abanto Rueda', fechaNacimiento: '18/03/2020', sexo: 'M', direccion: 'Av, manco capac 627', correo: 'cedridcj@gmail.com' }
  ];

  form: FormGroup;
  constructor() {
    this.buildForm();

  }

  ngOnInit(): void {
  }

  private buildForm() {

    this.form = new FormGroup({
      id: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.email]),
      fechaNacimiento: new FormControl('', [Validators.required]),
      sexo: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required]),
    });

    this.form.valueChanges
      .subscribe(value => {
        console.log(value);
      });
  }
}
