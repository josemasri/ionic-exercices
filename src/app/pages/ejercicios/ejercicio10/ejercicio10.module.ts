import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicio10PageRoutingModule } from './ejercicio10-routing.module';

import { Ejercicio10Page } from './ejercicio10.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    Ejercicio10PageRoutingModule
  ],
  declarations: [Ejercicio10Page]
})
export class Ejercicio10PageModule { }
