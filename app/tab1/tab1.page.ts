import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}
ngOnInit(): void {
  console.log('Bienvenido a los mensajes de consola');
 // debugger;
  let numero= 10;
  if(numero= 10){
    console.log('esta malo');
  }
  numero= 20;
  console.log('el numero ganador es -->'+ numero);
}


}
