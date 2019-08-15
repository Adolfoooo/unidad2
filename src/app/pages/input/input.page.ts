import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  public destinatario:string;
  public mensaje:string;
  constructor() { }

  ngOnInit() {
  }
show(mensaje: string, destinatario:string){
this.mensaje = mensaje;

console.log(mensaje);
}
}
