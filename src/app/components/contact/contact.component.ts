import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
count: number =0
path: string="https://brandslogos.com/wp-content/uploads/images/large/angular-icon-logo.png"
  constructor() { }

  ngOnInit(): void {
  }

}
