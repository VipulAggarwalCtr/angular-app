import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app';

  someHighLevelFunc(arg1: number, arg2: number) {
    const sum = arg1 + arg2;
    const diff = Math.abs(arg1 - arg2);
    const product = arg1 * arg2;
    const division = arg1 / arg2;

    return { sum, product, diff, division };
  }
}
