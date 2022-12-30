import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { Persona } from '../../models/user.models';
import { ReservaModalComponent } from '../reserva-modal/reserva-modal.component';
@Component({
  selector: 'app-buscarfisioterapeuta',
  templateUrl: './buscarfisioterapeuta.component.html',
  styleUrls: ['./buscarfisioterapeuta.component.css']
})
export class BuscarfisioterapeutaComponent implements OnInit {
  
  public data: Persona[] = [];

  nombre: string = "";
  apellido: string = "";
  filtros = {
    nombre : "",
    apellido: ""
  }
  public columns = ["Nombres","Apellidos","Email","Telefono","Ruc","Cedula","Fecha de Nacimiento","Acciones"];


  constructor(  private  personaDialogRef: MatDialogRef<ReservaModalComponent>,
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.getEmpleados()
  }
    
  getEmpleados(){

    this.apiService.getFisioterapeuta(this.filtros)
    .subscribe((data:any)=>{
     console.log(data);
     this.data = data.lista;
    });
  }
  seleccionarEmpleado(empleado: Persona){
    if(empleado)
      this.personaDialogRef.close(empleado)
  }

  buscar(){
    this.filtros.nombre = this.nombre
    this.filtros.apellido = this.apellido
    this.getEmpleados()
  }

}
