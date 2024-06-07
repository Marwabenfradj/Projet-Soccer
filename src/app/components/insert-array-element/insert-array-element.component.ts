import { Component } from '@angular/core';

@Component({
  selector: 'app-insert-array-element',
  templateUrl: './insert-array-element.component.html',
  styleUrls: ['./insert-array-element.component.css'],
})
export class AppComponent {
  T: any = [5, 6, 7, 8, 9];
  valeur: any;
  position: number = 0;

  insertElement() {
    if (this.position >= 0 && this.position <= this.T.length) {
      this.T.splice(this.position, 0, this.valeur);
      this.valeur = '';
    } else {
      console.error(
        'Invalid position. Please enter a value between 0 and',
        this.T.length
      );
    }
  }
}
