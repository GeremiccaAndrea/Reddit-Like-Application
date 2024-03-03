  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    title = 'app';
    ris : Number
    vettore : Number[] = [];

    
    Addizione(num1 : HTMLInputElement, num2 : HTMLInputElement): boolean{
        this.ris = Number(num1.value) + Number(num2.value);

      return false
    }
    
    Sottrazione(num1 : HTMLInputElement, num2 : HTMLInputElement): boolean{
      this.ris = Number(num1.value) - Number(num2.value);

    return false
  }

    Moltiplicazione(num1 : HTMLInputElement, num2 : HTMLInputElement): boolean{
      this.ris = Number(num1.value) * Number(num2.value);

  return false
  }

  Divisione(num1 : HTMLInputElement, num2 : HTMLInputElement): boolean{
    this.ris = Number(num1.value) / Number(num2.value);

  return false
  }
  }
