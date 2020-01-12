import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejercicio8Page } from './ejercicio8.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejercicio8PageRoutingModule {}
