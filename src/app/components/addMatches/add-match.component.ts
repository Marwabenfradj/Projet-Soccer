import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css'],
})
export class AddMatchComponent implements OnInit {
  id: any;
  match: any = {};
  addEditMatchForm!: FormGroup;
  title: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private mService: MatchesService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.title = 'Edit Match';
      this.mService.getMatchById(this.id).subscribe((res) => {
        this.match = res.match;
      });
    }
  }

  addEditMatch() {
    // let T = JSON.parse(localStorage.getItem('matches') || '[]');
    if (this.id) {
      //rani fil edit

      // this.mService.updateMatch(this.id, this.match).subscribe((response) => {
      //   console.log('here response from BE', response);
      // });
      // this.router.navigate(['table-matches']);

      this.mService.updateMatch(this.match).subscribe((response) => {
        this.router.navigate(['table-match']);
      });

      // for (let i = 0; i < T.length; i++) {
      //   if (T[i].id == this.id) {
      //     T[i] = this.match;
      //     break;
      //   }
      // }
    } else {
      //rani fil Add

      this.mService.addMatch(this.match).subscribe((response) => {
        console.log('here response from BE', response);
        this.router.navigate(['table-match']);
      });
    }
    // this.match.id = T.length === 0 ? 0 : T.at(-1).id + 1;
    // T.push(this.match);
  }

  getMatchById() {
    this.mService.getMatchById(this.match.id).subscribe((result: any) => {
      console.log(result.matchById);
    });

    // let matches = JSON.parse(localStorage.getItem('matches') || '[]');

    // this.match = matches.find((elm: any) => elm.id == this.id);
  }
}
