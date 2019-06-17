import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {

  @Input() public title: string = 'TITLE';
  @Input() public text: string = 'Amazing text';
  @Input() public success: boolean = false;
}
