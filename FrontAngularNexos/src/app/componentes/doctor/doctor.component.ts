import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../servicios/Doctor/doctor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDoctor } from '../../modelos/Doctor/IDoctor';
import { IRespuesta } from '../../modelos/Respuesta/IRespuesta';
import { EspecialidadService } from '../../servicios/Especialidad/especialidad.service';
import { IEspecialidad } from '../../modelos/Especialidad/IEspecialidad';
import { HospitalService } from '../../servicios/Hospital/hospital.service';
import { IHospital } from '../../modelos/Hospital/IHospital';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {

  forma: FormGroup;
  modal: boolean = false;
  doctor: IDoctor;
  listaDoctor: IDoctor[] = [];
  listaEspecialidades: IEspecialidad[] = [];
  listaHospitales: IHospital[] = [];
  repuesta: IRespuesta<IDoctor>;
  hospitalServicio: IHospital;
  especialidadServicio: IEspecialidad;

  constructor(private _servicioDoctorService: DoctorService, private fb: FormBuilder, private router: Router,private _especialidadService:EspecialidadService, private _hospitalService: HospitalService) {
    this.crearFormulario();
    this.listarDoctores();
    this.listarEspecialidadesServicio();
    this.listarHospitalesServicio();
  }


  editar(id: number) {

  }

  ver(id: number) {

  }

  eliminar(id: number) {

  }


  limpiarFormulario() {
    this.forma.reset({
      nombre: '',
      apellido: '',
      especialidad: '',
      hospital: '',
      numeroCredencial: ''

    });


  }

listarDoctores(){

  this._servicioDoctorService.ConsultarListaGET<IDoctor>().subscribe((respuesta: IRespuesta<IDoctor>) => this.listaDoctor = respuesta.entidades.reverse().slice(0, 5));

}


listarEspecialidadesServicio(){
        this._especialidadService.ConsultarListaGET<IEspecialidad>().subscribe((respuesta: IRespuesta<IEspecialidad>)=> this.listaEspecialidades = respuesta.entidades);
}

consultarEspecialidad(id: number){
  this.especialidadServicio = {
    codigoEspecialidad : id
  }
  this._especialidadService.ConsultarGET<IEspecialidad>(this.especialidadServicio).subscribe((respuesta: IRespuesta<IEspecialidad>) => this.especialidadServicio = respuesta.entidades[0]);

  
}

listarHospitalesServicio(){
  this._hospitalService.ConsultarListaGET<IHospital>().subscribe((respuesta: IRespuesta<IHospital>) => this.listaHospitales = respuesta.entidades);
}

consultarHospitales(id : number){
  this.hospitalServicio = {
    codigoHospital: id
  }
  this._hospitalService.ConsultarGET<IHospital>(this.hospitalServicio).subscribe((respuesta: IRespuesta<IHospital>) => this.hospitalServicio = respuesta.entidades[0]);
}


  guardarDoctor() {
    if (this.forma.valid) {
     
      this.doctor = {
        nombre: this.forma.get('nombre').value,
        apellido: this.forma.get('apellido').value,
        especialidad: parseInt(this.forma.get('especialidad').value),
        hospital: parseInt(this.forma.get('hospital').value),
        numeroCredencial: this.forma.get('numeroCredencial').value
      }
  

      this._servicioDoctorService.GuardarPOST<IDoctor>(this.doctor).subscribe((respuesta: IRespuesta<IDoctor>) => this.repuesta = respuesta);
      this.estadoModal();
      this.limpiarFormulario();
      this.listarDoctores();
    }
    this.estadoModal();
    this.listarDoctores();

  }



  crearFormulario() {
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      especialidad: ['', [Validators.required]],
      numeroCredencial: ['', [Validators.required, Validators.maxLength(10)]],
      hospital: ['', [Validators.required]],
    })
  }


  estadoModal() {
    if (this.modal) {
      this.modal = false;
    } else {
      this.modal = true;
    }
  }




  get nombreNoValido() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get apellidoNoValido() {
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
  }

  get especialidadNoValido() {
    return this.forma.get('especialidad').invalid && this.forma.get('especialidad').touched;
  }

  get numeroCredencialNoValido() {
    return this.forma.get('numeroCredencial').invalid && this.forma.get('numeroCredencial').touched;
  }

  get hospitalNoValido() {
    return this.forma.get('hospital').invalid && this.forma.get('hospital').touched;
  }





}
