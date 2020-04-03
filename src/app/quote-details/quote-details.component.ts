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
  clickCounter: number=0;
  clickCounter1:number=0;
 
  constructor() { }

  ngOnInit(): void {
  }
countLikeclick() {
  this.clickCounter+=1;
}
countDislikeclick() {
  this.clickCounter1 +=1;
}
  @Output() isComplete = new EventEmitter<boolean>();
 quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

}
