import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  @Input() title = 'TITLE';
  @Input() text = 'Amazing text';
  @Input() success = false;

  constructor() { }

  ngOnInit() {
  }

}
