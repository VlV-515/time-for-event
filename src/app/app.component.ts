import { Component } from '@angular/core';
export interface EventInterface {
  name: string;
  date: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  onSave(data: EventInterface): void {
    console.log(data);
    
  }
}
