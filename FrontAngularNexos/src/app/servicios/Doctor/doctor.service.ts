import { Injectable } from '@angular/core';
import { IServiciosRest } from '../../transversales/Interfaces/ServiciosRest/IServiciosRest';
import { Observable } from 'rxjs';
import { IRespuesta } from 'src/app/modelos/Respuesta/IRespuesta';
import { HttpClient } from '@angular/common/http';
import { header } from '../../transversales/constantes/serviciosRestConfiguracion/configuracion';
import { PuntosAccesoDoctor } from '../../transversales/constantes/serviciosRest/Doctor/PuntosAccesoDoctor';


@Injectable({
  providedIn: 'root'
})
export class DoctorService implements IServiciosRest {

  constructor(private http: HttpClient, public puntosAccesoDoctor: PuntosAccesoDoctor) { }


  ConsultarGET<IDoctor>(modelo: IDoctor): Observable<IRespuesta<IDoctor>> {
    return this.http.post<IRespuesta<IDoctor>>(this.puntosAccesoDoctor.ConsultarDoctor, JSON.stringify(modelo), { headers: header });
  }
  GuardarPOST<IDoctor>(modelo: IDoctor): Observable<IRespuesta<IDoctor>> {
    return this.http.post<IRespuesta<IDoctor>>(this.puntosAccesoDoctor.GuardarDoctor, JSON.stringify(modelo), { headers: header });
  }
  ConsultarListaGET<IDoctor>(): Observable<IRespuesta<IDoctor>> {
    return this.http.get<IRespuesta<IDoctor>>(this.puntosAccesoDoctor.ConsultarListaDoctor);
  }

  
  EditarPUT<IDoctor>(modelo: IDoctor): Observable<IRespuesta<IDoctor>> {
    throw new Error("Method not implemented.");
  }
  
  EliminarDELETE<IDoctor>(modelo: IDoctor): Observable<IRespuesta<IDoctor>> {
    throw new Error("Method not implemented.");
  }
  


}
