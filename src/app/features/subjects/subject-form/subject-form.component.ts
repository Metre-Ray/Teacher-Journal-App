import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
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

  @ViewChild('popUpContainer', {read: ViewContainerRef}) public popUp: ViewContainerRef;
  public component: ComponentRef<PopUpComponent>;
  public popUpTitle: string = 'Success!';
  public popUpText: string = 'New subject was added';
  public subscription: Subscription;

  constructor(private store: Store<State>,  private actions$: Actions, private resolver: ComponentFactoryResolver) { }

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
      ofType(ActionTypes.AddSubject)
    )
    .subscribe(() => {
      this.createPopUp(this.popUpTitle, this.popUpText, true);
    });
  }

  public onSubmit(data: {value0: string, value1: string, value2: string, value3: string}): void {
    const subject: { name: string, teacher: string, room: string, description: string } = {
      name: data.value0,
      teacher: data.value1,
      room: data.value2,
      description: data.value3
    };
    this.store.dispatch(new AddSubject(subject));
  }
}
