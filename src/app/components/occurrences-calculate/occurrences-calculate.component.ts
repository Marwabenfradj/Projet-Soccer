import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/core';

@Component({
  selector: 'app-occurrences-calculate',
  templateUrl: './occurrences-Calculate.component.html',
  styleUrls: ['./occurrences-Calculate.component.css'],
})
export class AppComponent implements OnInit {
  occurrencesCalculate!: FormGroup;
  Text: string = '';
  searchFor: any = {};
  occurrenceCount: number = 0;

  constructor() {}
  ngOnInit(): void {}

  OccurrencesCalculate() {
    this.occurrenceCount = 0;
    for (let i = 0; i < this.Text.length; i++) {
      if (
        this.Text.substring(i, i + this.searchFor.length) === this.searchFor
      ) {
        this.occurrenceCount + 1;
      }
    }
  }
}
