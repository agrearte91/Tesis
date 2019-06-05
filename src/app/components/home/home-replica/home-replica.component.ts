import { Component, OnInit } from '@angular/core';
import { ReplicasService } from 'src/app/services/replicas.service';

@Component({
  selector: 'app-home-replica',
  templateUrl: './home-replica.component.html',
  styleUrls: ['./home-replica.component.css']
})
export class HomeReplicaComponent implements OnInit {
  
  replicas: any [] = [];
  
  dtOptions: DataTables.Settings = {};

  constructor(private _replicasService:ReplicasService) { }

  ngOnInit() {
    this.dtOptions ={
      
    }
    this.replicas= this._replicasService.getReplicas();
  }

}


