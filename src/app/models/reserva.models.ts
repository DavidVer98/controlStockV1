import { Persona } from "./user.models";

export class Reserva {
  fecha!: Date;
  horaInicioCadena!: string;
  horaFinCadena!: string;
  idEmpleado!:Persona;
  idCliente!:Persona;
  observacion!:string;
}