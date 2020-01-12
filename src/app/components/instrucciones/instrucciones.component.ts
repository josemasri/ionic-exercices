import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.component.html',
  styleUrls: ['./instrucciones.component.scss'],
})
export class InstruccionesComponent implements OnInit {
  @Input() numEj = 1;
  @Input() instrucciones: string;

  constructor() { }

  ngOnInit() { }

}
