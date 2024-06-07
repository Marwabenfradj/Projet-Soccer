import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css'],
})
export class AddPlayerComponent implements OnInit {
  addEditPlayerForm!: FormGroup;
  player: any = {};
  id: any;
  title: string = 'ADD Player';
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private pService: PlayersService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.title = 'Edit Player';
    }
  }

  addEditPlayer() {
    if (this.id) {
      this.pService.updatePlayer(this.player).subscribe((res) => {
        console.log('here response from BE', res);
        this.router.navigate(['table-players']);
      });
    } else {
      this.pService.addPlayer(this.player).subscribe((res) => {
        console.log('here response from BE', res);
        this.router.navigate(['table-players']);
      });
    }
  }

  getPlayerById() {}
}
