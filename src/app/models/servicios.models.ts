
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

export interface IdEmpleado {
    idPersona: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    seguroMedico?: any;
    seguroMedicoNumero?: any;
    ruc: string;
    cedula: string;
    tipoPersona: string;
    usuarioLogin?: any;
    idLocalDefecto?: any;
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
    fechaNacimiento: string;
    soloProximosCumpleanhos?: any;
    todosLosCampos?: any;
    incluirLimiteDeCredito?: any;
    deuda?: any;
    saldo?: any;
    creditos?: any;
}

export interface IdCliente {
    idPersona: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    seguroMedico?: any;
    seguroMedicoNumero?: any;
    ruc: string;
    cedula: string;
    tipoPersona: string;
    usuarioLogin?: any;
    idLocalDefecto?: any;
    flagVendedor: string;
    flagTaxfree?: any;
    flagExcepcionChequeoVenta: string;
    observacion?: any;
    direccion?: any;
    idCiudad?: any;
    tipoCliente: string;
    fechaHoraAprobContrato?: any;
    soloUsuariosDelSistema?: any;
    soloPersonasTaxfree?: any;
    nombreCompleto: string;
    limiteCredito: number;
    fechaNacimiento: string;
    soloProximosCumpleanhos?: any;
    todosLosCampos?: any;
    incluirLimiteDeCredito?: any;
    deuda?: any;
    saldo?: any;
    creditos?: any;
}

export interface IdCategoria {
    idCategoria: number;
    descripcion: string;
    flagVisible: string;
    posicion: number;
}

export interface IdTipoProducto {
    idTipoProducto: number;
    descripcion: string;
    flagVisible: string;
    idCategoria: IdCategoria;
    posicion: number;
}

export interface IdFichaClinica {
    idFichaClinica: number;
    fechaHora: string;
    motivoConsulta: string;
    diagnostico: string;
    observacion: string;
    idLocal: IdLocal;
    idEmpleado: IdEmpleado;
    idCliente: IdCliente;
    idTipoProducto: IdTipoProducto;
    fechaHoraCadena: string;
    fechaHoraCadenaFormateada: string;
    fechaDesdeCadena?: any;
    fechaHastaCadena?: any;
    todosLosCampos?: any;
}

export interface IdEmpleado2 {
    idPersona: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    seguroMedico?: any;
    seguroMedicoNumero?: any;
    ruc: string;
    cedula: string;
    tipoPersona: string;
    usuarioLogin?: any;
    idLocalDefecto?: any;
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
    fechaNacimiento: string;
    soloProximosCumpleanhos?: any;
    todosLosCampos?: any;
    incluirLimiteDeCredito?: any;
    deuda?: any;
    saldo?: any;
    creditos?: any;
}

export interface IdEmpleadoSecundario {
    idPersona: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    seguroMedico?: any;
    seguroMedicoNumero?: any;
    ruc: string;
    cedula: string;
    tipoPersona: string;
    usuarioLogin?: any;
    idLocalDefecto?: any;
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
    fechaNacimiento: string;
    soloProximosCumpleanhos?: any;
    todosLosCampos?: any;
    incluirLimiteDeCredito?: any;
    deuda?: any;
    saldo?: any;
    creditos?: any;
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

export interface Usuario {
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

export interface Servicios {
    idServicio: number;
    flagEstado: string;
    fechaHora: string;
    observacion: string;
    presupuesto: number;
    idFichaClinica: IdFichaClinica;
    idEmpleado: IdEmpleado2;
    idEmpleadoSecundario: IdEmpleadoSecundario;
    usuario: Usuario;
    fechaHoraCadena: string;
    fechaDesdeCadena?: string;
    fechaHastaCadena?: string;
    estado: string;
}

