import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from 'src/app/core/Model/Universite';
import {UniversiteService}from 'src/app/core/services/universite.service'


@Component({
  selector: 'app-create-universite',
  templateUrl: './create-universite.component.html',
  styleUrls: ['./create-universite.component.css']
})
export class CreateUniversiteComponent implements OnInit {

  universite: Universite;
  action: string;
  universiteList: Universite[];

  constructor(private universiteService: UniversiteService,
    private route: Router,
    private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.universite = new Universite();
    let id = this.currentRoute.snapshot.params['id'];
    if (id != null) {
      //update
      this.action = 'update';
      this.universiteService.getUniversiteById(id).subscribe((data: Universite) => {
        this.universite = data;
      });
      console.log('=================>' + this.universite);
    } else {
      //add
      this.action = 'add new';
      this.universite = new Universite();
    }

    //get
    this.universiteService.allUni().subscribe((data: Universite[]) => {
      this.universiteList = data;
    });
  }

  //add|update
  add() {
    if (this.action == 'update') {
      console.log(this.universite)
      this.universiteService
        .addUniv(this.universite)
        .subscribe((result) => {
          if (result) {
            this.route.navigate(['/universites/universite'])
            this.universiteList = [this.universite, ...this.universiteList];
            //location.reload();
          }
        });
        
    } else {
      console.log('this.universite:', this.universite);
      this.universiteService.addUniv(this.universite).subscribe((result) => {
        if (result) {
          this.route.navigate(['/universites/universite'])
          this.universiteList = [this.universite, ...this.universiteList];
          //location.reload();
        }
      });
    }
  }

  //delete
  delete() {
    this.universiteService.deleteUni(this.universite.idUniv);
  }
  //navigate
  goToUniversiteList() {
    this.route.navigate(['/universites/Universite/list']);
  }
}


