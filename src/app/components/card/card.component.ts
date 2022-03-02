import { EventFormatInterface } from './../../interfaces/event.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() dataEvent!: EventFormatInterface;
  @Output() deleteNdx = new EventEmitter<null>();
}
