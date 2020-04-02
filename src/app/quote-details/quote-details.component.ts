import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote} from '../quote';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.scss']
})
export class QuoteDetailsComponent implements OnInit {

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  @Input() quote:Quote;
  numberOflikes=0;
  numberOfdislike=0


  likebuttonclick(){
    this.numberOflikes ++;
  }
  dislikebuttonclick(){
  this.numberOfdislike --;
  }
  
  @Output() isComplete = new EventEmitter<boolean>();
 quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

// import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';
// import { Quote} from '../quote';
// @Component({
// selector: 'app-quote-details',
// templateUrl: './quote-details.component.html',
// styleUrls: ['./quote-details.component.css']
// })
// export class QuoteDetailsComponent implements OnInit {
// @Input() quote: Quote;
// @Output() isComplete = new EventEmitter<boolean>();
// quoteDelete(complete:boolean){
// this.isComplete.emit(complete)
// }
// likes(){
// this.quote.likes+=1;
// }
// dislikes(){
// this.quote.dislikes+=1;
// }
// constructor() { }
// ngOnInit(): void {
// }
// }