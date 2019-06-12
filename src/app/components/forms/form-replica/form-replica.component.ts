import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms'
import { ReplicasService } from '../../../services/replicas.service';
@Component({
  selector: 'app-form-replica',
  templateUrl: './form-replica.component.html',
  styleUrls: []
})
export class FormReplicaComponent implements OnInit {

  mostrarPreparador=false;
  formReplica:FormGroup;

    codigo:null
    taxon:null
    descripcion:null
    localidad:null
    unidad:null
    edad:null
    colector:any[]
    ubicacion: {
      codRepositorio: null,
      numEstante: null,
      numEstanteria: null
    }
    fecha:null
    preparador:null



  constructor(private _replicaService:ReplicasService) {
    console.log("estoy aca");
    this.formReplica = new FormGroup({
      'codigo': new FormControl('',Validators.required),
      'taxon': new FormControl('',Validators.required),
      'descripcion': new FormControl('',[Validators.required,Validators.minLength(5)]),
      'localidad': new FormControl('',Validators.required),
      'unidad': new FormControl('',Validators.required),
      'edad': new FormControl('',[Validators.required, Validators.min(1)]),
      'colectores': new FormArray([
        new FormControl('',Validators.required)
      ]),
      'ubicacion': new FormGroup({
        'codRepositorio': new FormControl('',Validators.required),
        'numEstante': new FormControl('',[Validators.required,Validators.min(1)]),
        'numEstanteria': new FormControl('',[Validators.required,Validators.min(1)])
      }), 
      'fecha': new FormControl('',Validators.required)
    });

    console.log(this.formReplica)
   }

  ngOnInit() {
  }

  guardarFormulario(){
    this._replicaService.agregarReplica(this.formReplica.value);
    console.log(this.formReplica.value)

  }

  agregarColector(){
    (<FormArray>this.formReplica.controls['colector']).push(
      new FormControl('',Validators.required)
    )
  }

  agregarPreparador(){
    this.formReplica.addControl('preparador', new FormControl('',Validators.required));
    this.formReplica.addControl('tecnicasUtilizadas', new FormControl('',Validators.required));
  }

  quitarPreparador(){
    this.formReplica.removeControl('preparador');
    this.formReplica.removeControl('tecnicasUtilizadas');
  }

  quitarColector(i){
    const arrayControl=<FormArray>this.formReplica.controls['colector'];
    arrayControl.removeAt(i);
 
  }
}
