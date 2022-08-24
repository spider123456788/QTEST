import {Component, OnDestroy, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable, Subject, tap} from "rxjs";
import {Question} from "../../models/question.model";
import {selectAnsweredQuestions, selectUnansweredQuestions} from "../store/user/user.selectors";
import {RootState} from "../../store/root-store";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit, OnDestroy {
  userAnsweredQuestions$: Observable<Question[]> = this.store.select(selectAnsweredQuestions)
  userUnansweredQuestions$: Observable<Question[]> = this.store.select(selectUnansweredQuestions)
  constructor(private store: Store<RootState>, private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit(): void {

  }

  ngOnDestroy() {
  }

  answer(question: Question) {
    this.router.navigate([question.title], {relativeTo: this.route})
  }
}
