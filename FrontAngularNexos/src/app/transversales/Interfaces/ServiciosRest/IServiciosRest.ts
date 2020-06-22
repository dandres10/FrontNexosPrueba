import { Observable } from 'rxjs';
import { IRespuesta } from '../../../modelos/Respuesta/IRespuesta';

export interface IServiciosRest {

     GuardarPOST<T>(modelo: T): Observable<IRespuesta<T>>;
     EditarPUT<T>(modelo: T): Observable<IRespuesta<T>>;
     ConsultarListaGET<T>(): Observable<IRespuesta<T>>;
     EliminarDELETE<T>(modelo: T): Observable<IRespuesta<T>>;
     ConsultarGET<T>(modelo: T): Observable<IRespuesta<T>>;
}


