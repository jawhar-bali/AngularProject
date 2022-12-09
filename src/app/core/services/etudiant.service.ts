import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../Model/Etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  public uri = 'http://localhost:8082/kaddem/Etudiant';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  getAllEtudiant() {
    return this.http.get<Etudiant[]>(this.uri + '/AfficherAllEtudiant');
   // return this.http.get<Etudiant[]>('http://localhost:8082/kaddem/Etudiant/AfficherAllEtudiant');
  }
  addEtudiant(e: Etudiant) {
    //console.log('c:==================> ', c);
    return this.http.post(this.uri + `/AjouterEtudiant`, e);
  }
  updateEtudiant(e: Etudiant): Observable<Object> {
    return this.http.put<Etudiant>(this.uri + '/ModifierEtudiant', e);
  }
  getEtudiantById(id: number) {
    return this.http.get<Etudiant>(this.uri + `/AfficherEtudiant/${id}`);
  }
  deleteEtudiant(id: number): Observable<Object> {
    return this.http.delete(this.uri + `/supprimerEtudiant/${id}`);
  }
}
