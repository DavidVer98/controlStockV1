import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PersonaModel } from 'src/app/models/persona.models';
import { SubCategoria } from 'src/app/models/subCategoria.models';
import { ApiService } from 'src/app/services/api.service';
import { Servicio9 } from 'src/app/models/servicio9';

@Component({
  selector: 'app-ficha-clinica-modal',
  templateUrl: './ficha-clinica-modal.component.html',
  styleUrls: ['./ficha-clinica-modal.component.css']
})
export class FichaClinicaModalComponent implements OnInit {

  motivoConsulta = '';
  diagnostico = '';
  observacion = '';
  idTipoProducto={};
  idEmpleado = {};
  idCliente = {};
  fichaclinica = {motivoConsulta:'',diagnostico:'',observacion:'',idEmpleado:{},idCliente:{}};
  errorMessage = '';

  idTipoProducto_send=0;
  idEmpleado_send = 0;
  idCliente_send = 0;
  personaFisioterapeuta:PersonaModel[]=[]
  personaCliente:PersonaModel[]=[]
  subCategoria:SubCategoria[]=[]
  servicio:Servicio9[]=[]

  displayedColumns: string[] = [
    'idServicio',
    'observacion',
    'acciones'

  ];

  dataSource1 = new MatTableDataSource(this.personaFisioterapeuta);
  dataSource2 = new MatTableDataSource(this.personaCliente);
  dataSource3 = new MatTableDataSource(this.subCategoria);
  dataSource4 = new MatTableDataSource(this.servicio);
  constructor(
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: { tipo: string, id: number, motivoConsulta: string, diagnostico: string, observacion: string, idTipoProducto:object, idEmpleado: object, idCliente: object   }
  ) {}

  ngOnInit(): void {
    this.fichaclinica={
      motivoConsulta:this.data.motivoConsulta,
      diagnostico:this.data.diagnostico,
      observacion:this.data.observacion,
      idEmpleado:this.data.idEmpleado,
      idCliente:this.data.idCliente
    }
    console.log("aaa", this.idEmpleado)
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
    this.apiService.getAllSubCategoria().subscribe({
      next: (data3) => {
        console.log('response received', data3);
        this.subCategoria = data3.lista;
        this.dataSource3.data = data3.lista;
      },
    });
    this.apiService.getFilteredServicio9(this.data.id).subscribe({
      next: (data4) => {
        console.log('response receivedEEEE', data4);
        console.log('response receivedEEE', this.data.id);
        this.servicio = data4.lista;
        this.dataSource4.data = data4.lista;
      },
    });
    console.log("ESTEEE",this.dataSource4);


  }

  onChange1($event:any) {
    console.log($event);
    this.idTipoProducto_send=$event

  }
  onChange2($event:any) {
    console.log($event);
    this.idEmpleado_send=$event

  }
  onChange3($event:any) {
    console.log($event);
    this.idCliente_send=$event

  }

  createFichaClinica() {
    this.apiService.createfichaClinica(this.fichaclinica.motivoConsulta, this.fichaclinica.diagnostico, this.fichaclinica.observacion, this.idTipoProducto_send, this.idEmpleado_send, this.idCliente_send).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
  }
  
  editarFichaClinica() {
    this.apiService.editarfichaClinica(this.data.id, this.fichaclinica.observacion).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
  }

  eliminarFichaClinica(){
    this.apiService.deleteOncefichaClinica(this.data.id).subscribe({
      next: (data: any) => {
        console.log('Se elimino una categoria', data);
      },
    })
  }

}
