import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PuntosAccesoEspecialidad } from '../../transversales/constantes/serviciosRest/Especialidad/PuntosAccesoEspecialidad';
import { IServiciosRest } from '../../transversales/Interfaces/ServiciosRest/IServiciosRest';
import { Observable } from 'rxjs';
import { IRespuesta } from 'src/app/modelos/Respuesta/IRespuesta';
import { IEspecialidad } from '../../modelos/Especialidad/IEspecialidad';
import { header } from '../../transversales/constantes/serviciosRestConfiguracion/configuracion';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService implements IServiciosRest {

  constructor(private http: HttpClient, public puntosAccesoEspecialidad: PuntosAccesoEspecialidad) { }
  GuardarPOST<IEspecialidad>(modelo: IEspecialidad): Observable<IRespuesta<IEspecialidad>> {
    throw new Error("Method not implemented.");
  }
  EditarPUT<IEspecialidad>(modelo: IEspecialidad): Observable<IRespuesta<IEspecialidad>> {
    throw new Error("Method not implemented.");
  }
  ConsultarListaGET<IEspecialidad>(): Observable<IRespuesta<IEspecialidad>> {
    return this.http.get<IRespuesta<IEspecialidad>>(this.puntosAccesoEspecialidad.ConsultarListaEspecialidades);
  }
  EliminarDELETE<IEspecialidad>(modelo: IEspecialidad): Observable<IRespuesta<IEspecialidad>> {
    throw new Error("Method not implemented.");
  }
  ConsultarGET<IEspecialidad>(modelo: IEspecialidad): Observable<IRespuesta<IEspecialidad>> {
    return this.http.post<IRespuesta<IEspecialidad>>(this.puntosAccesoEspecialidad.ConsultarEspecialidad,JSON.stringify(modelo),{ headers: header });
  }



}
