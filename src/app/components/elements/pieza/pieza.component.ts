import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PiezasService } from '../../../services/piezas.service';

@Component({
  selector: 'app-pieza',
  templateUrl: './pieza.component.html',
  styleUrls: []
})
export class PiezaComponent implements OnInit {

  pieza:Pieza;

  constructor(private route:ActivatedRoute, private _piezaService:PiezasService) {
    this.route.params.subscribe(params => {
      this.pieza = this._piezaService.getPieza(params['id']);
    })    
   }

  ngOnInit() {
  }


  
}

interface Pieza {
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
