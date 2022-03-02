import {
  FormEventInterface,
  EventFormatInterface,
} from './interfaces/event.interface';
import { EventService } from './services/event.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  arrEvents: EventFormatInterface[] = [];
  constructor(readonly eventSvc: EventService) {
    this.eventSvc.getListEvents().subscribe((data) => {
      this.arrEvents = data;
    });
  }
  onSave(data: FormEventInterface): void {
    this.eventSvc.addEvent(data);
  }
  onDelete(index: number): void {
    this.eventSvc.deleteEvent(index);
  }
}
