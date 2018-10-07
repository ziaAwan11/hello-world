import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mane-tag',
  templateUrl: './mane-tag.component.html',
  styleUrls: ['./mane-tag.component.css']
})
export class ManeTagComponent implements OnInit {
  @Input() name:string;
  constructor() { }

  ngOnInit() {
  }

}
