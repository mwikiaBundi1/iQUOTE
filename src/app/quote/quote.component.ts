import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})

export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1,'I would rather be an artist than a leader','By Klein, 5 votes',new Date(2016,3,14)),
    new Quote(2,'Better late than never','By Sandy, 3 votes',new Date(2019,6,9)),
    new Quote(3,'Unity is strength','By Koin, 6 votes',new Date(2018,1,12)),
    new Quote(4,'Change begins with one person','By Matiba, 5 votes',new Date(2019,0,18)),
    new Quote(5,'Worry what your child hear from you', 'By Barak, 7 votes',new Date(2019,2,14)),
  ]; 

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
      // addNewQuote(this.quote){
      //   // let goalLength = this.quotes.length;
      //   quote.id = goalLength+1;
      //   quote.completeDate = new Date(quote.completeDate)
      //   this.quotes.push(this.quotes)

    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
