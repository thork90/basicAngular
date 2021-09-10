import { Component } from '@angular/core';
import { EventModel } from './event-model';


@Component({
  selector: 'app-listdemo',
  templateUrl: './listdemo.component.html',
  styleUrls: ['./listdemo.component.css']
})
export class ListDemoComponent {

  events: EventModel[] = [];
  modifyEvent: EventModel;

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
    this.modifyEvent = new EventModel('');
  }

  delete(id: number) {
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }

  edit(id: number) {
    // HA biztos hogy van ilyen
    //HA tudom hogy mindig CSAK 1 ilyen van
    this.modifyEvent = this.events.filter((ev) => ev.id === id)[0];
  }

  save(newEventNameInput: HTMLInputElement, newEventPicInput: HTMLInputElement) {
    if (this.modifyEvent.id === 0) {

      //új elem létrehozása
      const maxId = this.events.reduce((x, y) => x.id > y.id ? x : y).id;
      this.events = [...this.events, new EventModel(newEventNameInput.value, maxId + 1, newEventPicInput.value)];

    } else {
      //edit
      this.events = this.events.map((ev) => {
        if (ev.id === this.modifyEvent.id) {
          //itt tudjuk, hogy ezt az elemet kell szerkeszteni
          return {
            id: ev.id,
            name: newEventNameInput.value,
            pic: newEventPicInput.value
          };

        } else {
          //itt tudjuk hogy nem akarunk módosítani
          return ev;
        }
      });
      //takarítsuk fel magunk után
      this.modifyEvent = new EventModel('');
    }

    newEventNameInput.value = "";
    newEventPicInput.value = "";


  }

}
