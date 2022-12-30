import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

import {ListadoServicio9, Servicio9} from "../../models/servicio9";
import {ApiService} from "../../services/api.service";
import {MatDialog, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Servicio9ModalComponent} from "../servicio9-modal/servicio9-modal.component";
import {QueryTipo1} from "../reportes/reportes.component";
import * as moment from "moment";


@Component({
  selector: 'app-servicio9',
  templateUrl: './servicio9.component.html',
  styleUrls: ['./servicio9.component.css']
})
export class Servicio9Component implements OnInit {
  displayedColumns: string[] = ['idServicio', 'idFichaClinica', 'fecha', 'cliente', 'empleado', 'estado', 'presupuesto', 'observacion', 'acciones'];
  columns = [
    {
      columnDef: 'idServicio',
      header: 'id',
      cell: (element: Servicio9) => `${element.idServicio}`,
    },
    {
      columnDef: 'idFichaClinica',
      header: 'idFichaClinica',
      cell: (element: Servicio9) => `${element.idFichaClinica.idFichaClinica}`,
    },
    {
      columnDef: 'cliente',
      header: 'cliente',
      cell: (element: Servicio9) => `${element.idFichaClinica.idCliente.nombre} ${element.idFichaClinica.idCliente.apellido}`,
    },
    {
      columnDef: 'empleado',
      header: 'empleado',
      cell: (element: Servicio9) => `${element.idEmpleado.nombre} ${element.idEmpleado.apellido}`,
    },
    {
      columnDef: 'estado',
      header: 'estado',
      cell: (element: Servicio9) => `${element.estado}`,
    },
    {
      columnDef: 'presupuesto',
      header: 'presupuesto',
      cell: (element: Servicio9) => `${element.presupuesto}`,
    },
    {
      columnDef: 'observacion',
      header: 'observacion',
      cell: (element: Servicio9) => `${element.observacion}`,
    },
    {
      columnDef: 'fecha',
      header: 'fecha',
      cell: (element: Servicio9) => `${element.fechaHora}`,
    },
  ];
  dataSource!: MatTableDataSource<Servicio9>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  listado: ListadoServicio9 = {"lista": [], "totalDatos": 0};
  query: QueryTipo1 = new QueryTipo1()
  clientes:any

  constructor(private apiService: ApiService, private dialog: MatDialog) {
    this.apiService.getAllClientes().subscribe(value => this.clientes = value.lista)
  }

  ngOnInit(): void {
    this.getDatos()
  }

  getDatos() {
    /**
     * Traer los datos
     */
    //mostrar spinner
    this.apiService.getAllServicios9().subscribe(value => {
      console.log(value)
      this.dataSource = new MatTableDataSource(value.lista);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  //filtro de tabla
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  eliminar(id: number) {
    this.dialog.open(Servicio9ModalComponent, {
      data: {
        tipo: 'delete',
        id: id
      }
    })
  }

  crear() {
    this.dialog.open(Servicio9ModalComponent, {
      data: {
        tipo: 'create'
      }
    })
  }

  setData(data: Servicio9[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  search() {
    this.apiService.getServiciosQueryParams(this.query.makeQuery()).subscribe(value => this.setData(value.lista))
  }

  changeFechaInicio(evt: any) {
    this.query.fechaInicio = moment(evt.value).format('YYYYMMDD')
  }

  changeFechaFin(evt: any) {
    this.query.fechaFin = moment(evt.value).format('YYYYMMDD')
  }


}
