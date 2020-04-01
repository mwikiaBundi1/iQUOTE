import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1,'I would rather be an artist than a leader','By Klein, 5 votes'),
    new Quote(2,'Better late than never','By Sandy, 3 votes'),
    new Quote(3,'Unity is strength','By Koin, 6 votes'),
    new Quote(4,'Change begins with one person','By Matiba, 5 votes'),
    new Quote(5,'Worry what your child hear from you', 'By Barak, 7 votes'),
  ]; 

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
