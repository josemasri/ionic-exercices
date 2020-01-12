import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejercicio12Page } from './ejercicio12.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejercicio12PageRoutingModule {}
