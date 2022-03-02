import { FormEventInterface } from '../interfaces/event.interface';
import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { BehaviorSubject, Observable } from 'rxjs';
import { EventFormatInterface } from '../interfaces/event.interface';
@Injectable({
  providedIn: 'root',
})
export class EventService {
  private listEvents: EventFormatInterface[] = [];
  private listEvents$ = new BehaviorSubject<EventFormatInterface[]>([]);
  getListEvents(): Observable<EventFormatInterface[]> {
    return this.listEvents$.asObservable();
  }
  addEvent(event: FormEventInterface): void {
    const { tittle, date } = event;
    const { days } = DateTime.fromISO(date).diffNow('days');
    this.listEvents.push({
      tittle,
      date,
      days: Math.round(days) + 1,
    });
    this.listEvents$.next(this.listEvents);
  }
  deleteEvent(index: number): void {
    this.listEvents.splice(index, 1);
    this.listEvents$.next(this.listEvents);
  }
}
