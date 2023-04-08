import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss'],
})
export class AdventureComponent {
  @Input() header: string = '';
  @Output() showTheBody = new EventEmitter<void>();
}
