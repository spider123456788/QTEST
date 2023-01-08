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
      a, aa = 0, ab, ac = su, ad, as = ye, af, ag, ah,
      b;

    y = ye*12;

    m = 0;

    for (i = 0; i<= ye; i++) {
      m += i;
    };
    ad = as / m;
    for (i = 0; i< y; i++) {
      d1.push([i, su/y]);
      //pervie 12 mes
      if (i%12 === 0) {
        ac = ac - aa;
        aa = 0;
        ad = as-- / m
      }
      if(i> 0 ){
        a = (ac/ye)*(ko/12);
        aa += a
        b = su*ad;
      }
      // if(i > 12 ){
      //   b = (su*2/(m))/12;
      //   ab = a? (su-a)/ye*ko: (su-b)/ye*ko;
      //   a = ab/12;
      // }
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
