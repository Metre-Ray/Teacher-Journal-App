import { Component, Input, OnChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

interface IErrorList {
  [errorName: string]: (params: { [paramName: string]: string }) => string;
}

@Component({
  selector: 'app-control-error',
  templateUrl: './control-error.component.html',
  styleUrls: ['./control-error.component.scss']
})
export class ControlErrorComponent implements OnChanges {

  @Input() public errors: ValidationErrors;

  public errorList: string[] = [];
  public defaultErrorList: IErrorList = {
    required	: () 	=> `This field is required`,
    maxlength	: (params: { requiredLength: string, actualLength: string }) 	=>
      `Maximum ${params.requiredLength} characters are allowed. You've used ${params.actualLength}`,
    minlength	: (params: { requiredLength: string, actualLength: string }) 	=>
      `Minimum ${params.requiredLength} characters are required`,
    pattern	  : () 	=> `Invalid format: only letters, space, - and \` are allowed. The first character must be a letter`,
    default   : () => `Invalid field`
  };

  constructor() { }

  public ngOnChanges(): void {
    if (this.errors) {
      this.errorList = Object.keys(this.errors);
    } else {
      this.errorList = [];
    }
  }

}
