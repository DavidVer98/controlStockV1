import {Component, OnInit, ViewChild} from '@angular/core';
import {Servicio9} from "../../models/servicio9";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {HorarioExcepcion} from "../../models/horarioExcepcion";
import {ApiService} from "../../services/api.service";
import * as moment from "moment";
import {Servicio9ModalComponent} from "../servicio9-modal/servicio9-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {HorarioExcepcionModalComponent} from "../horario-excepcion-modal/horario-excepcion-modal.component";

@Component({
  selector: 'app-fisioterapeuta',
  templateUrl: './fisioterapeuta.component.html',
  styleUrls: ['./fisioterapeuta.component.css']
})
export class FisioterapeutaComponent implements OnInit {


  displayedColumns: string[] = ['empleado', 'fecha','horaApertura', 'horaCierre', 'local', 'flag'];
  columns = [
    {
      columnDef: 'fecha',
      header: 'Fecha',
      cell: (element: HorarioExcepcion) => `${element.fecha}`,
    },
    {
      columnDef: 'horaApertura',
      header: 'Hora Apertura',
      cell: (element: HorarioExcepcion) => `${element.horaApertura}`,
    },
    {
      columnDef: 'horaCierre',
      header: 'Hora Cierre',
      cell: (element: HorarioExcepcion) => `${element.horaCierre}`,
    },
    {
      columnDef: 'flag',
      header: 'Flag',
      cell: (element: HorarioExcepcion) => `${element.flagEsHabilitar}`,
    },
    {
      columnDef: 'local',
      header: 'Local',
      cell: (element: HorarioExcepcion) => `${element.idLocal.nombre}`,
    },
    {
      columnDef: 'empleado',
      header: 'Empleado',
      cell: (element: HorarioExcepcion) => `${element.idEmpleado.nombreCompleto}`,
    },

  ];
  dataSource!: MatTableDataSource<HorarioExcepcion>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  query:QueryTipo6 = new QueryTipo6()
  empleados:any

  constructor( public apiService:ApiService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.apiService.getAllHorarioExcepcion().subscribe(value => this.setData(value.lista))
    this.apiService.getAllClientes().subscribe(value => this.empleados = value.lista)
  }

  setData(data: HorarioExcepcion[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  search() {
    this.apiService.getHorarioExcepcionQueryParams(this.query.makeQuery()).subscribe(value => this.setData(value.lista))
  }

  changeFechaInicio(evt: any) {
    this.query.fechaCadena = moment(evt.value).format('YYYYMMDD')
  }

  crear() {
    this.dialog.open(HorarioExcepcionModalComponent, {
      data: {
        tipo: 'create'
      }
    })
  }

}


export class QueryTipo6 {
  constructor(public fechaCadena: string = '',
              public idEmpleado: number | null = null) {
  }

  makeQuery() {
    let obj: { [k: string]: any } = {};
    if (this.idEmpleado) {
      obj['idEmpleado'] = {"idPersona":this.idEmpleado}
    }
    if (this.fechaCadena) {
      obj['fechaCadena'] = this.fechaCadena

    }
    return JSON.stringify(obj)
  }
}
