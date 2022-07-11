import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cng project';
  fluid=''

  bx(event:Event){
    this.fluid= (<HTMLInputElement>event.target).value;
  }
}
