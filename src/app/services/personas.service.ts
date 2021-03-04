import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, retryWhen } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { }

  getPersonas(){
    return this.http.get("http://localhost:3001/api/persona",{}).pipe(map(data =>data['personas']));
  }

  getPersonasTermino(termino){
   return this.http.get(`http://localhost:3001/api/personasFiltro/${termino}`,{}).pipe(map(data =>data['personas']));
 }

 getPersonaId(id){
  return this.http.get(`http://localhost:3001/api/personaId/${id}`,{}).pipe(map(data =>data['personaId']));
 }
}
