import { Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import { ComponentFactoryResolver, ComponentRef, ComponentFactory } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/reducers';
import { AddStudent } from 'src/app/redux/actions/actions';
import { Actions, ofType } from '@ngrx/effects';
import { ActionTypes } from '../../../redux/actions/actions';
import { PopUpComponent } from 'src/app/shared/components/pop-up/pop-up.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit, OnDestroy {

  @ViewChild('popUpContainer', {read: ViewContainerRef}) public popUp: ViewContainerRef;
  public component: ComponentRef<PopUpComponent>;
  public subscription: Subscription;

  constructor(private store: Store<State>, private actions$: Actions, private resolver: ComponentFactoryResolver) { }

  private createPopUp(title: string, text: string, success: boolean): void {
    const factory: ComponentFactory<PopUpComponent> = this.resolver.resolveComponentFactory(PopUpComponent);
    this.component = this.popUp.createComponent(factory);
    this.component.instance.title = title;
    this.component.instance.text = text;
    this.component.instance.success = success;
    setTimeout(() => {
      this.component.destroy();
    },         2000);
  }

  public ngOnInit(): void {
    this.subscription = this.actions$.pipe(
      ofType(ActionTypes.AddStudent)
    )
    .subscribe(() => {
      const title: string = 'Success!';
      const text: string = 'New student was added';
      const success: boolean = true;
      this.createPopUp(title, text, success);
    });
  }

  public onSubmit(event: {value0: string, value1: string, value2: string, value3: string}): void {
    const data: {name: string, lastName: string, address: string, description: string} = {
      name: event.value0,
      lastName:  event.value1,
      address: event.value2,
      description: event.value3
    };
    this.store.dispatch(new AddStudent(data));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
