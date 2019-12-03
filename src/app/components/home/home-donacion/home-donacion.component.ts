import { Component, OnInit } from '@angular/core';
import { DonacionesService } from '../../../services/donaciones.service';
import { PersonasService } from '../../../services/personas.service';

@Component({
  selector: 'app-home-donacion',
  templateUrl: './home-donacion.component.html',
  styleUrls: []
})
export class HomeDonacionComponent implements OnInit {
  
  donaciones:any;
  persona:any;
  constructor(private _donacionService: DonacionesService, private _personasService:PersonasService) { }

  ngOnInit() {
    this._donacionService.getDonaciones()
    .subscribe(donacionesEncotradas => {
      this.donaciones = donacionesEncotradas;
    });
  }

  getActor(id){
    this._personasService.getPersonaId(id)
    .subscribe(persona => {
      this.persona = persona;
    });
  }
}
