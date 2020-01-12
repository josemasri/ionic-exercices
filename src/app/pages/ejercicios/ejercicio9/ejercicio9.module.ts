import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicio9PageRoutingModule } from './ejercicio9-routing.module';

import { Ejercicio9Page } from './ejercicio9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejercicio9PageRoutingModule
  ],
  declarations: [Ejercicio9Page]
})
export class Ejercicio9PageModule {}
