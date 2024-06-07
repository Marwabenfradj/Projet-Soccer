import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css'],
})
export class AddTeamComponent implements OnInit {
  team: any = {};
  addTeamForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {}

  addTeam() {
    console.log(this.team);
    let T = JSON.parse(localStorage.getItem('teams') || '[]');
    this.team.id = T.length === 0 ? 0 : T.at(-1).id + 1;
    T.push(this.team);
    localStorage.setItem('teams', JSON.stringify(T));
  }
}
