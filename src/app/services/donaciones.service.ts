import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DonacionesService {

  constructor(private http: HttpClient) { }

  getDonaciones(){
    return this.http.get("http://localhost:3001/api/donacion",{}).pipe(map( data => data ['donaciones']) );
  }

}