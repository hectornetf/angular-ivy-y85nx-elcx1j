import { Component, VERSION } from '@angular/core';
import { Cliente } from './Models/models/cliente.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  clientes: Cliente[];

  cliente: Cliente = {
    id: null,
    name: null,
    description: null
  }

  strName = "Hector";
  
  constructor() {}

  ngOnInit(){
    this.metodoCarregar();
  }

  metodoCarregar(): void {
    console.log("metodoCarregar")
  }

  clickSalvar():void{}
}
