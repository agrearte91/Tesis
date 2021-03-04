import { Component, OnInit } from '@angular/core';
import { PiezasService } from 'src/app/services/piezas.service';

@Component({
  selector: 'app-home-loan',
  templateUrl: './home-loan.component.html',
  styleUrls: ['./home-loan.component.css']
})

export class HomeLoanComponent implements OnInit {
  
  piezas: any [] = [];
  
  dtOptions: DataTables.Settings = {};

  constructor(private _piezasService:PiezasService) { }

  ngOnInit() {
    this.dtOptions ={
      
    }
    this.piezas= this._piezasService.getPiezas();
  }

}







