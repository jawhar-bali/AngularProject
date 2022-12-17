import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Universite } from '../Model/Universite';
@Injectable({
  providedIn: 'root',
})
export class UniversiteService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http : HttpClient) { }
  url: string = 'http://localhost:8082/kaddem/Universite';


  allUni(): Observable<any> {
    return this.http.get(this.url + `/AfficherAllUniversite`);
  }
  addUniv(universite: Universite){
    return this.http.post(`${this.url}/AjouterUniversite`, universite);
  }
 
 deleteUni(idUni: number): Observable<Object> {
    return this.http.delete(this.url + `/supprimerUniversite/${idUni}`);
  }
  getUniversiteById(idUni: number): Observable<Universite> {
    //return this.http.get<Universite>(this.url + `/universite/${idUni}`);
    return this.http.get<Universite>(this.url + `/AfficherUniversite/${idUni}`);
  } 
  updateUni(universite: Universite ): Observable<Universite> {
    return this.http.put<Universite>(this.url + `/ModifierUniversite/`,universite );
  }
  
  
}
