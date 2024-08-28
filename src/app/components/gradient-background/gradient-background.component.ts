import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-gradient-background',
  template: `
    <StackLayout class="background-gradient">
      <ng-content></ng-content>
    </StackLayout>`,
  styleUrls: ['./gradient-background.component.scss']
})
export class GradientBackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
