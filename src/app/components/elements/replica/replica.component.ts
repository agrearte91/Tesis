import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReplicasService } from '../../../services/replicas.service';

@Component({
  selector: 'app-replica',
  templateUrl: './replica.component.html',
  styleUrls: []
})
export class ReplicaComponent implements OnInit {

  replica: Replica;
  colectores:any;
  preparador:any;
  material;

  constructor(private route:ActivatedRoute, private _replicaService:ReplicasService) {
    this.route.params.subscribe(params => {
      this.getReplica(params['unCodigo']);
    })
   }

   getReplica(unCodigo: string) {
    this._replicaService.getReplica(unCodigo)
          .subscribe (replicaEncontrada => {
            console.log(replicaEncontrada);
            this.replica = replicaEncontrada;
            this.colectores=this.replica.colectores
            this.material=this.replica.material
          if(this.replica.preparador){
            this.preparador=this.replica.preparador
          }})
   }

  ngOnInit() {
  }


  
}

interface Replica {
  'codigo': string,
  'material': string,
  'descripcion': string,
  'localidad': string,
  'medidasReplica': {
    'alto':number,
    'ancho':number,
    'largo':number,
    'diametro'?:number,
    'circunferencia'?:number,
    'unidadDeMedida'?:string
  },
  'edad': number,
  'fechaIngreso': Date,
  'colectores': Colector[],
  'ubicacion': {
    'codRepositorio':string,
    'numEstante':number,
    'numEstanteria':number
  }
  'preparador'?: string,
  'tecnicasUtilizadas'?: string
}

interface Colector{
  'nombres': string,
  'apellidos': string,
  'dni': string
}
