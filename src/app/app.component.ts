import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styles: [`
  .success{
    color:green;
    text-align:center;
  }
  `],
  template: `
  <div class="success"> <h1> Applying CSS and HTML inside .ts file </h1> </div>
  `
})
export class AppComponent {
  title = 'Marvellous Infosystem';
}
