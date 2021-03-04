import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms'
import { ReplicasService } from '../../../services/replicas.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-form-replica',
  templateUrl: './form-replica.component.html',
  styleUrls: []
})
export class FormReplicaComponent implements OnInit {
  
  operacionExitosa=false;
  mostrarPreparador=false;
  formReplica:FormGroup;
  personas:[] = [];
  
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



  constructor(private _replicaService:ReplicasService, private routes: Router) {
    console.log("estoy aca");
    this.formReplica = new FormGroup({
      'codigo': new FormControl('',Validators.required),
      'material': new FormControl('',Validators.required),
      'descripcion': new FormControl('',[Validators.required,Validators.minLength(5)]),
      'localidad': new FormControl('',Validators.required),
      
      'medidasReplica' : new FormGroup({
        'unidadDeMedida' : new FormControl('',Validators.required),
        'ancho' : new FormControl('', Validators.required),
        'largo' : new FormControl('', Validators.required),
        'alto' : new FormControl('', Validators.required),
        'diametro' : new FormControl('', Validators.required),
        'circunferencia' : new FormControl('',)
      }),
      'edad': new FormControl('',[Validators.required, Validators.min(1)]),
      'colectores': new FormArray([
        new FormControl('',Validators.required)
      ]),
      'ubicacion': new FormGroup({
        'codRepositorio': new FormControl('',Validators.required),
        'numEstante': new FormControl('',[Validators.required,Validators.min(1)]),
        'numEstanteria': new FormControl('',[Validators.required,Validators.min(1)])
      }), 
      'fechaIngreso': new FormControl('',Validators.required)
    });

    console.log(this.formReplica)
   }

  ngOnInit() {
  }

  guardarFormulario(){
    let cantColectores = this.formReplica.value.colectores.length
    for (let i=0; i < cantColectores; i++){
      let colec = this.formReplica.value.colectores[i].split(' ')
      this.formReplica.value.colectores[i]=colec[colec.length-1]
    }

    this._replicaService.agregarReplica(this.formReplica.value)
      .subscribe(nuevaReplica => {
        console.log(nuevaReplica);
      });
      this.operacionExitosa=true;
    //this.routes.navigate(['/home-replica']);

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
  
  buscarPersona(termino){
    this._replicaService.getPersonasTermino(termino)
      .subscribe(personas => {
        console.log(personas);
        this.personas = personas;
      })
  }
}
