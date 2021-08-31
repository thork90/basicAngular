import { Component } from '@angular/core';
import { EventModel } from './event-model';


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
        name: 'SZIGET',
        pic: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Sziget_Magyar_Dal.jpg'
      },
      {
        id: 2,
        name: 'SZIN',
        pic: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Sziget_Magyar_Dal.jpg'
      },
      {
        id: 3,
        name: 'BALATON',
        pic: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Sziget_Magyar_Dal.jpg'
      }
    ];
    console.log('megjott a listdemo')
  }

  delete(id: number) {
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }


  add(newEventNameInput: HTMLInputElement) {
    this.events = [...this.events, new EventModel(5, newEventNameInput.value)];
    newEventNameInput.value = "";

  }

}
