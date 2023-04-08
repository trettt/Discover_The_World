import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss'],
})
export class AdventureComponent {
  @Output() showTheBody = new EventEmitter<void>();
}
