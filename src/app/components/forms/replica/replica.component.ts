import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms'

@Component({
  selector: 'app-replica',
  templateUrl: './replica.component.html',
  styleUrls: []
})
export class ReplicaComponent implements OnInit {
  
  formReplica:FormGroup;

    codigo:null
    taxon:null
    descripcion:null
    localidad:null
    unidad:null
    edad:null
    colector:null
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
      'descripcion': new FormControl('',Validators.required),
      'localidad': new FormControl('',Validators.required),
      'unidad': new FormControl('',Validators.required),
      'edad': new FormControl('',Validators.required),
      'colector': new FormControl('',Validators.required),
      'ubicacion': new FormGroup({
        'codRespositorio': new FormControl('',Validators.required),
        'numEstante': new FormControl('',Validators.required),
        'numEstanterias': new FormControl('',Validators.required)
      }), 
      'fecha': new FormControl('',Validators.required),
      'preparador': new FormControl('',Validators.required)
    })
   }

  ngOnInit() {
  }

  guardarFormulario(){
    console.log(this.formReplica)
  }
}
