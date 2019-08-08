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
        'codigo': new FormControl( this.replica.codigo,Validators.required),
        'taxon': new FormControl(this.replica.taxon,Validators.required),
        'descripcion': new FormControl(this.replica.descripcion,[Validators.required,Validators.minLength(5)]),
        'localidad': new FormControl(this.replica.localidad,Validators.required),
        'dimensiones' : new FormGroup({
          'unidadDeMedida' : new FormControl(this.replica.dimensiones.unidadDeMedida,Validators.required),
          'alto' : new FormControl(this.replica.dimensiones.alto, Validators.required),
          'ancho' : new FormControl(this.replica.dimensiones.ancho, Validators.required)
        }),
        'edad': new FormControl(this.replica.edad,[Validators.required, Validators.min(1)]),
        'colectores': new FormArray([
          new FormControl(this.replica.colectores[0],Validators.required)
        ]),
        'ubicacion': new FormGroup({
          'codRepositorio': new FormControl(this.replica.ubicacion.codRepositorio,Validators.required),
          'numEstante': new FormControl(this.replica.ubicacion.numEstante,[Validators.required,Validators.min(1)]),
          'numEstanteria': new FormControl(this.replica.ubicacion.numEstanteria,[Validators.required,Validators.min(1)])
        }), 
        'fecha': new FormControl(this.replica.fecha,Validators.required)
      });
      
      let cant = this.replica.colectores.length;
      
      for (let i =1; i < cant; i++){
        (<FormArray>this.formReplica.controls['colectores']).push(
          new FormControl(this.replica.colectores[i],Validators.required))
      }

      if (this.replica.preparador) {
        this.mostrarPreparador=true;
        this.formReplica.addControl('preparador', new FormControl(this.replica.preparador,Validators.required));
        this.formReplica.addControl('tecnicasUtilizadas', new FormControl(this.replica.tecnicasUtilizadas,Validators.required));
      }
      
      console.log(this.formReplica)
     }

  ngOnInit() {
  }
  guardarFormulario(){
    this._replicaService.agregarReplica(this.formReplica.value);
    console.log(this.formReplica.value);
    this.routes.navigate(['/home-replica']);

  }
  
  actualizarDatos(){
      this.route.params.subscribe(params => {
      this._replicaService.updateReplica(this.formReplica.value,params['id']);
      this.routes.navigate(['/home-replica']);
    })
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
  'dimensiones' : {
    'unidadDeMedida': string,
    'alto': number,
    'ancho' : number
  },
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