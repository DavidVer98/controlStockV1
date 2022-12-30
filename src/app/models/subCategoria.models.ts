import { Categoria } from "./categoria.models";

export class SubCategoria {
    idTipoProducto!: number;
    descripcion!: string;
    flagVisible!: string;
    posicion!: number;
    idCategoria !: Categoria
}
  