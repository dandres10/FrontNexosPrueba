import { Injectable } from '@angular/core';
import { PuntosAccesoHospital } from '../../transversales/constantes/serviciosRest/Hospital/PuntosAccesoHospital';
import { HttpClient } from '@angular/common/http';
import { IServiciosRest } from '../../transversales/Interfaces/ServiciosRest/IServiciosRest';
import { Observable } from 'rxjs';
import { IRespuesta } from 'src/app/modelos/Respuesta/IRespuesta';
import { header } from '../../transversales/constantes/serviciosRestConfiguracion/configuracion';


@Injectable({
  providedIn: 'root'
})
export class HospitalService implements IServiciosRest{

  constructor(public puntosAccesoHospital : PuntosAccesoHospital,private http: HttpClient) { }
  GuardarPOST<IHospital>(modelo: IHospital): Observable<IRespuesta<IHospital>> {
    throw new Error("Method not implemented.");
  }
  EditarPUT<IHospital>(modelo: IHospital): Observable<IRespuesta<IHospital>> {
    throw new Error("Method not implemented.");
  }
  ConsultarListaGET<IHospital>(): Observable<IRespuesta<IHospital>> {
    return this.http.get<IRespuesta<IHospital>>(this.puntosAccesoHospital.ConsultarListaHospitales);
  }
  EliminarDELETE<IHospital>(modelo: IHospital): Observable<IRespuesta<IHospital>> {
    throw new Error("Method not implemented.");
  }
  ConsultarGET<IHospital>(modelo: IHospital): Observable<IRespuesta<IHospital>> {
    return this.http.post<IRespuesta<IHospital>>(this.puntosAccesoHospital.ConsultarHospital,JSON.stringify(modelo),{ headers: header });
  }
}
