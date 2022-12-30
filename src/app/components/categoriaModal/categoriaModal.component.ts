import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { AppModule } from '../../app.module';

@Component({
  selector: 'app-categoriaModal',
  templateUrl: './categoriaModal.component.html',
  styleUrls: ['./categoriaModal.component.css'],
})
export class CategoriaModalComponent implements OnInit {
  descripcionCategoria = '';
  categoria = {};
  errorMessage = '';

  constructor(
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: { tipo: string, id: number, descripcionCategoria: Object }
  ) {}

  ngOnInit(): void {
    console.log(typeof(this.categoria))
    console.log(typeof(this.data.descripcionCategoria))
    this.categoria = this.data.descripcionCategoria
  }

  crearCategoria() {
    this.apiService.createCategoria(this.descripcionCategoria).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
  }
  editarCategoria() {
    this.apiService.editarCategoria(this.data.id, this.categoria).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
  }

  eliminarCategoria(){
    this.apiService.deleteOnceCategoria(this.data.id).subscribe({
      next: (data: any) => {
        console.log('Se elimino una categoria', data);
      },
    })
  }
}
