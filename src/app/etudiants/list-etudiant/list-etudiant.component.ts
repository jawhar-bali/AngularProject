import { Component, OnInit, ElementRef , ViewChild } from '@angular/core';
import { Etudiant } from 'src/app/core/Model/Etudiant';
import { EtudiantService } from 'src/app/core/services/etudiant.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {
  @ViewChild('content', { static: false }) el!: ElementRef;

  etudiant: Etudiant;
  etudiantList: Etudiant[];

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.etudiant = new Etudiant();
    //getEtudiants
    this.etudiantService.getAllEtudiant().subscribe((data: Etudiant[]) => {
      this.etudiantList = data;
    });
  }

  delete(id: number) {
    this.etudiantService.deleteEtudiant(id).subscribe((data) => {
      console.log(data);
      this.etudiantService.getAllEtudiant();
      location.reload();
    
  })
}
 //updateEtudiant
 update() {}
 makePDF() {
    
  let pdf = new jsPDF('p', 'pt', 'a4');
  pdf.html(this.el.nativeElement, {
    callback: (pdf) => {
      pdf.save('Liste des etudiants.pdf');
    },
  });
}
}
 
