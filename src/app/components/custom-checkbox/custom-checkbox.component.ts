import { Component, OnInit, Input, Host, HostListener } from '@angular/core';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss']
})
export class CustomCheckboxComponent implements OnInit {

  @Input() id: string;
  @Input() name: string;
  @Host() comp: CustomCheckboxComponent;
  checked = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('click') click() {
    this.checked = !this.checked;
  }

  isChecked() {
    return this.checked;
  }

}
