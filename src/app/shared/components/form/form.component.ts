import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() label1: string;
  @Input() label2: string;
  @Input() label3: string;
  @Input() label4: string;
  @Input() place1: string;
  @Input() place2: string;
  @Input() place3: string;
  @Input() place4: string;


  constructor() { }

  ngOnInit() {
  }

}
