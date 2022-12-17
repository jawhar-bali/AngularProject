import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from 'src/app/core/Model/Universite';
import { UniversiteService } from 'src/app/core/services/universite.service';


@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.css']
})
export class ListUniversiteComponent implements OnInit {
  universite: Universite;
  universiteList: Universite[];

  constructor(private universiteService: UniversiteService) { }

  ngOnInit(): void {
    this.universite = new Universite();
    //getUniversites
    this.universiteService.allUni().subscribe((data: Universite[]) => {
      this.universiteList = data;
    });
  }

  delete(id: number) {
    this.universiteService.deleteUni(id).subscribe((data) => {
      console.log(data);
      this.universiteService.allUni();
      location.reload();
 
  })
}
 //updateUniversite
 update() {}
    
  }
 
  


