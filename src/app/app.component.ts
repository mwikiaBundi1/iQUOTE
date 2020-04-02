import { Component } from '@angular/core';
import { Quote} from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  quotes:Quote[] = [
    new Quote(1,'I would rather be an artist than a leader','By Klein, 5 votes',new Date(2016,3,14)),
    new Quote(2,'Better late than never','By Sandy, 3 votes',new Date(2019,6,9)),
    new Quote(3,'Unity is strength','By Koin, 6 votes',new Date(2018,1,12)),
    new Quote(4,'Change begins with one person','By Matiba, 5 votes',new Date(2019,0,18)),
    new Quote(5,'Worry what your child hear from you', 'By Barak, 7 votes',new Date(2019,2,14)),
  ]; 
}

