import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/core/Model/Projet';
import { ProjetService } from 'src/app/core/services/projet.service';

@Component({
  selector: 'app-list-projet',
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.css']
})
export class ListProjetComponent implements OnInit {

  projet: Projet;
  projetList: Projet[];

  constructor(private projetService: ProjetService) { }

  ngOnInit(): void {
    this.projet = new Projet();
    //getEtudiants
    this.projetService.getAllProjet().subscribe((data: Projet[]) => {
      this.projetList = data;
    });
  }

  delete(id: number) {
    this.projetService.deleteProjet(id).subscribe((data) => {
      console.log(data);
      this.projetService.getAllProjet();
      location.reload();
    
  })
}
 //updateEtudiant
 update() {}

}
 
