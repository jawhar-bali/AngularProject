import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetsComponent } from './projets.component';
import { FormProjetComponent } from './form-projet/form-projet.component';
import { ListProjetComponent } from './list-projet/list-projet.component';

const routes: Routes = [{ path: '', component: ProjetsComponent },
{ path: 'ProjetList', component: ListProjetComponent },
{ path: 'FormProjet', component: FormProjetComponent },
{ path: 'addProjet', component: FormProjetComponent },
{ path: 'updateProjet/:id', component: FormProjetComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetsRoutingModule { }
