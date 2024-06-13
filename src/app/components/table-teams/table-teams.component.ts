import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-table-teams',
  templateUrl: './table-teams.component.html',
  styleUrls: ['./table-teams.component.css'],
})
export class TableTeamsComponent implements OnInit {
  teams: any = [];
  constructor(private tService: TeamsService, private router: Router) {}

  ngOnInit(): void {
    this.getAllTeams();
  }

  getAllTeams() {
    this.tService.getAllTeams().subscribe((res) => {
      this.teams = res.teams;
    });
    console.log(this.teams);
  }
}
