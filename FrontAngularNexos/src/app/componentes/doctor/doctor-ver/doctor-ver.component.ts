import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorService } from '../../../servicios/Doctor/doctor.service';
import { IDoctor } from '../../../modelos/Doctor/IDoctor';
import { IRespuesta } from '../../../modelos/Respuesta/IRespuesta';

@Component({
  selector: 'app-doctor-ver',
  templateUrl: './doctor-ver.component.html',
  styleUrls: ['./doctor-ver.component.css']
})
export class DoctorVerComponent   {

  idDoctor: number;
  doctor: IDoctor;
  repuestaConsutaDoctor: IRespuesta<IDoctor>;
  

  constructor(private router: Router, private _servicioDoctorService: DoctorService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      this.idDoctor = params['id'];
    });

    this.consultarDoctor();

    setTimeout(()=> {
        this.doctor = this.repuestaConsutaDoctor.entidades[0];
    },1000)
   }


   consultarDoctor() {
    this.doctor = {
      codigoDoctor: parseInt(this.idDoctor.toString()),
      
    }
    this._servicioDoctorService.ConsultarGET<IDoctor>(this.doctor).subscribe((respuesta: IRespuesta<IDoctor>) => this.repuestaConsutaDoctor = respuesta);



  }

  regresar(){
    this.router.navigate(['/doctor']);
  }

  

}
