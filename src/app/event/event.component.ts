import { Component } from "@angular/core";

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['event.component.css']
})

export class EventComponent{
    title = 'Abrakadabra';

constructor(){
    console.log(`${this.title} ez most folytatódik a consturkotrban`);
this.greetings();
}

greetings(){
    console.log('console log greetings');
}


}