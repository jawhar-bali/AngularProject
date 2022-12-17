import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/core/Model/Department';
import { DepartmentService } from 'src/app/core/services/department.service';


@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {
  department: Department;
  action: string;
  departmentList: Department[];

  constructor(private departmentService: DepartmentService,
    private route: Router,
    private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.department = new Department();
    let id = this.currentRoute.snapshot.params['id'];
    if (id != null) {
      //update
      this.action = 'update';
      this.departmentService.getDepartmentById(id).subscribe((data: Department) => {
        this.department = data;
      });
      console.log('=================>' + this.department);
    } else {
      //add
      this.action = 'add new';
      this.department = new Department();
    }

    //get
    this.departmentService.getAlldep().subscribe((data: Department[]) => {
      this.departmentList = data;
    });
  }

  //add|update
  add() {
    if (this.action == 'update') {
      console.log(this.department)
      this.departmentService
        .addDepartment(this.department)
        .subscribe((result) => {
          if (result) {
            this.route.navigate(['/departments/Department/list'])
            this.departmentList = [this.department, ...this.departmentList];
            //location.reload();
          }
        });
        
    } else {
      console.log('this.department:', this.department);
      this.departmentService.addDepartment(this.department).subscribe((result) => {
        if (result) {
          this.route.navigate(['/departments/Department/list'])
          this.departmentList = [this.department, ...this.departmentList];
          //location.reload();
        }
      });
    }
  }

  //delete
  delete() {
    this.departmentService.deleteDepartment(this.department.idDepart);
  }
  //navigate
  goToDepartmentList() {
    this.route.navigate(['/departments/Department/list']);
  }
}


