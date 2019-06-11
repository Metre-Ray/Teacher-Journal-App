import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/reducers';
import { AddSubject, ActionTypes } from 'src/app/redux/actions/actions';
import { PopUpComponent } from 'src/app/shared/components/pop-up/pop-up.component';
import { Subscription } from 'rxjs';
import { ofType, Actions } from '@ngrx/effects';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit {

  @ViewChild('popUpContainer', {read: ViewContainerRef}) popUp: ViewContainerRef;
  component: ComponentRef<PopUpComponent>;
  subscription: Subscription;

  constructor(private store: Store<State>,  private actions$: Actions, private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.subscription = this.actions$.pipe(
      ofType(ActionTypes.AddSubject)
    )
    .subscribe(() => {
      const title = 'Success!';
      const text = 'New subject was added';
      const success = true;
      this.createPopUp(title, text, success);
    });
  }

  onSubmit(data: {value0: string, value1: string, value2: string, value3: string}) {
    const subject = {
      name: data.value0,
      teacher: data.value1,
      room: data.value2,
      description: data.value3
    };
    this.store.dispatch(new AddSubject(subject));
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
}
