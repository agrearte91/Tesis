import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ReplicasService } from '../../../services/replicas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-edit-replica',
  templateUrl: './form-edit-replica.component.html',
  styleUrls: []
})
export class FormEditReplicaComponent implements OnInit {

  mostrarPreparador=false;

  replica:Replica;

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

    constructor(private _replicaService:ReplicasService, private routes: Router, private route:ActivatedRoute) {
      
      this.route.params.subscribe(params => {
        this.replica = this._replicaService.getReplica(params['id']);
      })
      

      this.formReplica = new FormGroup({
        'codigo': new FormControl({value: this.replica.codigo, disabled:true},Validators.required),
        'taxon': new FormControl({value: this.replica.taxon, disabled:true},Validators.required),
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
    console.log(this.formReplica.value);
    this.routes.navigate(['/home-replica']);

  }

  agregarColector(){
    (<FormArray>this.formReplica.controls['colectores']).push(
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
    const arrayControl=<FormArray>this.formReplica.controls['colectores'];
    arrayControl.removeAt(i);
 
  }

  
}

interface Replica {
  'codigo': string,
  'taxon': string,
  'descripcion': string,
  'localidad': string,
  'unidad': string,
  'edad': number,
  'fecha': Date,
  'colectores':string[],
  'ubicacion': {
    'codRepositorio':string,
    'numEstante':number,
    'numEstanteria':number
  }
  'preparador'?: string,
  'tecnicasUtilizadas'?: string
}