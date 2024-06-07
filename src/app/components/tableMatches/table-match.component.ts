import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-table-match',
  templateUrl: './table-match.component.html',
  styleUrls: ['./table-match.component.css'],
})
export class TableMatchComponent implements OnInit {
  matches: any = [];

  constructor(private router: Router, private mService: MatchesService) {}

  ngOnInit(): void {
    this.getAllMatches();
  }
  getAllMatches() {
    this.mService.getAllMatches().subscribe((res) => {
      this.matches = res.matches;
    });
    console.log(this.matches);
    this.matches = JSON.parse(localStorage.getItem('matches') || '[]');
  }

  deleteMatch(id: any) {
    this.mService.deleteMatch(id).subscribe((res) => {
      console.log(res.msg);
    });

    let pos;
    for (let i = 0; i < this.matches.length; i++) {
      if (this.matches[i].id === id) {
        pos = i;
        break;
      }
    }
    this.matches.splice(pos, 1);
    localStorage.setItem('matches', JSON.stringify(this.matches));
  }
  navigateTo(id: any, path: any) {
    this.router.navigate([`${path}/${id}`]);
  }
}
