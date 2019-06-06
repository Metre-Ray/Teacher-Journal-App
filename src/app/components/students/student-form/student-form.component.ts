import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, OnDestroy } from '@angular/core';
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

  @ViewChild('popUpContainer', {read: ViewContainerRef}) popUp: ViewContainerRef;
  component: ComponentRef<PopUpComponent>;
  subscription: Subscription;

  constructor(private store: Store<State>, private actions$: Actions, private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.subscription = this.actions$.pipe(
      ofType(ActionTypes.AddStudent)
    )
    .subscribe(() => {
      const title = 'Success!';
      const text = 'New student was added';
      const success = true;
      this.createPopUp(title, text, success);
    });
  }

  onSubmit(event) {
    const data = {
      name: event.value0,
      surname:  event.value1,
      address: event.value2,
      description: event.value3
    };
    this.store.dispatch(new AddStudent(data));
  }

  createPopUp(title: string, text: string, success: boolean) {
    const factory = this.resolver.resolveComponentFactory(PopUpComponent);
    this.component = this.popUp.createComponent(factory);
    this.component.instance.title = title;
    this.component.instance.text = text;
    this.component.instance.success = success;
    setTimeout(() => {
      this.component.destroy();
    }, 2000);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
