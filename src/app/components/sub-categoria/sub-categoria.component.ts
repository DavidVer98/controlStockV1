import { Component, OnInit, ViewChild } from '@angular/core';
import { SubCategoria } from '../../models/subCategoria.models';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../services/api.service';
import { SubCategoriaModalComponent } from '../sub-categoria-modal/sub-categoria-modal.component';
import { Categoria } from 'src/app/models/categoria.models';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface subcategoriaTipo {
  idTipoProducto: number;
  descripcion: string;
  flagVisible: string;
  posicion: number;
}


@Component({
  selector: 'app-sub-categoria',
  templateUrl: './sub-categoria.component.html',
  styleUrls: ['./sub-categoria.component.css']
})
export class SubCategoriaComponent implements OnInit {

  subCategoria: SubCategoria[] = [];

  displayedColumns: string[] = [
    'IdSubCategoria',
    'Descripcion',
    'DescripcionCat',
    'flag',
    'posicion',
    'acciones',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource(this.subCategoria);

  query:QueryTipo2 = new QueryTipo2()
  categorias!:Categoria[]

  constructor(private apiService: ApiService, private matdialog: MatDialog) {
    this.apiService.getAllCategoriaOrder().subscribe(value => this.categorias = value.lista)
  }

  ngOnInit(): void {
    this.apiService.getAllSubCategoria().subscribe({
      next: (data) => {
        console.log('response received', data);
        this.subCategoria = data.lista;
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

  eliminarSubCategoria(idSubCategoria: number) {
    console.log(idSubCategoria,' ayuda que tal como estan aaaaaaaa');
    this.matdialog.open(SubCategoriaModalComponent, {
      data:{
        tipo: "delete",
        id: idSubCategoria,
        descripcionSubCategoria:{},
        idCategoria:new Categoria()
      }
      } )
  }
  // abre el poppup
  crearSubCategoria(){
    this.matdialog.open(SubCategoriaModalComponent, {
      data:{
        tipo: "create",
        id: 69,
        descripcionSubCategoria:{},
        idCategoria:new Categoria()
      }
      })
  }
  editarSubCategoria(idSubCategoria : number,idCategoria:Categoria){


    console.log(idSubCategoria+' test')
    console.log(idCategoria.descripcion)
    this.matdialog.open(SubCategoriaModalComponent, {
      data:{
        tipo: "edit",
        id: idSubCategoria,
        idCategoria:idCategoria,
        descripcionSubCategoria: this.dataSource.filteredData.find(data => data.idTipoProducto == idSubCategoria)?.descripcion
      }
      } )
  }

  search() {
    this.apiService.getSubCategoriaQueryParams(this.query.makeQuery()).subscribe(value => this.dataSource = new MatTableDataSource(value.lista))
  }


}


export class QueryTipo2 {
  constructor(public descripcion: string = '',
              public idCategoria: number | null = null,) {
  }

  makeQuery() {
    let obj: { [k: string]: any } = {};

    if (this.descripcion) {
      obj['descripcion'] = this.descripcion
    }
    if (this.idCategoria) {
      obj['idCategoria'] = {"idCategoria": this.idCategoria}
    }

    return JSON.stringify(obj)
  }
}
