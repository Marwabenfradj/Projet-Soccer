import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-table-players',
  templateUrl: './table-players.component.html',
  styleUrls: ['./table-players.component.css'],
})
export class TablePlayersComponent implements OnInit {
  players: any = [];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private pService: PlayersService
  ) {}

  ngOnInit(): void {
    this.getAllPlayers();
  }

  getAllPlayers() {
    this.pService.getAllPlayers().subscribe((res) => {
      this.players = res.players;
    });
    console.log(this.players);
  }

  // displayTeamName(id: any) {
  //   return this.teams.find((elm: any) => elm.id == id).name || '';
  // }
}
