import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-players',
  templateUrl: './table-players.component.html',
  styleUrls: ['./table-players.component.css'],
})
export class TablePlayersComponent implements OnInit {
  players: any = [];
  teams: any = [];
  constructor() {}

  ngOnInit(): void {
    this.getAllPlayers();
    this.getAllTeams();
  }

  getAllPlayers() {
    this.players = JSON.parse(localStorage.getItem('players') || '[]');
  }

  getAllTeams() {
    this.teams = JSON.parse(localStorage.getItem('teams') || '[]');
  }

  displayTeamName(id: any) {
    return this.teams.find((elm: any) => elm.id == id).name || '';
  }
}
