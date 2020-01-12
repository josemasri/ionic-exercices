import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejercicio9Page } from './ejercicio9.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejercicio9PageRoutingModule {}
