import {Component, OnDestroy, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable, Subject } from "rxjs";
import {Question} from "../../models/question.model";
import {selectUserQuestions} from "../store/user/user.selectors";
import {RootState} from "../../store/root-store";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit, OnDestroy {
  userQuestions$: Observable<Question[]> = this.store.select(selectUserQuestions)
  constructor(private store: Store<RootState>) {
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
  }

}
