import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { PersonaModel } from '../../models/persona.models';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { PacienteModalComponent } from '../paciente-modal/paciente-modal.component';
import {Servicio9} from "../../models/servicio9";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  paciente: PersonaModel[] = [];

  displayedColumns: string[] = [
    'idPersona',
    'nombre',
    'apellido',
    'email',
    'telefono',
    'ruc',
    'cedula',
    'tipoPersona',
    'fechaNacimiento',
    'acciones'
  ];

  dataSource = new MatTableDataSource(this.paciente);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private apiService: ApiService, private matdialog: MatDialog) { }

  ngOnInit(): void {
    this.apiService.getAllPaciente().subscribe({
      next: (data) => {
        console.log('response received', data);
        this.paciente = data.lista;
        this.dataSource.data = data.lista;
      },
    });
  }
  ngAfterViewInit() {

    this.dataSource.data = this.dataSource.data.sort((a, b) =>
      a.apellido > b.apellido ? 1 : -1
    );

    this.dataSource.paginator = this.paginator;

    console.log('siu', this.dataSource.paginator);
    // this.dataSource.sort = this.sort;
  };
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(this.dataSource.data);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  crearPersona() {
    this.matdialog.open(PacienteModalComponent, {
      data: {
        tipo: "create"
      }
    })
  }
  eliminarPersona(idPersona: number) {

    this.matdialog.open(PacienteModalComponent, {
      data: {
        tipo: "delete",
        id: idPersona,
      }
    })
  }
  editarPersona(idPersona: number) {

    let dat = this.dataSource.filteredData.find(data => data.idPersona == idPersona)
    console.log(dat)
    this.matdialog.open(PacienteModalComponent, {
      data: {
        tipo: "edit",
        id: idPersona,
        paciente_data: {
          nombre: dat?.nombre,
          apellido: dat?.apellido,
          email: dat?.email,
          telefono: dat?.telefono,
          ruc: dat?.ruc,
          cedula: dat?.cedula,
          tipoPersona: dat?.tipoPersona,
          fechaNacimiento: dat?.fechaNacimiento
        }

      }
    })
  }

  setData(data: PersonaModel[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }

  fisioterapeutas(){
    this.apiService.getAllPacienteFisioterapeutas().subscribe(value => {
      console.log(value)
      this.setData(value.lista)
    })
  }

  pacientes(){
    this.apiService.getAllPaciente().subscribe(value => {
      console.log(value)
      this.setData(value.lista)
    })
  }


}
