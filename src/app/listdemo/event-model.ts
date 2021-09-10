export class EventModel {
    id: number = 0;
    name: string = "";
    pic?: string = "";
  




    constructor(name: string, id = 0, pic = '') {
      //Object.assign  constructor()
      this.id = id;
      this.name = name;
      this.pic = pic;
    }
  }