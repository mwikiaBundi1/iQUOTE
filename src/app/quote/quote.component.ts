import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    {id:1, name:'I would rather be an artist than a leader',description:'By Klein, 5 votes'},
    {id:2,name:'Better late than never',description:'By Sandy, 3 votes'},
    {id:3,name:'Unity is strength', description:'By Koin, 6 votes'},
    {id:4,name:'Change begins with one person',description:'By Matiba, 5 votes'},
    {id:5,name:'Worry what your child hear from you',description: 'By Barak, 7 votes'},
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}