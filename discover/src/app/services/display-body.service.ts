import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DisplayBodyService {
  adventureVisible: boolean = false;

  setVisibility(value: boolean) {
    this.adventureVisible = value;
  }
}
