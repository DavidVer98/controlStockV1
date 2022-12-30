import { SubCategoria } from "./subCategoria.models";

export class ProductoAdminSistema{
    idProducto!: {
        idProducto: number,
        descripcion: string,
        idTipoProducto: SubCategoria,
        idModelo: null,
        idMarca: {
            idMarca: number,
            descripcion: string,
            observacion: string
        },
        anho: null,
        observacion: null,
        edadSexo: null,
        descripcionGeneral: string,
        edadSexoNulo: null
    };
}