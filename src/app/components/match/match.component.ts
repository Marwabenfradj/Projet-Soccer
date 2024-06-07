import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css'],
})
export class MatchComponent implements OnInit {
  @Input() match: any;
  @Output() passId = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  deleteMatchChild() {
    this.passId.emit(this.match.id);
  }
  compare(a: any, b: any) {
    if (Number(a) > Number(b)) {
      return ['Win', 'green'];
    } else if (Number(a) < Number(b)) {
      return ['Loss', 'red'];
    } else {
      return ['Draw', 'yellow'];
    }
  }
}
