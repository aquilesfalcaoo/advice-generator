import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';
import { Advices } from './advices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public advices: Advices | any;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.rollDice();
  }

  rollDice() {
    this.appService.getAdvice().subscribe((res: any) => {
      this.advices = res;
    });
  }
}
