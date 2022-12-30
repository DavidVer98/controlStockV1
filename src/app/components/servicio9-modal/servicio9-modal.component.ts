import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FichaClinicaModel} from "../../models/ficha-clinica.models";
import {Listadatos} from "../../models/datosCategoria.models";

@Component({
  selector: 'app-servicio9-modal',
  templateUrl: './servicio9-modal.component.html',
  styleUrls: ['./servicio9-modal.component.css']
})
export class Servicio9ModalComponent implements OnInit {

  fichasClinicas!:FichaClinicaModel[]
  presentacionProducto!:any

  cabecera:Cabecera = new Cabecera()
  detalles:Detalles = new Detalles()

  constructor(private apiService: ApiService,
              private dialogRef: MatDialogRef<Servicio9ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { tipo: string, id:number},
  ) {
    this.apiService.getAllfichaClinica().subscribe(value => this.fichasClinicas = value.lista)
    this.apiService.getAllPresentacionProducto().subscribe(value => this.presentacionProducto = value.lista)

  }

  ngOnInit(): void {
    console.log(this.fichasClinicas)
  }

  cerrarModal() {
    this.dialogRef.close()
  }

  eliminar(){
    this.apiService.deleteServicios9(1,2).subscribe(value => console.log(value))
  }

  guardar(){
    console.log(this.presentacionProducto)
    console.log(this.detalles)
    let body = {
      "idFichaClinica":{
        "idFichaClinica": this.cabecera.idFichaClinica
      },
      "observacion": this.cabecera.observacion
    }
    this.apiService.createServicios9(body).subscribe(value => {
      console.log('servicio creado: ', value.idServicio)
      this.cerrarModal()
    })
  }



}

class Cabecera {
  constructor(public idFichaClinica:number = 0,
              public observacion:string = '')
  {}
}

class Detalles {
  constructor(public cantidad:number = 0,
              public idPresentacionProducto:IdPresentacionProducto = new IdPresentacionProducto(),
              public idServicio: IdServicio = new IdServicio())
  {}
}

class IdPresentacionProducto{
  constructor( public idPresentacionProducto:number = 0  ) {
  }
}

class IdServicio{
  constructor( public idServicio:number = 0  ) {
  }
}
