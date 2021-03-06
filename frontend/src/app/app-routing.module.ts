import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanningComponent } from './planning/planning.component';
import { RedirectComponent } from './redirect/redirect.component'

const routes: Routes = [
  {path: '', component: PlanningComponent},
  {path: 'redirect', component: RedirectComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
