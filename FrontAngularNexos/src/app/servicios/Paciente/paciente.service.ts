import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IServiciosRest } from '../../transversales/Interfaces/ServiciosRest/IServiciosRest';
import { header } from '../../transversales/constantes/serviciosRestConfiguracion/configuracion';
import { PuntosAccesoPaciente } from '../../transversales/constantes/serviciosRest/Paciente/PuntosAccesoPaciente';
import { Observable } from 'rxjs';
import { IRespuesta } from '../../modelos/Respuesta/IRespuesta';

@Injectable({
  providedIn: 'root'
})
export class PacienteService implements IServiciosRest {

  constructor(private http: HttpClient, public puntosAccesoPaciente: PuntosAccesoPaciente) { }

  GuardarPOST<IPaciente>(modelo: IPaciente): Observable<IRespuesta<IPaciente>> {
    return this.http.post<IRespuesta<IPaciente>>(this.puntosAccesoPaciente.GuardarPaciente, JSON.stringify(modelo), { headers: header });
  }

  EditarPUT<IPaciente>(modelo: IPaciente): Observable<IRespuesta<IPaciente>> {
    return this.http.put<IRespuesta<IPaciente>>(this.puntosAccesoPaciente.EditarPaciente, JSON.stringify(modelo), { headers: header });
  }

  ConsultarListaGET<IPaciente>(): Observable<IRespuesta<IPaciente>> {
    return this.http.get<IRespuesta<IPaciente>>(this.puntosAccesoPaciente.ConsultarListaPacientes);
  }

  EliminarDELETE<IPaciente>(modelo: IPaciente): Observable<IRespuesta<IPaciente>> {
    return this.http.post<IRespuesta<IPaciente>>(this.puntosAccesoPaciente.EliminarPaciente, JSON.stringify(modelo), { headers: header });
  }
  ConsultarGET<IPaciente>(modelo: IPaciente): Observable<IRespuesta<IPaciente>> {
    return this.http.post<IRespuesta<IPaciente>>(this.puntosAccesoPaciente.ConsultarPaciente, JSON.stringify(modelo), { headers: header });
  }







}
