import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HorarioExcepcion, IdEmpleado} from "../../models/horarioExcepcion";

class Horario {
  constructor(public fechaCadena: string = '',
              public horaAperturaCadena: string = '',
              public horaCierreCadena: string = '',
              public flagEsHabilitar: string = '',
              public idEmpleado: any = 0,
              public intervaloMinutos: number = 0) {
  }
  jsonify(){
    let aux = this.idEmpleado
    this.idEmpleado = {idPersona:aux}
    return JSON.stringify(this)
  }

}

@Component({
  selector: 'app-horario-excepcion-modal',
  templateUrl: './horario-excepcion-modal.component.html',
  styleUrls: ['./horario-excepcion-modal.component.css']
})
export class HorarioExcepcionModalComponent implements OnInit {

  horario: Horario = new Horario()
  empleados: any

  constructor(private apiService: ApiService,
              private dialogRef: MatDialogRef<HorarioExcepcionModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { tipo: string, id: number }) {
  }

  ngOnInit(): void {
    this.apiService.getAllClientes().subscribe(value => this.empleados = value.lista)
  }

  cerrarModal() {
    this.dialogRef.close()
  }

  guardar() {
    console.log(this.horario.jsonify())
    this.apiService.createHorarioExcepcion(this.horario.jsonify()).subscribe(value =>{
      console.log(value)
      this.cerrarModal()
    })
  }

}
