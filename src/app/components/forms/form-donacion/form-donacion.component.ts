import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-donacion',
  templateUrl: './form-donacion.component.html',
  styleUrls: []
})
export class FormDonacionComponent implements OnInit {

  formDonacion:FormGroup
  fecha:Date;
  recibida;
  constructor() {
    this.fecha = new Date();
    let valorFecha= this.fecha.getFullYear()+'-'+this.fecha.getUTCMonth()+'-'+this.fecha.getDate()
    
    this.formDonacion = new FormGroup({
      'fecha' : new FormControl(valorFecha,Validators.required),
      'descripcion': new FormControl('',[Validators.required,Validators.minLength(5)]),
      'tipo': new FormControl('',[Validators.required, Validators.pattern("^(Recibir|Realizar)$")]),
      'actor': new FormControl('',[Validators.required])
    });
    
    console.log(this.formDonacion)
  }

  ngOnInit() {
  }
}
