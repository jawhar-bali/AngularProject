import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/core/Model/Department';
import { Observable } from "rxjs";
import { DepartmentService } from 'src/app/core/services/department.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {
  @ViewChild('content', { static: false }) el!: ElementRef;
  department: Department;
  departmentList: Department[];

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.department = new Department();
    //getDepartments
    this.departmentService.getAlldep().subscribe((data: Department[]) => {
      this.departmentList = data;
    });
  }

  delete(id: number) {
    this.departmentService.deleteDepartment(id).subscribe((data) => {
      console.log(data);
      this.departmentService.getAlldep();
      location.reload();
 
  })
}
 //updateDepartment
 update() {}
 makePDF() {
    
  let pdf = new jsPDF('p', 'pt', 'a4');
  pdf.html(this.el.nativeElement, {
    callback: (pdf) => {
      pdf.save('Liste des departements.pdf');
    },
  });
}
   
}
