import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonaModel } from 'src/app/models/persona.models';
import { ApiService } from 'src/app/services/api.service';
import { AppModule } from '../../app.module';


@Component({
  selector: 'app-paciente-modal',
  templateUrl: './paciente-modal.component.html',
  styleUrls: ['./paciente-modal.component.css']
})
export class PacienteModalComponent implements OnInit {

  paciente_data = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    ruc: '',
    cedula: '',
    tipoPersona: '',
    fechaNacimiento: ''
  };
  paciente:PersonaModel=new PersonaModel;
  errorMessage = '';


  constructor(private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: { tipo: string, id: number, paciente_data: PersonaModel }
  ) { };

  ngOnInit(): void {
    console.log(typeof (this.paciente))
    console.log(typeof (this.data.paciente_data))
    this.paciente = this.data.paciente_data;
    console.log('---',this.data.paciente_data);

  };

  crearPaciente() {
    this.apiService.createPaciente(this.paciente_data.nombre, this.paciente_data.apellido, this.paciente_data.email,
      this.paciente_data.telefono, this.paciente_data.ruc, this.paciente_data.cedula, this.paciente_data.tipoPersona,
      this.paciente_data.fechaNacimiento).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(this.paciente_data);
          this.errorMessage = error.message;
          console.error('There was an error!', error.message);
        },
      });
  }
  eliminarPersona() {
    this.apiService.deleteOncePersona(this.data.id).subscribe({
      next: (data: any) => {
        console.log('Se elimino una categoria', data);
      },
    })
  }
  editarPersona() {

    this.apiService.editarPaciente(this.data.id, this.paciente.nombre, this.paciente.apellido, this.paciente.email,
      this.paciente.telefono, this.paciente.ruc, this.paciente.cedula, this.paciente.tipoPersona,
      this.paciente.fechaNacimiento).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
        },
      });
  }




}
