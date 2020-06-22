import { IDoctor } from './IDoctor';
export class Doctor implements IDoctor {
    constructor(){}
    CodigoDoctor: number;
    Nombre: string;
    Apellido: string;
    Especialidad: number;
    NumeroCredencial: string;
    Hospital: number;
}