import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Categoria } from '../../models/categoria.models';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaModalComponent } from '../categoriaModal/categoriaModal.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface categoriaTipo {
  idCategoria: number;
  descripcion: string;
  flagVisible: string;
  posicion: number;
}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent implements OnInit {
  categoria: Categoria[] = [];

  displayedColumns: string[] = [
    'IdCategoria',
    'Descripcion',
    'flag',
    'posicion',
    'acciones',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource(this.categoria);

  constructor(private apiService: ApiService, private matdialog: MatDialog) {}

  ngOnInit(): void {
    this.apiService.getAllCategoria().subscribe({
      next: (data) => {
        console.log('response received', data);
        this.categoria = data.lista;
        this.dataSource.data = data.lista;
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(this.dataSource.data);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  eliminarCategoria(idCategoria: number) {

    this.matdialog.open(CategoriaModalComponent, {
      data:{
        tipo: "delete",
        id: idCategoria,
      }
      } )
  }
  // abre el poppup
  crearCategoria(){
    this.matdialog.open(CategoriaModalComponent, {
      data:{
        tipo: "create"
      }
      })
  }
  editarCategoria(idCategoria : number){


    console.log(idCategoria)
    this.matdialog.open(CategoriaModalComponent, {
      data:{
        tipo: "edit",
        id: idCategoria,
        descripcionCategoria: this.dataSource.filteredData.find(data => data.idCategoria == idCategoria)?.descripcion
      }
      } )
  }
}
