import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesComponent } from './classes.component';
import { ListClasseComponent } from './list-classe/list-classe.component';
import { FormClasseComponent } from './form-classe/form-classe.component';


@NgModule({
  declarations: [
    ClassesComponent,
    ListClasseComponent,
    FormClasseComponent
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    FormsModule
  ]
})
export class ClassesModule { }
