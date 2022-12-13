import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from 'src/app/core/Model/Projet';
import { ProjetService } from 'src/app/core/services/projet.service';

@Component({
  selector: 'app-form-projet',
  templateUrl: './form-projet.component.html',
  styleUrls: ['./form-projet.component.css']
})
export class FormProjetComponent implements OnInit {
  projet: Projet;
  action: string;
  projetList: Projet[];

  constructor(private projetService: ProjetService,
    private route: Router,
    private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.projet = new Projet();
    let id = this.currentRoute.snapshot.params['id'];
    if (id != null) {
      //update
      this.action = 'update';
      this.projetService.getProjetById(id).subscribe((data: Projet) => {
        this.projet = data;
      });
      console.log('=================>' + this.projet);
    } else {
      //add
      this.action = 'add new';
      this.projet = new Projet();
    }

    //get
    this.projetService.getAllProjet().subscribe((data: Projet[]) => {
      this.projetList = data;
    });
  }

  //add|update
  add() {
    if (this.action == 'update') {
      this.projetService
        .updateProjet(this.projet)
        .subscribe(() => console.log('complete'));
        location.reload();
    } else {
      console.log('this.etufiant:', this.projet);
      this.projetService.addProjet(this.projet).subscribe((result) => {
        if (result) {
          this.route.navigate(['/projets/ProjetList'])
          this.projetList = [this.projet, ...this.projetList];
          //location.reload();
        }
      });
    }
  }

  //delete
  delete() {
    this.projetService.deleteProjet(this.projet.idProjet);
  }
  //navigate
  goToProjetList() {
    this.route.navigate(['/projets/ProjetList']);
  }

  }


