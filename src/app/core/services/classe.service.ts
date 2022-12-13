import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classe } from '../Model/Classe';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  public uri = 'http://localhost:8082/kaddem/Classe';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  getAllClasse() {
    return this.http.get<Classe[]>(this.uri + '/AfficherAllClasse');
   // return this.http.get<Etudiant[]>('http://localhost:8082/kaddem/Etudiant/AfficherAllEtudiant');
  }
  addClasse(e: Classe) {
    //console.log('c:==================> ', c);
    return this.http.post(this.uri + `/AjouterClasse`, e);
  }
  updateClasse(e: Classe): Observable<Object> {
    return this.http.put<Classe>(this.uri + '/ModifierClasse', e);
  }
  getClasseById(id: number) {
    return this.http.get<Classe>(this.uri + `/AfficherClasse/${id}`);
  }
  deleteClasse(id: number): Observable<Object> {
    return this.http.delete(this.uri + `/supprimerClasse/${id}`);
  }
}
