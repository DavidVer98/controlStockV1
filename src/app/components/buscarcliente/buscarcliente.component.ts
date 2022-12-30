import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Persona } from 'src/app/models/user.models';
import { ApiService } from 'src/app/services/api.service';
import { ReservaModalComponent } from '../reserva-modal/reserva-modal.component';

@Component({
  selector: 'app-buscarcliente',
  templateUrl: './buscarcliente.component.html',
  styleUrls: ['./buscarcliente.component.css']
})
export class BuscarclienteComponent implements OnInit {
  public data: Persona[] = [];

  nombre: string = "";
  apellido: string = "";
  filtros = {
    nombre : "",
    apellido: ""
  }
  public columns = ["Nombres","Apellidos","Email","Telefono","Ruc","Cedula","Fecha de Nacimiento","Acciones"];
  constructor(private  personaDialogRef: MatDialogRef<ReservaModalComponent>,
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCliente()
  }
    
  getCliente(){

    this.apiService.getCliente(this.filtros)
    .subscribe((data:any)=>{
     console.log(data);
     this.data = data.lista;
    });
  }
  seleccionarCliente(cliente: Persona){
    console.log("aaaeeee",cliente);
    this.personaDialogRef.close(cliente)
  }

  buscar(){
    this.filtros.nombre = this.nombre
    this.filtros.apellido = this.apellido
    this.getCliente()
  }

}


