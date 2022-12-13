import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Classe } from 'src/app/core/Model/Classe';
import { ClasseService } from 'src/app/core/services/classe.service';

@Component({
  selector: 'app-form-classe',
  templateUrl: './form-classe.component.html',
  styleUrls: ['./form-classe.component.css']
})
export class FormClasseComponent implements OnInit {
  classe: Classe;
  action: string;
  classeList: Classe[];

  constructor(private classeService: ClasseService,
    private route: Router,
    private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.classe = new Classe();
    let id = this.currentRoute.snapshot.params['id'];
    if (id != null) {
      //update
      this.action = 'update';
      this.classeService.getClasseById(id).subscribe((data: Classe) => {
        this.classe = data;
      });
      console.log('=================>' + this.classe);
    } else {
      //add
      this.action = 'add new';
      this.classe = new Classe();
    }

    //get
    this.classeService.getAllClasse().subscribe((data: Classe[]) => {
      this.classeList = data;
    });
  }

  //add|update
  add() {
    if (this.action == 'update') {
      this.classeService
        .updateClasse(this.classe)
        .subscribe(() => console.log('complete'));
        location.reload();
    } else {
      console.log('this.etufiant:', this.classe);
      this.classeService.addClasse(this.classe).subscribe((result) => {
        if (result) {
          this.route.navigate(['/classes/ClasseList'])
          this.classeList = [this.classe, ...this.classeList];
          //location.reload();
        }
      });
    }
  }

  //delete
  delete() {
    this.classeService.deleteClasse(this.classe.idClasse);
  }
  //navigate
  goToClasseList() {
    this.route.navigate(['/classes/ClasseList']);
  }

  }


