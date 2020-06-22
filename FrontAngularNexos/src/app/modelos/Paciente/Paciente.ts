import { IPaciente } from './IPaciente';

export class Paciente implements IPaciente {
    CodigoPaciente: number;
    Nombre: string;
    Apellido: string;
    CodPostal: string;
    Telefono: string;

}