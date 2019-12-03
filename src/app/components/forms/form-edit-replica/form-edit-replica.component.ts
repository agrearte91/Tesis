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
  personas:any;
  replica:any;
  formReplica:FormGroup;

    constructor(private _replicaService:ReplicasService, private routes: Router, private route:ActivatedRoute) {

      this.route.params.subscribe(params => {
        this._replicaService.getReplica(params['id'])
          .subscribe(instancia => {
            this.replica = instancia;
            console.log(this.replica)

            this.formReplica = new FormGroup({
              'codigo': new FormControl( this.replica.codigo,Validators.required),
              'material': new FormControl(this.replica.material,Validators.required),
              'descripcion': new FormControl(this.replica.descripcion,[Validators.required,Validators.minLength(5)]),
              'localidad': new FormControl(this.replica.localidad,Validators.required),
              'medidasReplica' : new FormGroup({
                'unidadDeMedida' : new FormControl(this.replica.medidasReplica.unidadDeMedida,Validators.required),
                'ancho' : new FormControl(this.replica.medidasReplica.alto, Validators.required),
                'largo' : new FormControl(this.replica.medidasReplica.largo, Validators.required),
                'alto' : new FormControl(this.replica.medidasReplica.alto, Validators.required),
                'diametro' : new FormControl(this.replica.medidasReplica.diametro, Validators.required),
                'circunferencia' : new FormControl(this.replica.medidasReplica.circunferencia)
              }),
              'edad': new FormControl(this.replica.edad,[Validators.required, Validators.min(1)]),
              'colectores': new FormArray([
                new FormControl(this.replica.colectores[0].nombres+' '+this.replica.colectores[0].apellidos+' '+this.replica.colectores[0]._id,Validators .required)
              ]),
              'ubicacion': new FormGroup({
                'codRepositorio': new FormControl(this.replica.ubicacion.codRepositorio,Validators.required),
                'numEstante': new FormControl(this.replica.ubicacion.numEstante,[Validators.required,Validators.min(1)]),
                'numEstanteria': new FormControl(this.replica.ubicacion.numEstanteria,[Validators.required,Validators.min(1)])
              }), 
              'fechaIngreso': new FormControl(this.replica.fechaIngreso.substring(0,10),Validators.required)
            });
            let cant = this.replica.colectores.length;
            
            for (let i =1; i < cant; i++){
              (<FormArray>this.formReplica.controls['colectores']).push(
                new FormControl(this.replica.colectores[i].nombres+' '+this.replica.colectores[i].apellidos+' '+this.replica.colectores[i]._id,Validators.required))
            }
      
            if (this.replica.preparador) {
              this.mostrarPreparador=true;
              this.formReplica.addControl('preparador', new FormControl(this.replica.preparador,Validators.required));
              this.formReplica.addControl('tecnicasUtilizadas', new FormControl(this.replica.tecnicasUtilizadas,Validators.required));
            }
          })

      })

     }

     
  ngOnInit() {

  }

  actualizarDatos(){
    let cantColectores = this.formReplica.value.colectores.length
    for (let i=0; i < cantColectores; i++){
      let colec = this.formReplica.value.colectores[i].split(' ')
      this.formReplica.value.colectores[i]=colec[colec.length-1]
    }
    this.route.params.subscribe(params => {
        this._replicaService.updateReplica(this.formReplica.value,params['id'])
          .subscribe(replicaActualizada => {
          console.log(this.formReplica.value)
          console.log(replicaActualizada);
          this.routes.navigate(['/home-replica']);
        })

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

  buscarPersona(termino){
    this._replicaService.getPersonasTermino(termino)
      .subscribe(personas => {
        console.log(personas);
        this.personas = personas;
      })
  }

  
}