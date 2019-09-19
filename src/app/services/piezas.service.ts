import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PiezasService {

  private piezas: any[] = [
    {'codigo':'codigo 1',
     'taxon':'taxon 1',
     'descripcion':"descripcion 1",
     'localidad':'localidad 1',
     'unidad':'unidad 1',
     'edad': '1',
     'fecha': '2012-12-12',
     'colectores':['juan','Antonio','Manolo'],
     'ubicacion':{
       'codRepositorio':'repositorio 1',
       'numEstante':1,
       'numEstanteria':2
     },
     'preparador':'hola',
     'tecnicasUtilizadas':'hola'
    },
    {'codigo':'codigo 2',
     'taxon':'taxon 2',
     'descripcion':"descripcion 2",
     'localidad':'localidad 2',
     'unidad':'unidad 2',
     'edad': '2',
     'fecha': '2012-12-12',
     'colectores':['juan'],
     'ubicacion':{
       'codRepositorio':'repositorio 2',
       'numEstante':2,
       'numEstanteria':2
     }
     
    },
    {'codigo':'codigo 3',
    'taxon':'taxon 3',
    'descripcion':"descripcion 3",
    'localidad':'localidad 3',
    'unidad':'unidad 3',
    'edad': '3',
    'fecha': '2012-12-12',
    'colectores':['Antonio','Manolo'],
    'ubicacion':{
      'codRepositorio':'repositorio 3',
      'numEstante':3,
      'numEstanteria':3
    },
    'preparador':'',
    'tecnicasUtilizadas':''
   },
   {'codigo':'codigo 4',
   'taxon':'taxon 4',
   'descripcion':"descripcion 4",
   'localidad':'localidad 4',
   'unidad':'unidad 4',
   'edad': '4',
   'fecha': '2012-12-12',
   'colectores':[],
   'ubicacion':{
     'codRepositorio':'repositorio 4',
     'numEstante':4,
     'numEstanteria':4
   },
   'preparador':'',
   'tecnicasUtilizadas':''
  },
  {'codigo':'codigo 5',
  'taxon':'taxon 5',
  'descripcion':"descripcion 5",
  'localidad':'localidad 5',
  'unidad':'unidad 5',
  'edad': '5',
  'fecha': '2012-12-12',
  'colectores':['juan','Antonio','Manolo'],
  'ubicacion':{
    'codRepositorio':'repositorio 5',
    'numEstante':5,
    'numEstanteria':5
  },
  'preparador':'',
  'tecnicasUtilizadas':''
 },
 {'codigo':'codigo 6',
 'taxon':'taxon 6',
 'descripcion':"descripcion 6",
 'localidad':'localidad 6',
 'unidad':'unidad 6',
 'edad': '6',
 'fecha': '2012-12-12',
 'colectores':['Manolo'],
 'ubicacion':{
   'codRepositorio':'repositorio 6',
   'numEstante':6,
   'numEstanteria':6
 },
 'preparador':'',
 'tecnicasUtilizadas':''
},
{'codigo':'codigo 7',
'taxon':'taxon 7',
'descripcion':"descripcion 7",
'localidad':'localidad 7',
'unidad':'unidad 7',
'edad': '7',
'fecha': '2012-12-12',
'colectores':['juan','Antonio','Manolo'],
'ubicacion':{
  'codRepositorio':'repositorio 7',
  'numEstante':7,
  'numEstanteria':7
},
'preparador':'',
'tecnicasUtilizadas':''
},
{'codigo':'codigo 8',
'taxon':'taxon 8',
'descripcion':"descripcion 8",
'localidad':'localidad 8',
'unidad':'unidad 8',
'edad': '8',
'fecha': '2012-12-12',
'colectores':['juan','Antonio','Manolo'],
'ubicacion':{
  'codRepositorio':'repositorio 8',
  'numEstante':8,
  'numEstanteria':8
},
'preparador':'',
'tecnicasUtilizadas':''
},
{'codigo':'codigo 9',
'taxon':'taxon 9',
'descripcion':"descripcion 9",
'localidad':'localidad 9',
'unidad':'unidad 9',
'edad': '9',
'fecha': '2012-12-12',
'colectores':['juan','Antonio','Manolo'],
'ubicacion':{
  'codRepositorio':'repositorio 9',
  'numEstante':9,
  'numEstanteria':9
},
'preparador':'',
'tecnicasUtilizadas':''
},
{'codigo':'codigo 10',
'taxon':'taxon 10',
'descripcion':"descripcion 10",
'localidad':'localidad 10',
'unidad':'unidad 10',
'edad': '10',
'fecha': '2012-12-12',
'colectores':['juan','Antonio','Manolo'],
'ubicacion':{
  'codRepositorio':'repositorio 10',
  'numEstante':10,
  'numEstanteria':20
},
'preparador':'',
'tecnicasUtilizadas':''
},
{'codigo':'codigo 11',
'taxon':'taxon 11',
'descripcion':"descripcion 11",
'localidad':'localidad 11',
'unidad':'unidad 11',
'edad': '11',
'fecha': '2012-12-12',
'colectores':['juan','Antonio','Manolo'],
'ubicacion':{
  'codRepositorio':'repositorio 11',
  'numEstante':11,
  'numEstanteria':11
},
'preparador':'',
'tecnicasUtilizadas':''
}
  ];

  constructor() {
   }

   getPiezas(){
    return this.piezas;
   }

   getPieza(id: string){
    return this.piezas[id];
   }

   agregarPieza(pieza:any){
     this.piezas.push(pieza);
   }

   updatePieza(pieza: any, posicion:number){
     this.piezas[posicion]=pieza;
     
   }

}
