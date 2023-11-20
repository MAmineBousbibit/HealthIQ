import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-home-page-parent',
  templateUrl: './home-page-parent.component.html',
  styleUrls: ['./home-page-parent.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter, :leave', [
        animate(500, style({
          opacity: 1
        }))
      ])
    ])
  ]

})


export class HomePageParentComponent implements OnInit {
  currentComponent = 'homePageFirstCreat'; // Initial component

  ngOnInit() {
    interval(3000) // Switch every 3 seconds
      .subscribe(() => {
        this.toggleComponent();
      });
  }
  toggleComponent() {
    this.currentComponent = this.currentComponent === 'homePageFirstCreat' ? 'homePageSecondCreat' : 'homePageFirstCreat';
  }
}
