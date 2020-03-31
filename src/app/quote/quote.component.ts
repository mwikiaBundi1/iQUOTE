import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    {id:1, name:'I would rather be an artist than a leader'},
    {id:2,name:'Better late than never'},
    {id:3,name:'Unity is strength'},
    {id:4,name:'Change begins with one person'},
    {id:5,name:'Worry what your child hear from you'},
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
