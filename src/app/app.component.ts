import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  RandomArray = [];
  number1;
  number2;
  number3;
  number5;
  number6;
  number7;
  number9;
  number10;
  number11;
  maxTime = 10;
  isFormVisible = false;
  ngOnInit() {
    this.showForm();
    this.changeNumber();
  }
  changeNumber() {
    setInterval(() => {
      for (let i = 0; i < 12; i++) {
        this.number1 = Math.floor(Math.random() * 10);
        this.number2 = Math.floor(Math.random() * 10);
        this.number3 = Math.floor(Math.random() * 10);
        this.number5 = Math.floor(Math.random() * 10);
        this.number6 = Math.floor(Math.random() * 10);
        this.number7 = Math.floor(Math.random() * 10);
        this.number9 = Math.floor(Math.random() * 10);
        this.number10 = Math.floor(Math.random() * 10);
        this.number11 = Math.floor(Math.random() * 10);
      }
    }, 10000);
  }
  showForm() {
    setInterval(() => {
      if (this.maxTime <= 0) {
        this.isFormVisible = true;
      } else {
        this.maxTime--;
      }
    }, 1000);
  }
}



