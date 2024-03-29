import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  leftDice = "../assets/img/dice1.png";
  rightDice = "../assets/img/dice2.png";
  number1 = 1;
  number2 = 2;

  throwDice(): void {
    this.number1 = Math.round(Math.random() * 5) + 1;
    this.number2 = Math.round(Math.random() * 5) + 1;
    this.leftDice = "../assets/img/dice" + this.number1 + ".png";
    this.rightDice = "../assets/img/dice" + this.number2 + ".png";
  }

}
