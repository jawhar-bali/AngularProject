import { Component, OnInit } from '@angular/core';
import { Classe } from 'src/app/core/Model/Classe';
import { ClasseService } from 'src/app/core/services/classe.service';

@Component({
  selector: 'app-list-classe',
  templateUrl: './list-classe.component.html',
  styleUrls: ['./list-classe.component.css']
})
export class ListClasseComponent implements OnInit {

  classe: Classe;
  classeList: Classe[];

  constructor(private classeService: ClasseService) { }

  ngOnInit(): void {
    this.classe = new Classe();
    //getEtudiants
    this.classeService.getAllClasse().subscribe((data: Classe[]) => {
      this.classeList = data;
    });
  }

  delete(id: number) {
    this.classeService.deleteClasse(id).subscribe((data) => {
      console.log(data);
      this.classeService.getAllClasse();
      location.reload();
    
  })
}
 //updateEtudiant
 update() {}

}
 
