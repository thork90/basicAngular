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
        id: 2,
        name: 'SZIGET',
        pic: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Sziget_Magyar_Dal.jpg'
      },
      {
        id: 3,
        name: 'SZIN',
        pic: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Sziget_Magyar_Dal.jpg'
      },
      {
        id: 1,
        name: 'BALATON',
        pic: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Sziget_Magyar_Dal.jpg'
      }
    ];
    console.log('megjott a listdemo')
    const puf = this.events.reduce((x, y) => {
      //   if (x.id > y.id) {
      //     return x;
      //   } else {
      //     return y;
      //   }
      return x.id > y.id ? x : y;
    }).id

    console.log(puf);
  }

  delete(id: number) {
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }


  add(newEventNameInput: HTMLInputElement) {
    const maxId = this.events.reduce((x, y) => x.id > y.id ? x : y).id;
    this.events = [...this.events, new EventModel(maxId+1, newEventNameInput.value)];
    newEventNameInput.value = "";

  }

}
