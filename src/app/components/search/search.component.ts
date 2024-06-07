import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  id: any;
  searchMatch: any = {};
  searchForm!: FormGroup;

  title: string = 'search';
  constructor(private mService: MatchesService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  search() {
    this.mService.search(this.searchMatch).subscribe((res) => {
      console.log('here response from BE', res);
    });
  }
}
