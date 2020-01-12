import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejercicio11Page } from './ejercicio11.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejercicio11PageRoutingModule {}
