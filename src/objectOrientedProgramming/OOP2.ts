import { setDefaultResultOrder } from 'dns';

class SeatAssignment {
  // A1 : string ;
  // a2 :string ;
  /* index signature property */
  [seatNumber: string]: string;
}
let seats = new SeatAssignment();
seats.A1 = 'Srijon';
seats.A2 = 'Kaberi';
seats['cooo2'] = 'chandan paul';
// console.log(seats['cooo2']);

/* static members */
class Ride {
  private static _activeRides: number = 0;
  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }
  static get activeRides() {
    return Ride._activeRides;
  }
}

const ride1 = new Ride();
ride1.start();
// console.log(Ride.activeRides);

/* inheritance */

class Person {
  constructor(public firstName: string, public lastName: string) {}
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
  walk() {
    console.log('walking');
  }
}

class Student extends Person {
  constructor(firsName: string, lastName: string, public studentId: number) {
    super(firsName, lastName);
    this.studentId = studentId;
  }
  taketest = () => {
    console.log('taking test');
  };
}
const student = new Student('Srijon', 'Paul', 4525);
student.walk();
student.taketest();

class Teacher extends Person {
  override get fullName() {
    return 'Professor ' + super.fullName;
  }
}
let teacher = new Teacher('Kaberi', 'Paul');
console.log(teacher.fullName);

// Polymorphism

const people = [
  new Student('srijon', 'Paul', 101),
  new Teacher('Kaberi', 'Paul'),
];

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

printNames(people);

/* Abstract classes and Methods  */
abstract class Shape {
  constructor(public color: string) {}
  abstract render(): void; // can only exist inside abstract classes
}
class Circle extends Shape {
  constructor(color: string, public radius: number) {
    super(color);
    this.radius = radius;
  }
  override render(): void {
    console.log('rendering a circle');
  }
}

let circleShape = new Circle('red', 20);

console.log(circleShape.color);
