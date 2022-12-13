import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classes.component';
import { FormClasseComponent } from './form-classe/form-classe.component';
import { ListClasseComponent } from './list-classe/list-classe.component';

const routes: Routes = [{ path: '', component: ClassesComponent },
{ path: 'ClasseList', component: ListClasseComponent },
{ path: 'FormClasse', component: FormClasseComponent },
{ path: 'addClasse', component: FormClasseComponent },
{ path: 'updateClasse/:id', component: FormClasseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
