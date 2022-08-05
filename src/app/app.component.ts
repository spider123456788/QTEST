import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {getUser} from "./store/user/user.actions";
import {UserState} from "./store/user/user.reducer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'Questionaire';

  constructor(private store: Store<UserState>) {
  }

  ngOnInit() {
    this.store.dispatch(getUser());

  }
}
