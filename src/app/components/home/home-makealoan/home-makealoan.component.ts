import { Component, OnInit } from '@angular/core';
import { PiezasService } from 'src/app/services/piezas.service';

@Component({
  selector: 'app-home-makealoan',
  templateUrl: './home-makealoan.component.html',
  styleUrls: ['./home-makealoan.component.css']
})
 export class HomeMakealoanComponent implements OnInit {
    
    piezas: any [] = [];
    
    dtOptions: DataTables.Settings = {};
  
    constructor(private _piezasService:PiezasService) { }
  
    ngOnInit() {
      this.dtOptions ={
        
      }
      this.piezas= this._piezasService.getPiezas();
    }
  
  }
