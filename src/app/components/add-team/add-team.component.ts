import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css'],
})
export class AddTeamComponent implements OnInit {
  team: any = {};
  addTeamForm!: FormGroup;
  id: any;
  title: string = 'ADD Team';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tService: TeamsService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.title = 'Edit Team';
    }
  }

  addTeam() {
    if (this.id) {
      this.tService.addTeam(this.team).subscribe((res) => {
        console.log('here response from BE', res);
        this.router.navigate(['table-teams']);
      });
    } else {
      this.tService.addTeam(this.team).subscribe((res) => {
        console.log('here response from BE', res);
        this.router.navigate(['table-teams']);
      });
    }
  }
}
