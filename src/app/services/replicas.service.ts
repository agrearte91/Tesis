import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReplicasService {

  private replicas: any[] = [
    {'codigo':'codigo 1',
     'taxon':'taxon 1',
     'descripcion':"descripcion 1"
    },
    {'codigo':'codigo 2',
     'taxon':'taxon 2',
     'descripcion':"descripcion 2"
    },
    {'codigo':'codigo 3',
     'taxon':'taxon 3',
     'descripcion':"descripcion 3"
    },
    {'codigo':'codigo 4',
     'taxon':'taxon 4',
     'descripcion':"descripcion 4"
    },
    {'codigo':'codigo 5',
     'taxon':'taxon 5',
     'descripcion':"descripcion 5"
    },
    {'codigo':'codigo 6',
     'taxon':'taxon 6',
     'descripcion':"descripcion 6"
    },
    {'codigo':'codigo 7',
     'taxon':'taxon 7',
     'descripcion':"descripcion 7"
    },
    {'codigo':'codigo 8',
     'taxon':'taxon 8',
     'descripcion':"descripcion 8"
    },
    {'codigo':'codigo 9',
     'taxon':'taxon 9',
     'descripcion':"descripcion 9"
    },
    {'codigo':'codigo 10',
     'taxon':'taxon 10',
     'descripcion':"descripcion 10"
    },
    {'codigo':'codigo 11',
     'taxon':'taxon 11',
     'descripcion':"descripcion 11"
    },
    {'codigo':'codigo 12',
     'taxon':'taxon 12',
     'descripcion':"descripcion 12"
    },
    {'codigo':'codigo 13',
     'taxon':'taxon 13',
     'descripcion':"descripcion 13"
    },
    {'codigo':'codigo 14',
     'taxon':'taxon 14',
     'descripcion':"descripcion 14"
    }
  ];

  constructor() {
   }

   getReplicas(){
    return this.replicas;
   }

   getReplica(id: string){
    return this.replicas[id];
   }

   agregarReplica(replica:any){
     this.replicas.push(replica);
   }

}
