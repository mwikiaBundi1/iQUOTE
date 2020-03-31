import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  quotes:string[];

  constructor(){
    this.quotes = ['I would rather be an artist than a leader', 'Better late than never', 'Unity is strength']
  } 
}

