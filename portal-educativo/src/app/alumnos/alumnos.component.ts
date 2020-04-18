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
    { id: 1, nombre: 'cedrid', apellido: 'llanos garcia', fechaNacimiento: '18/03/2020', sexo: 'M', direccion: 'Av, manco capac 627', correo: 'cedridcj@gmail.com' },
    { id: 2, nombre: 'cedrid', apellido: 'llanos garcia', fechaNacimiento: '18/03/2020', sexo: 'M', direccion: 'Av, manco capac 627', correo: 'cedridcj@gmail.com' },
    { id: 3, nombre: 'cedrid', apellido: 'llanos garcia', fechaNacimiento: '18/03/2020', sexo: 'M', direccion: 'Av, manco capac 627', correo: 'cedridcj@gmail.com' },
    { id: 4, nombre: 'cedrid', apellido: 'llanos garcia', fechaNacimiento: '18/03/2020', sexo: 'M', direccion: 'Av, manco capac 627', correo: 'cedridcj@gmail.com' },
    { id: 5, nombre: 'cedrid', apellido: 'llanos garcia', fechaNacimiento: '18/03/2020', sexo: 'M', direccion: 'Av, manco capac 627', correo: 'cedridcj@gmail.com' }
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
