import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hola y bienvenido {{name}}</h1>
            <h2>Mi primer component</h2>`,
})
export class AppComponent  { name = 'Programad malditos'; }
