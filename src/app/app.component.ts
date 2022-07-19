import { Component, VERSION } from '@angular/core';
import { Cliente } from './Models/cliente.model';

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

  public selectOptions = [
    "Masculino",
    "Feminino"
  ];

  public selectedOption = "";

  myProperty = false;

  contacts = [
    { id: 1, name: "Contact 001", description: "Contact 001 des", email: "c001@email.com" },
    { id: 2, name: "Contact 002", description: "Contact 002 des", email: "c002@email.com" },
    { id: 3, name: "Contact 003", description: "Contact 003 des", email: "c003@email.com" },
    { id: 4, name: "Contact 004", description: "Contact 004 des", email: "c004@email.com" }
  ];

  constructor() {}

  ngOnInit(){
  }

  clickSalvar(): void {
    console.log("cliquei no botão salvar: " + this.cliente.name + " ==> " + this.cliente.description);
  }

  clearName() {
    this.cliente.name = "";
    this.cliente.description = "";
  }

}
