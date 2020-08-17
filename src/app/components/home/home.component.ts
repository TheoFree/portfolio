import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed',[ animate('1s .5s ease-out')]),
      transition('closed => open',[ animate('0.5s .5s ease-in')])
    ]),
    trigger('changeView',[
      state('Active',style({
        display: 'flex',
        opacity: 100
      })),
      state('Inactive',style({
        display: 'none',
        opacity: 0
      })),
      transition('Active => Inactive, Inactive => Active',[animate('.5s cubic-bezier(0.83, 0, 0.17, 1)')])
    ])
  ]
})
export class HomeComponent implements OnInit {
  resumeTprojectsF = true;
  
  toggle=()=>this.resumeTprojectsF=!this.resumeTprojectsF;
  notViewed=()=>{return this.resumeTprojectsF? 'projects' : 'resume'};
  constructor() { }

  ngOnInit(): void {
  }

}
