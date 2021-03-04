import { Component, OnInit } from '@angular/core';
import { ReplicasService } from 'src/app/services/replicas.service';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home-replica',
  templateUrl: './home-replica.component.html',
  styleUrls: ['./home-replica.component.css']
})
export class HomeReplicaComponent implements OnInit {
  
  replicas: any;
  
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private _replicasService:ReplicasService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language:{
        'processing':     'Procesando...',
                    "lengthMenu":     "Mostrar _MENU_ registros",
                    "zeroRecords":    "No se encontraron resultados",
                    "emptyTable":     "Ningún dato disponible en esta tabla =(",
                    "info":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                    "infoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                    "infoFiltered":   "(filtrado de un total de _MAX_ registros)",
                    "infoPostFix":    "",
                    "search":         "Buscar:",
                    "url":            "",
                    "loadingRecords": "Cargando...",
                    "paginate": {
                        "first":    "Primero",
                        "last":     "Último",
                        "next":     "Siguiente",
                        "previous": "Anterior"
                    },
                    "aria": {
                        "sortAscending":  ": Activar para ordenar la columna de manera ascendente",
                        "sortDescending": ": Activar para ordenar la columna de manera descendente"
                    }
    }
    };
      this._replicasService.getReplicas()
            .subscribe (replicasEncontrada => {
              console.log(replicasEncontrada);
              this.replicas = replicasEncontrada;
            this.dtTrigger.next()})
  }

}


