import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projet } from '../Model/Projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  public uri = 'http://localhost:8082/kaddem/Projet';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  getAllProjet() {
    return this.http.get<Projet[]>(this.uri + '/AfficherAllProjet');
   // return this.http.get<Etudiant[]>('http://localhost:8082/kaddem/Etudiant/AfficherAllEtudiant');
  }
  addProjet(e: Projet) {
    //console.log('c:==================> ', c);
    return this.http.post(this.uri + `/AjouterProjet`, e);
  }
  updateProjet(e: Projet): Observable<Object> {
    return this.http.put<Projet>(this.uri + '/modifierProjet', e);
  }
  getProjetById(id: number) {
    return this.http.get<Projet>(this.uri + `/AfficherProjet/${id}`);
  }
  deleteProjet(id: number): Observable<Object> {
    return this.http.delete(this.uri + `/supprimerProjet/${id}`);
  }
}
