import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-teams',
  templateUrl: './table-teams.component.html',
  styleUrls: ['./table-teams.component.css'],
})
export class TableTeamsComponent implements OnInit {
  teams: any = [];
  constructor() {}

  ngOnInit(): void {
    this.getAllteams();
  }

  getAllteams() {
    this.teams = JSON.parse(localStorage.getItem('teams') || '[]');
  }
}
