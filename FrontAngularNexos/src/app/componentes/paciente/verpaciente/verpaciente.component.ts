import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PacienteService } from '../../../servicios/Paciente/paciente.service';
import { IPaciente } from '../../../modelos/Paciente/IPaciente';
import { IRespuesta } from '../../../modelos/Respuesta/IRespuesta';

@Component({
  selector: 'app-verpaciente',
  templateUrl: './verpaciente.component.html',
  styleUrls: ['./verpaciente.component.css']
})
export class VerpacienteComponent implements OnInit {

  forma: FormGroup;
  idPaciente: number;
  paciente: IPaciente;
  repuestaConsutaPaciente: IRespuesta<IPaciente>;

  constructor(private router: Router, private _pacienteService: PacienteService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      this.idPaciente = params['id'];
    });

    this.consultarPaciente();

    setTimeout(() => {
      this.paciente = this.repuestaConsutaPaciente.entidades[0];

    }, 1000)

  }

  ngOnInit(): void {
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


  regresar() {
    this.router.navigate(['/paciente']);
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
