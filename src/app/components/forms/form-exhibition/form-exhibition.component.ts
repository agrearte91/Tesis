import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms'
import { PiezasService } from '../../../services/piezas.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-exhibition',
  templateUrl: './form-exhibition.component.html',
  styleUrls: []
})
export class FormExhibitionComponent implements OnInit {


  mostrarPreparador=false;
  formPieza:FormGroup;

    codigo:null
    taxon:null
    descripcion:null
    localidad:null
    unidad:null
    edad:null
    colector:any[]
    ubicacion: {
      codRepositorio: null,
      numEstante: null,
      numEstanteria: null
    }
    fecha:null
    preparador:null



  constructor(private _piezaService:PiezasService, private routes: Router) {
    console.log("estoy aca");
    this.formPieza = new FormGroup({
      'codigo': new FormControl('',Validators.required),
      'taxon': new FormControl('',Validators.required),
      'descripcion': new FormControl('',[Validators.required,Validators.minLength(5)]),
      'localidad': new FormControl('',Validators.required),
      
      'dimensiones' : new FormGroup({
        'unidadDeMedida' : new FormControl('',Validators.required),
        'alto' : new FormControl('', Validators.required),
        'ancho' : new FormControl('', Validators.required)
      }),
      'edad': new FormControl('',[Validators.required, Validators.min(1)]),
      'colectores': new FormArray([
        new FormControl('',Validators.required)
      ]),
      'ubicacion': new FormGroup({
        'codRepositorio': new FormControl('',Validators.required),
        'numEstante': new FormControl('',[Validators.required,Validators.min(1)]),
        'numEstanteria': new FormControl('',[Validators.required,Validators.min(1)])
      }), 
      'fecha': new FormControl('',Validators.required)
    });

    console.log(this.formPieza)
   }

  ngOnInit() {
  }

  guardarFormulario(){
    this._piezaService.agregarPieza(this.formPieza.value);
    console.log(this.formPieza.value);
    this.routes.navigate(['/home-pieza']);

  }

  agregarColector(){
    (<FormArray>this.formPieza.controls['colectores']).push(
      new FormControl('',Validators.required)
    )
  }

  agregarPreparador(){
    this.formPieza.addControl('preparador', new FormControl('',Validators.required));
    this.formPieza.addControl('tecnicasUtilizadas', new FormControl('',Validators.required));
  }

  quitarPreparador(){
    this.formPieza.removeControl('preparador');
    this.formPieza.removeControl('tecnicasUtilizadas');
  }

  quitarColector(i){
    const arrayControl=<FormArray>this.formPieza.controls['colectores'];
    arrayControl.removeAt(i);
 
  }
}