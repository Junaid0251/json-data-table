import { Component } from '@angular/core';


interface userData{
  Name:string,
  Age:number,
  Gender:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simpleTable';

}
