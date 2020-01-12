import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejercicio10Page } from './ejercicio10.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejercicio10PageRoutingModule {}
