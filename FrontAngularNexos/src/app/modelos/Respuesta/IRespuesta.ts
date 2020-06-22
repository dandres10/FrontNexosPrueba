import { TipoNotificacion } from './TipoNotificacion';
export interface IRespuesta<T> {

    resultado: boolean;
    entidades: T[];
    mensajes: string[];
    tipoNotificacion: TipoNotificacion;

};