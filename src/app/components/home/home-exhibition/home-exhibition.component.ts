import { Component, OnInit } from '@angular/core';
import { PiezasService } from 'src/app/services/piezas.service';

@Component({
  selector: 'app-home-exhibition',
  templateUrl: './home-exhibition.component.html',
  styleUrls: ['./home-exhibition.component.css']
})
/** export class HomeExhibitionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/
export class HomeExhibitionComponent implements OnInit {
  
  piezas: any [] = [];
  
  dtOptions: DataTables.Settings = {};

  constructor(private _piezasService:PiezasService) { }

  ngOnInit() {
    this.dtOptions ={
      
    }
    this.piezas= this._piezasService.getPiezas();
  }

}






