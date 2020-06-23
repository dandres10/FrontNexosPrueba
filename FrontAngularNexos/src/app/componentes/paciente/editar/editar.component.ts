import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PacienteService } from '../../../servicios/Paciente/paciente.service';
import { IPaciente } from '../../../modelos/Paciente/IPaciente';
import { IRespuesta } from '../../../modelos/Respuesta/IRespuesta';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  forma: FormGroup;
  paciente: IPaciente;
  idPaciente: number;
  repuestaConsutaPaciente: IRespuesta<IPaciente>;
  respuestaEdicionPaciente: IRespuesta<IPaciente>;

  constructor(private fb: FormBuilder, private _pacienteService: PacienteService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.crearFormulario();
    this.activatedRoute.params.subscribe(params => {
      this.idPaciente = params['id'];
    });
    this.consultarPaciente();
    setTimeout(() => {
      this.cargarDataAlFormulario();
    }, 2000)


  }


  crearFormulario() {
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      codPostal: ['', [Validators.required, Validators.maxLength(6)]],
      telefono: ['', [Validators.required, Validators.maxLength(10)]],
    })
  }


  regresar() {
    this.router.navigate(['/paciente']);
}


  editarPaciente() {
    if (this.forma.valid) {

      this.paciente = {
        codigoPaciente: this.repuestaConsutaPaciente.entidades[0].codigoPaciente,
        nombre: this.forma.get('nombre').value,
        apellido: this.forma.get('apellido').value,
        codPostal: this.forma.get('codPostal').value,
        telefono: this.forma.get('telefono').value

      }
     
      this._pacienteService.EditarPUT<IPaciente>(this.paciente).subscribe((respuesta: IRespuesta<IPaciente>) => this.respuestaEdicionPaciente = respuesta);
      setTimeout(() => {
        console.log(this.respuestaEdicionPaciente);
      }, 3000);

    }
  }

  consultarPaciente() {
    this.paciente = {
      codigoPaciente: parseInt(this.idPaciente.toString()),
      apellido: '',
      codPostal: '',
      nombre: '',
      telefono: ''
    }
    this._pacienteService.ConsultarGET<IPaciente>(this.paciente).subscribe((respuesta: IRespuesta<IPaciente>) => this.repuestaConsutaPaciente = respuesta);



  }

  cargarDataAlFormulario() {
    this.forma.reset({
      nombre: this.repuestaConsutaPaciente.entidades[0].nombre,
      apellido: this.repuestaConsutaPaciente.entidades[0].apellido,
      codPostal: this.repuestaConsutaPaciente.entidades[0].codPostal,
      telefono: this.repuestaConsutaPaciente.entidades[0].telefono,

    });


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
