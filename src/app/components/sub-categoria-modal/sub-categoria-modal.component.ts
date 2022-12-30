import { Component, Inject, Input, NgModule, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Categoria } from 'src/app/models/categoria.models';
import { SubCategoria } from 'src/app/models/subCategoria.models';
import { ApiService } from 'src/app/services/api.service';
import { AppModule } from '../../app.module';




@Component({
  selector: 'app-sub-categoria-modal',
  templateUrl: './sub-categoria-modal.component.html',
  styleUrls: ['./sub-categoria-modal.component.css']
})

export class SubCategoriaModalComponent implements OnInit {
  descripcionSubCategoria = '';
  subCategoria = {};
  errorMessage = '';
  categoriaIndividual:any;
  categoria:Categoria[] =[];
  seleccionado:number=this.data.idCategoria.idCategoria;

  constructor(
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: { tipo: string, id: number, descripcionSubCategoria: Object,idCategoria:Categoria }
) {}

  ngOnInit(): void {
    console.log(typeof(this.subCategoria))
    console.log(typeof(this.data.descripcionSubCategoria))
    this.subCategoria = this.data.descripcionSubCategoria
    this.apiService.getAllCategoria().subscribe({
      next: (data2) => {
        console.log('response received', data2);
        this.categoria = data2.lista;
      },
    });
  }
  
  onChange($event: any) {
    this.categoriaIndividual=this.categoria.find(c=>c.idCategoria===$event);
    console.log(this.categoriaIndividual.descripcion);
  }  

  crearSubCategoria() {
    this.apiService.createSubCategoria(this.descripcionSubCategoria,this.categoriaIndividual).subscribe({
      next: (data) => {
        console.log(data);
        
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
  }

  

  editarSubCategoria() {
    this.apiService.editarSubCategoria(this.data.id, this.subCategoria,this.categoriaIndividual).subscribe({
      next: (data) => {
        console.log(data);
        
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
  }

  eliminarSubCategoria(){
    this.apiService.deleteOnceSubCategoria(this.data.id).subscribe({
      next: (data: any) => {
        console.log('Se elimino una categoria', data);
      },
    })
  }
}
