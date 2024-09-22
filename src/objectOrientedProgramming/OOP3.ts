/* interfaces  */
// class Calender {
//   constructor(public name : string) {

//   }
//   addEvent() {}
//   removeEvent(){}
// }

// abstract class Calender {
//   constructor(public name: string) {}
//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

interface Calender {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalender extends Calender {
  sync(): void;
}

class GoogleCalender implements CloudCalender {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sync(): void {
    throw new Error('Method not implemented.');
  }
  addEvent(): void {
    throw new Error('Method not implemented.');
  }
  removeEvent(): void {
    throw new Error('Method not implemented.');
  }
}
