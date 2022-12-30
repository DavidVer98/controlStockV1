import { Component, OnInit, Optional, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Reserva } from 'src/app/models/reserva.models';
import { Persona } from 'src/app/models/user.models';
import { ApiService } from '../../services/api.service';
import { BuscarclienteComponent } from '../buscarcliente/buscarcliente.component';
import { BuscarfisioterapeutaComponent } from '../buscarfisioterapeuta/buscarfisioterapeuta.component';
import { FichaClinicaModalComponent } from '../ficha-clinica-modal/ficha-clinica-modal.component';
import { ReservaModalComponent } from '../reserva-modal/reserva-modal.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import * as moment from 'moment';


type Filtro = {
  fechaDesde?: string;
  fechaHasta?: string;
  idEmpleado?: number;
  idCliente?: number;
};
;
@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css'],
})
export class ReservaComponent implements OnInit {
  reserva: Reserva[] = [];
  errorMessage = '';
  displayedColumns: string[] = [
    'fecha',
    'horaInicioCadena',
    'horaFinCadena',
    'idEmpleado',
    'idCliente',
    'observacion',
    'acciones'
  ];

  filtros: Filtro = {};
  fisioterapeuta: Persona = new Persona();
  cliente: Persona = new Persona();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource(this.reserva);
  constructor(private apiService: ApiService, private matdialog: MatDialog, @Optional() public matDialogRef: MatDialogRef<ReservaModalComponent>) {
    const today = new Date();
    const todayString = `${today.getFullYear()}${
      today.getMonth() < 9 ? '0' : ''
    }${today.getMonth() + 1}${
      today.getDate() <= 9 ? '0' : ''
    }${today.getDate()}`;


    this.filtros.fechaDesde = todayString;
    this.filtros.fechaHasta = todayString;


  }
  fisioterapeutaDialogRef!: MatDialogRef<BuscarfisioterapeutaComponent>;
  clienteDialogRef!: MatDialogRef<BuscarclienteComponent>;
  ngOnInit(): void {
    this.getReservas()
    this.filtros={}
  }

  getReservas( ) {
    this.apiService.getReservas(this.filtros).subscribe({
    next: (data) => {
      console.log('response received', data);
      this.reserva = data.lista;
      this.dataSource.data = data.lista;
    },
  });}

  buscar(): void{
    this.getReservas();
  }

  crearReserva(){
    this.matdialog.open(ReservaModalComponent, {
      data:{
        tipo: "create"
      }
      })
  }

  editarReserva(idReserva: number) {
    this.matdialog.open(ReservaModalComponent, {
      data: {
        tipo: 'edit',
        id: idReserva,
      },
    });
  }

  cancelarReserva(idReserva: number) {
    this.matdialog.open(ReservaModalComponent, {
      data: {
        tipo: 'delete',
        id: idReserva,
      },
    });
  }

  agregarFicha(idReserva: number, idEmpleado: Persona, idCliente: Persona) {
    this.apiService.editarReserva(idReserva, { flagAsistio: 'S' }).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
    this.matdialog.open(FichaClinicaModalComponent, {
      data: {
        tipo: 'create',
      },
    });
  }


  buscarFisioterapeuta() {
    this.fisioterapeutaDialogRef=this.matdialog.open(BuscarfisioterapeutaComponent, {
    });

    this.fisioterapeutaDialogRef.afterClosed().subscribe(result => {

      if(result){
        this.filtros.idEmpleado = result.idPersona
        this.fisioterapeuta=result
      }
    })
  }


  buscarCliente() {
    this.clienteDialogRef=this.matdialog.open(BuscarclienteComponent, {
    });

    this.clienteDialogRef.afterClosed().subscribe(result => {
      this.filtros.idCliente = result.idPersona
      if(result) this.cliente=result
    })
  }

  changeFechaInicio(evt:any){
    this.filtros.fechaDesde = moment(evt.value).format('YYYYMMDD')
  }

  changeFechaFin(evt:any){
    this.filtros.fechaHasta = moment(evt.value).format('YYYYMMDD')
  }

}
