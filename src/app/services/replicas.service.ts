import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ReplicasService {

  constructor(private http: HttpClient) {
   }

   getReplicas(){
    return this.http.get("http://localhost:3001/api/replica",{}).pipe(map( data => data ['replicas']) );
   }

   getReplica(id: string){
    return this.http.get(`http://localhost:3001/api/replica/${id}`).pipe(map( data => data ['replica']));
   }

   agregarReplica(replica:any){
    return this.http.post("http://localhost:3001/api/replica", replica);
   }
    
   getPersonas(){
     return this.http.get("http://localhost:3001/api/persona",{}).pipe(map(data =>data['personas']));
   }

   getPersonasTermino(termino){
    return this.http.get(`http://localhost:3001/api/personasFiltro/${termino}`,{}).pipe(map(data =>data['personas']));
  }

   updateReplica(replica: any, posicion:number){
   //  this.replicas[posicion]=replica;
     
   }

}
