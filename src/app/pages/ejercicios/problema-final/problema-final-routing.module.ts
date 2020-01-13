import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProblemaFinalPage } from './problema-final.page';

const routes: Routes = [
  {
    path: '',
    component: ProblemaFinalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProblemaFinalPageRoutingModule {}
