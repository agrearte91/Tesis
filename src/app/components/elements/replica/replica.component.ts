import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReplicasService } from '../../../services/replicas.service';

@Component({
  selector: 'app-replica',
  templateUrl: './replica.component.html',
  styleUrls: []
})
export class ReplicaComponent implements OnInit {

  replica:Replica;

  constructor(private route:ActivatedRoute, private _replicaService:ReplicasService) {
    this.route.params.subscribe(params => {
      this.replica = this._replicaService.getReplica(params['id']);
    })    
   }

  ngOnInit() {
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
  'preparado'?: string,
  'tecnicasUtilizadas'?: string
}
