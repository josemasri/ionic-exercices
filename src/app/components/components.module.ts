import { IonicModule } from '@ionic/angular';
import { InstruccionesComponent } from './instrucciones/instrucciones.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    InstruccionesComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    InstruccionesComponent
  ]
})
export class ComponentsModule { }
