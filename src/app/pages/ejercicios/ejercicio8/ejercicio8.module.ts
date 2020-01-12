import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicio8PageRoutingModule } from './ejercicio8-routing.module';

import { Ejercicio8Page } from './ejercicio8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejercicio8PageRoutingModule
  ],
  declarations: [Ejercicio8Page]
})
export class Ejercicio8PageModule {}
