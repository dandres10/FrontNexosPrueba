import { TipoNotificacion } from './TipoNotificacion';

export class Respuesta<T>{
    Resultado: boolean;
    Entidades: T[];
    Mensajes: string[];
    TipoNotificacion: TipoNotificacion;
} 