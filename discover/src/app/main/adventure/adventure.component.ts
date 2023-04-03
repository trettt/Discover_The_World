import { Component } from '@angular/core';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss'],
})
export class AdventureComponent {
  clicked: boolean = false;

  discoverButtonClicked() {
    this.clicked = true;
  }
}
