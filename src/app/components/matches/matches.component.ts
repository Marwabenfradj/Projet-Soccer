import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'],
})
export class MatchesComponent implements OnInit {
  matches: any = [];
  term: any;
  sOne: any;
  sTwo: any;
  constructor() {}

  ngOnInit(): void {
    this.getAllMatches();
  }
  getAllMatches() {
    this.matches = JSON.parse(localStorage.getItem('matches') || '[]');
    console.log(this.matches);
  }

  deleteMatchParent(id: any) {
    for (let i = 0; i < this.matches.length; i++) {
      if (this.matches[i].id === id) {
        this.matches.splice(i, 1);
        break;
      }
    }

    localStorage.setItem('matches', JSON.stringify(this.matches));
  }

  myFilter() {
    this.matches = JSON.parse(localStorage.getItem('matches') || '[]');

    let filtred = [];
    for (let i = 0; i < this.matches.length; i++) {
      if (
        this.matches[i].scoreOne == this.sOne &&
        this.matches[i].scoreTwo == this.sTwo
      ) {
        filtred.push(this.matches[i]);
      }
    }
    this.matches = filtred;
    console.log(this.matches);
  }
}
