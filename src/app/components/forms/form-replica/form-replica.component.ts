import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms'
@Component({
  selector: 'app-form-replica',
  templateUrl: './form-replica.component.html',
  styleUrls: []
})
export class FormReplicaComponent implements OnInit {

  
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



  constructor() {
    console.log("estoy aca");
    this.formReplica = new FormGroup({
      'codigo': new FormControl('',Validators.required),
      'taxon': new FormControl('',Validators.required),
      'descripcion': new FormControl('',[Validators.required,Validators.minLength(5)]),
      'localidad': new FormControl('',Validators.required),
      'unidad': new FormControl('',Validators.required),
      'edad': new FormControl('',Validators.required),
      'colector': new FormArray([
        new FormControl('',Validators.required)
      ]),
      'ubicacion': new FormGroup({
        'codRespositorio': new FormControl('',Validators.required),
        'numEstante': new FormControl('',[Validators.required]),
        'numEstanteria': new FormControl('',Validators.required)
      }), 
      'fecha': new FormControl('',Validators.required),
      'preparador': new FormControl('',Validators.required),
      'tecnicasUtilizadas': new FormControl('',Validators.required)
    });

    console.log(this.formReplica)
   }

  ngOnInit() {
  }

  guardarFormulario(){
    console.log(this.formReplica.value)

  }

  agregarColector(){
    (<FormArray>this.formReplica.controls['colector']).push(
      new FormControl('',Validators.required)
    )
  }
  quitarColector(i){
    const arrayControl=<FormArray>this.formReplica.controls['colector'];
    arrayControl.removeAt(i);
 
  }
}
