import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  eventList = new Array<string>();
  clockStr: string;

  constructor() {
    setInterval(() => this.getTime(), 1000);
  }

  ngOnInit() {

    this.eventList.push(`Lorem ipsum dolor sit amet, <s>consectetur</s> adipiscing elit. Phasellus sit amet nibh dolor.`);
    this.eventList.push(`<span>${new Date().toLocaleString()}</span> - Sed et ligula non risus ullamcorper rhoncus quis vel ante. Mauris ac facilisis ante.`);
    this.eventList.push(`Quisque vulputate porta tristique. Nulla dolor nunc, tristique tristique ipsum id, tempus mollis mauris. Etiam cursus fermentum porttitor.`);
    this.eventList.push(`<i>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<i>`);
    this.eventList.push(`Fusce a odio interdum, <a href="#">I'm Anchor</a> rutrum lorem quis, gravida tellus. Duis congue elementum quam et elementum. Suspendisse id egestas magna. Vivamus eu quam et augue volutpat iaculis at sit amet ante.`);
  }

  getTime() {
    const date = new Date();

    this.clockStr = [date.getHours(), date.getMinutes(), date.getSeconds()]
      .map(current => current >= 10 ? current : '0' + current)
      .join(':');
  }
}
