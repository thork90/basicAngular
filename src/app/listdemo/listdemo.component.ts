import { Component } from '@angular/core';

export class EventModel {
  id: number = 0;
  name: string = "";

}
@Component({
  selector: 'app-listdemo',
  templateUrl: './listdemo.component.html',
  styleUrls: ['./listdemo.component.css']
})
export class ListDemoComponent {

  events: EventModel[] = [];
  constructor() {
    this.events = [
      {
        id: 1,
        name: 'SZIGET'
      },
      {
        id: 2,
        name: 'SZIN'
      },
      {
        id: 3,
        name: 'BALATON'
      }
    ];
    console.log('megjott a listdemo')
  }

  delete(id: number) {
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }


  add(newEventNameInput: any) {
console.log(newEventNameInput);

  }

}
