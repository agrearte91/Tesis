import { Component, OnInit } from '@angular/core';
import { PiezasService } from 'src/app/services/piezas.service';

@Component({
  selector: 'app-home-pieza',
  templateUrl: './home-pieza.component.html',
  styleUrls: ['./home-pieza.component.css']
})
export class HomePiezaComponent implements OnInit {
  
  piezas: any [] = [];
  
  dtOptions: DataTables.Settings = {};

  constructor(private _piezasService:PiezasService) { }

  ngOnInit() {
    this.dtOptions ={
      
    }
    this.piezas= this._piezasService.getPiezas();
  }

}