import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicio12PageRoutingModule } from './ejercicio12-routing.module';

import { Ejercicio12Page } from './ejercicio12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejercicio12PageRoutingModule
  ],
  declarations: [Ejercicio12Page]
})
export class Ejercicio12PageModule {}
