import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProblemaFinalPageRoutingModule } from './problema-final-routing.module';

import { ProblemaFinalPage } from './problema-final.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ProblemaFinalPageRoutingModule
  ],
  declarations: [ProblemaFinalPage]
})
export class ProblemaFinalPageModule { }
