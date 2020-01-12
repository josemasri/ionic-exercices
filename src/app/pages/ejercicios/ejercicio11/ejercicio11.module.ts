import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicio11PageRoutingModule } from './ejercicio11-routing.module';

import { Ejercicio11Page } from './ejercicio11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejercicio11PageRoutingModule
  ],
  declarations: [Ejercicio11Page]
})
export class Ejercicio11PageModule {}
