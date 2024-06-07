import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css'],
})
export class MatchDetailComponent implements OnInit {
  id: any;
  match: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private mService: MatchesService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // get id from path
    //appel service
    this.mService.getMatchById(this.id).subscribe((data) => {
      console.log('here response from BE ', data.match);
      this.match = data.match;
    });
  }

  // getMatchById() {
  //   let matches = JSON.parse(localStorage.getItem('matches') || '[]');
  //   for (let i = 0; i < matches.length; i++) {
  //     if (matches[i].id == this.id) {
  //       this.match = matches[i];
  //     }
  //   }
  // }
}
