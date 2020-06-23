import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PacienteService } from '../../servicios/Paciente/paciente.service';
import { IPaciente } from '../../modelos/Paciente/IPaciente';
import { IRespuesta } from '../../modelos/Respuesta/IRespuesta';
import { Router } from '@angular/router';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent {

  forma: FormGroup;
  paciente: IPaciente;
  listaPaciente: IPaciente[] = [];
  repuesta: IRespuesta<IPaciente>;
  formularioValido: boolean = false;
  modal: boolean = false;

  constructor(private fb: FormBuilder, private _pacienteService: PacienteService, private router: Router) {
    this.crearFormulario();
    this.listarPacientesServicio();


  }




  crearFormulario() {
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      codPostal: ['', [Validators.required, Validators.maxLength(6)]],
      telefono: ['', [Validators.required, Validators.maxLength(10)]],
    })
  }


  listarPacientesServicio() {
    this._pacienteService.ConsultarListaGET<IPaciente>().subscribe((respuesta: IRespuesta<IPaciente>) => this.listaPaciente = respuesta.entidades.reverse().slice(0, 5));

  }





  guardarPaciente() {

    if (this.forma.valid) {
      this.formularioValido = true;
      this.paciente = {
        nombre: this.forma.get('nombre').value,
        apellido: this.forma.get('apellido').value,
        codPostal: this.forma.get('codPostal').value,
        telefono: this.forma.get('telefono').value

      }

      this._pacienteService.GuardarPOST<IPaciente>(this.paciente).subscribe((respuesta: IRespuesta<IPaciente>) => this.repuesta = respuesta);
      this.limpiarFormulario();
      this.listarPacientesServicio();
      this.estadoModal();

    }
    this.estadoModal();
    this.listarPacientesServicio();
  }

  cargarDataAlFormulario() {
    this.forma.reset({
      nombre: 'Ej: Marcos',
      apellido: 'Ej: Aldana',
      codPostal: 'Ej: 111157',
      telefono: 'Ej: 3219905264',

    });


  }

  limpiarFormulario() {
    this.forma.reset({
      nombre: '',
      apellido: '',
      codPostal: '',
      telefono: '',

    });


  }


  editar(idPaciente: number) {
    this.router.navigate(['/editarPaciente', idPaciente]);
  }

  ver(idPaciente: number){
    this.router.navigate(['/verPaciente', idPaciente]);
  }

  eliminar(idPaciente: number){
    this.paciente = {
      nombre: '',
      apellido: '',
      codPostal: '',
      telefono: '',
      codigoPaciente: idPaciente

    }
    this._pacienteService.EliminarDELETE<IPaciente>(this.paciente).subscribe();
    
    setTimeout(()=> {

      this.listarPacientesServicio();
    },2000)
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

  get codPostalNoValido() {
    return this.forma.get('codPostal').invalid && this.forma.get('codPostal').touched;
  }

  get telefonoNoValido() {
    return this.forma.get('telefono').invalid && this.forma.get('telefono').touched;
  }

}




