
  export interface IdLocal {
    idLocal: number;
    nombre: string;
    flagCasaCentral: string;
    cantidadIngreso: number;
    anhoMesActual: string;
    fechaHoraUltimoIngreso: string;
    minutosSesion: number;
    nombreEmpresa?: any;
    urlImagen?: any;
    secuencia?: any;
    pin?: any;
    appMovil?: any;
    qr?: any;
    qrSoloEvaluacion?: any;
    moneda?: any;
    evaluacionItem?: any;
    evaluacionLocal?: any;
    habilitarFacebook?: any;
    habilitarDatosManualmente?: any;
    habilitarAnonimo?: any;
    mostrarPreciosEnAccesoPublico?: any;
    habilitarReserva?: any;
    habilitarPedidosEnLocal?: any;
    habilitarPedidosParaLlevar?: any;
    habilitarPedidosDelivery?: any;
    habilitarLlamarAlMozo?: any;
    textoLamarAlMozo?: any;
    textoRealizarPedido?: any;
    recurso?: any;
    flagRequiereAutorizacion?: any;
    solicitarRucEnPedidos?: any;
    costoDelivery?: any;
    radioCoberturaDelivery?: any;
    tiempoEntregaDelivery?: any;
    posicionMapa?: any;
    horaApertura?: any;
    horaCierre?: any;
    horariosEntregas?: any;
    ultimaPublicacionShowMoreWeb?: any;
  }

  export interface IdLocalDefecto {
    idLocal: number;
    nombre: string;
    flagCasaCentral: string;
    cantidadIngreso: number;
    anhoMesActual: string;
    fechaHoraUltimoIngreso: string;
    minutosSesion: number;
    nombreEmpresa?: any;
    urlImagen?: any;
    secuencia?: any;
    pin?: any;
    appMovil?: any;
    qr?: any;
    qrSoloEvaluacion?: any;
    moneda?: any;
    evaluacionItem?: any;
    evaluacionLocal?: any;
    habilitarFacebook?: any;
    habilitarDatosManualmente?: any;
    habilitarAnonimo?: any;
    mostrarPreciosEnAccesoPublico?: any;
    habilitarReserva?: any;
    habilitarPedidosEnLocal?: any;
    habilitarPedidosParaLlevar?: any;
    habilitarPedidosDelivery?: any;
    habilitarLlamarAlMozo?: any;
    textoLamarAlMozo?: any;
    textoRealizarPedido?: any;
    recurso?: any;
    flagRequiereAutorizacion?: any;
    solicitarRucEnPedidos?: any;
    costoDelivery?: any;
    radioCoberturaDelivery?: any;
    tiempoEntregaDelivery?: any;
    posicionMapa?: any;
    horaApertura?: any;
    horaCierre?: any;
    horariosEntregas?: any;
    ultimaPublicacionShowMoreWeb?: any;
  }

  export interface IdEmpleado {
    idPersona: number;
    nombre: string;
    apellido: string;
    email?: any;
    telefono?: any;
    seguroMedico?: any;
    seguroMedicoNumero?: any;
    ruc?: any;
    cedula?: any;
    tipoPersona: string;
    usuarioLogin: string;
    idLocalDefecto: IdLocalDefecto;
    flagVendedor: string;
    flagTaxfree?: any;
    flagExcepcionChequeoVenta?: any;
    observacion?: any;
    direccion?: any;
    idCiudad?: any;
    tipoCliente: string;
    fechaHoraAprobContrato?: any;
    soloUsuariosDelSistema?: any;
    soloPersonasTaxfree?: any;
    nombreCompleto: string;
    limiteCredito: number;
    fechaNacimiento?: any;
    soloProximosCumpleanhos?: any;
    todosLosCampos?: any;
    incluirLimiteDeCredito?: any;
    deuda?: any;
    saldo?: any;
    creditos?: any;
  }

  export interface HorarioExcepcion {
    idHorarioExcepcion: number;
    fecha: string;
    horaApertura: string;
    horaCierre: string;
    flagEsHabilitar: string;
    idLocal: IdLocal;
    idEmpleado: IdEmpleado;
    intervaloMinutos: number;
    horaAperturaCadena: string;
    horaCierreCadena: string;
    fechaCadena: string;
  }


