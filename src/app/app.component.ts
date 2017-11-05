import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  emails = [
    {email:'apple@pie.com', importance: true, subject:'Fresh Pies', content:'Will be baking some fresh pies soon!'},
    {email:'orange@pie.com', importance: false, subject:'New PievFlavor', content:'Experimental Pie flavor to make!'},
    {email:'berry@pie.com', importance: true, subject:'Berry Flavored Pie', content:'This will be a  good tasting flavor!'},
    {email:'kiwi@pie.com', importance: false, subject:'A Strange Flavor', content:'For those to like to adventure..'}
  ]
}
