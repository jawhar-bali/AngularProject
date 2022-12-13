import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjetsRoutingModule } from './projets-routing.module';
import { ProjetsComponent } from './projets.component';
import { ListProjetComponent } from './list-projet/list-projet.component';
import { FormProjetComponent } from './form-projet/form-projet.component';


@NgModule({
  declarations: [
    ProjetsComponent,
    ListProjetComponent,
    FormProjetComponent
  ],
  imports: [
    CommonModule,
    ProjetsRoutingModule,
    FormsModule
  ]
})
export class ProjetsModule { }
