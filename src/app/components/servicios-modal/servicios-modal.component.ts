import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductoAdminSistema } from 'src/app/models/productoAdminSistemas.models';
import { ServiciosAdmin } from 'src/app/models/serviciosAdmin.models';
import { SubCategoria } from 'src/app/models/subCategoria.models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-servicios-modal',
  templateUrl: './servicios-modal.component.html',
  styleUrls: ['./servicios-modal.component.css']
})
export class ServiciosModalComponent implements OnInit {
  
  codigo:any;
  nombre='';

  idProductoLista:ProductoAdminSistema[]=[];
  precioventa:any;
  idProducto=new ProductoAdminSistema;
  errorMessage='';
  servicios: ServiciosAdmin[] = [];
  idPresentacionProducto= new ServiciosAdmin;
  descripcion='';
  seleccionado= new ProductoAdminSistema;
  test= new ProductoAdminSistema;



  constructor(
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: { tipo: string, original: ServiciosAdmin, nombre: string,descripcion:string, idProducto:ProductoAdminSistema, precioventa:number , proMod: ProductoAdminSistema}
  ) {}

  ngOnInit(): void {
    
    this.nombre=this.data.nombre
    this.seleccionado=this.data.proMod

    this.idProducto=this.data.proMod
    this.descripcion=this.data.descripcion
    
    this.idPresentacionProducto=this.data.original
    console.log(this.nombre, this.idPresentacionProducto, this.idProducto,'aca etoy');
    this.apiService.getAllServiciosA().subscribe({
      next: (data) => {
        
        this.servicios = data.lista;
        for (let i=0; i<this.servicios.length; i++){
          this.idProductoLista.push(this.servicios[i].idProducto);
          
        }
        console.log(this.idProductoLista);
      },
    });

  }
  
  crearServicioAdmin() {
    console.log(this.codigo, this.nombre, '\n manteca',this.test);
    this.apiService.createServicioAdmin(this.codigo,this.nombre, this.descripcion, this.test, this.precioventa).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
  }

  onChange($event: any) {

    this.test = $event
    console.log(this.idProductoLista.find(p=>p.idProducto === $event), 'olaaaaaaaaaaaaaaa',$event,'   ',this.idProducto);

  }
  


  eliminarServiciosAdmin(){
    console.log(this.data,'espectro');
    this.apiService.deleteOnceServicioAdmin(this.data.original.idPresentacionProducto).subscribe({
        next: (data: any) => {
          console.log('Se un registro de administracion de servicios', data);
        },
      })

  }

  editarServiciosAdmin(){
    
    console.log(this.data, 'ayuda');
    this.apiService.editarServicioAdmin(this.idPresentacionProducto,this.nombre,this.descripcion,this.idProducto).subscribe({
      next: (data: any) => {
        console.log('Se modifico un registro de administracion de servicios', data);
      },
    })
  }

}
