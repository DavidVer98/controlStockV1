import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ApiService} from 'src/app/services/api.service';
import {Servicios} from '../../models/servicios.models';
import * as moment from "moment";
import {query} from "@angular/animations";
import {Servicio9} from "../../models/servicio9";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {jsPDF} from 'jspdf';
import 'jspdf-autotable';
import {UserOptions} from 'jspdf-autotable';
// @ts-ignore
import * as FileSaver from 'file-saver';

interface jsPDFWithPlugin extends jsPDF {
  autoTable: (options: UserOptions) => jsPDF;
}

interface DatosPDF {
  fecha: string
  fisioterapeuta: string
  paciente: string
  presupuesto: number
  subcategoria: string
}

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  // para pdf
  doc = new jsPDF() as jsPDFWithPlugin;
  datosPDF: DatosPDF[] = []

  //para excel
  exportList: any[] = [];

  //lista
  clientes:any
  empleados:any


  query: QueryTipo1 = new QueryTipo1()

  displayedColumns: string[] = ['Fecha', 'Fisioterapeuta', 'Paciente', 'Presupuesto', 'Subcategoría'];
  columns = [
    {
      columnDef: 'Fecha',
      header: 'Fecha',
      cell: (element: Servicio9) => `${element.fechaHora}`,
    },
    {
      columnDef: 'Fisioterapeuta',
      header: 'Fisioterapeuta',
      cell: (element: Servicio9) => `${element.idFichaClinica.idEmpleado.nombre} ${element.idFichaClinica.idEmpleado.apellido}`,
    },
    {
      columnDef: 'Paciente',
      header: 'Paciente',
      cell: (element: Servicio9) => `${element.idFichaClinica.idCliente.nombre} ${element.idFichaClinica.idCliente.apellido}`,
    },
    {
      columnDef: 'Presupuesto',
      header: 'Presupuesto',
      cell: (element: Servicio9) => `${element.presupuesto}`,
    },
    {
      columnDef: 'Subcategoría',
      header: 'Subcategoría',
      cell: (element: Servicio9) => `${element.idFichaClinica.idTipoProducto.idCategoria.descripcion}`,
    },

  ];
  dataSource!: MatTableDataSource<Servicio9>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiService: ApiService)
  {
    this.apiService.getAllClientes().subscribe(value => this.clientes = value.lista)
  }

  ngOnInit(): void {
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


  generarPDF() {
    this.procesarDatosPDF()
    console.log(this.datosPDF)
    this.dibujarPDF()
  }

  dibujarPDF() {
    this.doc.setFontSize(18)
    this.doc.text('Reporte de Servicios', 15, 15)
    this.doc.setFontSize(14)
    this.doc.autoTable(this.cabeceraOptions())
    this.doc.autoTable(this.detallesOptions())
    // @ts-ignore
    window.open(this.doc.output('bloburl', {
      filename: `reporte`
    }));
  }

  procesarDatosPDF() {
    let aux: DatosPDF
    for (let servicio of this.dataSource.filteredData) {
      aux = {
        fecha: servicio.fechaHora,
        fisioterapeuta: `${servicio.idFichaClinica.idEmpleado.nombre} ${servicio.idFichaClinica.idEmpleado.apellido}`,
        paciente: `${servicio.idFichaClinica.idCliente.nombre} ${servicio.idFichaClinica.idCliente.apellido}`,
        presupuesto: servicio.presupuesto,
        subcategoria: `${servicio.idFichaClinica.idTipoProducto.idCategoria.descripcion}`
      }
      this.datosPDF.push(aux)
    }
  }

  cabeceraOptions() {
    return {
      body: [
        {titulo: 'Fecha Inicio', dato: this.query.fechaInicio},
        {titulo: 'Fecha Fin', dato: this.query.fechaFin},
        {titulo: 'idEmpleado', dato: this.query.idEmpleado},
        {titulo: 'idCliente', dato: this.query.idCliente},
      ],
      startY: 25,
    }
  }

  detallesOptions() {
    return {
      columns: [
        {dataKey: 'fecha', header: 'Fecha'},
        {dataKey: 'fisioterapeuta', header: 'Fisioterapeuta'},
        {dataKey: 'paciente', header: 'Paciente'},
        {dataKey: 'presupuesto', header: 'Presupuesto'},
        {dataKey: 'subcategoria', header: 'Subcategoría'},
      ],
      body: this.datosPDF as any
    }
  }

  exportExcel() {

    let cabecera = [
      {'titulo': 'Fecha Inicio', 'dato': this.query.fechaInicio},
      {'titulo': 'Fecha Fin', 'dato': this.query.fechaFin},
      {'titulo': 'idEmpleado', 'dato': this.query.idEmpleado},
      {'titulo': 'idCliente', 'dato': this.query.idCliente}
    ]

    this.procesarDatosPDF()
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.datosPDF);
      xlsx.utils.sheet_add_json(worksheet, cabecera, {origin: "G1"});
      const workbook = {Sheets: {'data': worksheet}, SheetNames: ['data']};
      const excelBuffer: any = xlsx.write(workbook, {bookType: 'xlsx', type: 'array'});
      this.saveAsExcelFile(excelBuffer, "reporte");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_' + new Date().getTime() + EXCEL_EXTENSION);
  }


}

export class QueryTipo1 {
  constructor(public fechaInicio: string = '',
              public fechaFin: string = '',
              public idEmpleado: number | null = null,
              public idCliente: number | null = null) {
  }

  makeQuery() {
    let obj: { [k: string]: any } = {};
    obj['fechaDesdeCadena'] = this.fechaInicio
    obj['fechaHastaCadena'] = this.fechaFin
    if (this.idEmpleado) {
      obj['idEmpleado'] = this.idEmpleado
    }
    if (this.idCliente) {
      obj['idFichaClinica'] = {"idCliente": {"idPersona": this.idCliente}}

    }
    if (this.idEmpleado) {
      obj['idEmpleado'] = {"idPersona": this.idEmpleado}

    }
    return JSON.stringify(obj)
  }
}
