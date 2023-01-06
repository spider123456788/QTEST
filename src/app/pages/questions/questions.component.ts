import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Question} from "../../models/question.model";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.sass']
})
export class QuestionsComponent implements OnInit {
  //questions$: Observable<Question[]> = this._store.select(selectQuestions)
  Highcharts = Highcharts;
  linechart1: any = null;
  plotrData: any;

  constructor(private _store: Store,
              private router: Router,
              private fb: FormBuilder,
              ) {
    this.plotrData= this.fb.group({
      price: [null],
      term: [null],
      acceleration: [null],
    })
  }
  ngOnInit(): void {
    console.log('there')
  }

  answer(question: Question) {
    console.log(question)
    this.router.navigate([`/questions/${question.title}`])
  }

  onSubmit() {
    let
      su = this.plotrData.get('price').value,
      ye = this.plotrData.get('term').value,
      ko = this.plotrData.get('acceleration').value,
      d1 = [],
      d2 = [],
      d3 = [],
      graph,
      i,
      m,
      y,
      a, aa, ab, ac, ad, ae, af, ag, ah,
      b;

    y = ye*12;

    m = 0;

    for (i = ye; i> 0; i--) {
      m = m+i;
    };

    for (i = y; i> 0; i--) {
      d1.push([i, su/y]);
      if(i> 0 ){
        aa = su/ye*ko;
        a = aa/12;
        b = (su*1/(m))/12;
      }
      if(i> 12 ){
        b = (su*2/(m))/12;
        ab = a? (su-a)/ye*ko: (su-b)/ye*ko;
        a = ab/12;
      }
      d2.push([i, a]);
      d3.push([i, b]);
    }
    this.linechart1 = {
      series: [
        {
          label: 'Linear Method',
          data: d1,
        },
        {
          data: d2,
        },
        {
          data: d3
        }
      ],
      chart: {
        type: 'line',
      },
      title: {
        text: 'linechart',
      },
    };

  }
}
