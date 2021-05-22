import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Style Binding';
  public hasError = false;
  public isSpecial = true;
  public highlight_color = "orange";
  public titleStyles ={
    color : "blue",
    fontStyle :"italic"

  }
}
