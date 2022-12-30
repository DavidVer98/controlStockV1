import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PersonaModel } from 'src/app/models/persona.models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reserva-modal',
  templateUrl: './reserva-modal.component.html',
  styleUrls: ['./reserva-modal.component.css']
})
export class ReservaModalComponent implements OnInit {
  observacion= '';
  flagAsistio='';
  reserva = {};
  errorMessage = '';

  idEmpleado_send = 0;
  idCliente_send = 0;
  fechaCadena="";
  horaInicioCadena="";
  horaFinCadena="";


  personaFisioterapeuta:PersonaModel[]=[]
  personaCliente:PersonaModel[]=[]
  dataSource1 = new MatTableDataSource(this.personaFisioterapeuta);
  dataSource2 = new MatTableDataSource(this.personaCliente);
  constructor(
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: { tipo:string, id:number, observacion:Object }
  ) {}

  ngOnInit(): void {
    this.reserva=this.data.observacion




    this.apiService.getAllFisioterapeutas().subscribe({
      next: (data1) => {
        console.log('response received', data1);
        this.personaFisioterapeuta= data1.lista;
        this.dataSource1.data = data1.lista;
      },

    });
    this.apiService.getAllPaciente().subscribe({
      next: (data2) => {
        console.log('response received', data2);
        this.personaCliente = data2.lista;
        this.dataSource2.data = data2.lista;
      },
    });
  }

  crearReserva() {
    this.apiService.crearReserva(this.idCliente_send, this.idEmpleado_send, this.fechaCadena,this.horaInicioCadena, this.horaFinCadena, this.observacion).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
  }


  editarReserva() {
    this.apiService.editarReserva(this.data.id, {"observacion":this.reserva}).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
  }
  
  cancelarReserva(){
    this.apiService.cancelarReserva(this.data.id).subscribe({
      next: (data: any) => {
        console.log('Se cancelo una reserva', data);
      },
    })
  }


  onChange2($event:any) {
    console.log($event);
    this.idEmpleado_send=$event

  }
  onChange3($event:any) {
    console.log($event);
    this.idCliente_send=$event

  }

}
