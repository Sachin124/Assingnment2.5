import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 styles:[`
 .success{
   color:green;
   text-align: center;
 }
 `],
 template:`
 <div><h1 class="success">Welcome To Marvellous Infosystem</h1></div>`
})
export class AppComponent {
  title = 'Inside The Root Component';
}
