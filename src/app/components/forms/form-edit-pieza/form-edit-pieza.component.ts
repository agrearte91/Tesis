import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { PiezasService } from '../../../services/piezas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-edit-pieza',
  templateUrl: './form-edit-pieza.component.html',
  styleUrls: []
})
export class FormEditPiezaComponent implements OnInit {

  mostrarPreparador=false;

  pieza:Pieza;

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
    preparador:null;

    constructor(private _piezaService:PiezasService, private routes: Router, private route:ActivatedRoute) {
      
      this.route.params.subscribe(params => {
        this.pieza = this._piezaService.getPieza(params['id']);
      })
      

      this.formPieza = new FormGroup({
        'codigo': new FormControl( this.pieza.codigo,Validators.required),
        'taxon': new FormControl(this.pieza.taxon,Validators.required),
        'descripcion': new FormControl(this.pieza.descripcion,[Validators.required,Validators.minLength(5)]),
        'localidad': new FormControl(this.pieza.localidad,Validators.required),
        'dimensiones' : new FormGroup({
          'unidadDeMedida' : new FormControl(this.pieza.dimensiones.unidadDeMedida,Validators.required),
          'alto' : new FormControl(this.pieza.dimensiones.alto, Validators.required),
          'ancho' : new FormControl(this.pieza.dimensiones.ancho, Validators.required)
        }),
        'edad': new FormControl(this.pieza.edad,[Validators.required, Validators.min(1)]),
        'colectores': new FormArray([
          new FormControl(this.pieza.colectores[0],Validators.required)
        ]),
        'ubicacion': new FormGroup({
          'codRepositorio': new FormControl(this.pieza.ubicacion.codRepositorio,Validators.required),
          'numEstante': new FormControl(this.pieza.ubicacion.numEstante,[Validators.required,Validators.min(1)]),
          'numEstanteria': new FormControl(this.pieza.ubicacion.numEstanteria,[Validators.required,Validators.min(1)])
        }), 
        'fecha': new FormControl(this.pieza.fecha,Validators.required)
      });
      
      let cant = this.pieza.colectores.length;
      
      for (let i =1; i < cant; i++){
        (<FormArray>this.formPieza.controls['colectores']).push(
          new FormControl(this.pieza.colectores[i],Validators.required))
      }

      if (this.pieza.preparador) {
        this.mostrarPreparador=true;
        this.formPieza.addControl('preparador', new FormControl(this.pieza.preparador,Validators.required));
        this.formPieza.addControl('tecnicasUtilizadas', new FormControl(this.pieza.tecnicasUtilizadas,Validators.required));
      }
      
      console.log(this.formPieza)
     }

  ngOnInit() {
  }
  guardarFormulario(){
    this._piezaService.agregarPieza(this.formPieza.value);
    console.log(this.formPieza.value);
    this.routes.navigate(['/home-pieza']);

  }
  
  actualizarDatos(){
      this.route.params.subscribe(params => {
      this._piezaService.updatePieza(this.formPieza.value,params['id']);
      this.routes.navigate(['/home-pieza']);
    })
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

interface Pieza {
  'codigo': string,
  'taxon': string,
  'descripcion': string,
  'localidad': string,
  'dimensiones' : {
    'unidadDeMedida': string,
    'alto': number,
    'ancho' : number
  },
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
