import { date } from 'zod';

/* type aliases */
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => string;
};

let employee1: Employee = {
  id: 1001,
  name: 'Srijon Paul',
  retire: function (date: Date) {
    return date.toString();
  },
};
/* union types  */
function kgToLbs(weight: number | string): number {
  //  narrowing
  if (typeof weight === 'number') {
    return weight * 2.2;
  }
  return parseInt(weight) * 2.2;
}

/* intersection Types */
type Draggable = {
  drag: () => void;
};
type Resizeable = {
  resize: () => void;
};
type UIWidget = Draggable & Resizeable;

// Now we have to implement both the methods
let testBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};
/* Literal types  */
// let quantity : number ;
// Literal (exact , specific value)
let quantity: 50 | 100 = 100;
// or
type Quantity = 50 | 100;
let cocain: Quantity = 50;

type Metric = 'cm' | 'inch';

/* Optional chaining */
type Customer = {
  joiningDate?: Date;
};
function getCustomer(id: number): Customer | null {
  return id === 0
    ? null
    : {
        joiningDate: new Date(),
      };
}

let customer = getCustomer(4);
console.log(customer);
console.log(customer?.joiningDate?.getFullYear);

// optional element access operator
const customers = [4, 5, 6];
console.log(customers?.[0]);

// optional call operator

// let log: any = (message: string) => console.log(message);
let log: any = null;
log?.('a');

/* Nullish coaelscing Operator  */
let speed: number | null = null;
let ride = {
  // falsy values : null , undefined , 0 , "", false
  speed: speed ?? 30,
};
console.log(ride.speed);

/* Type Assertions */
// let phone = document.getElementById('phone') as HTMLInputElement;
// /* NOTE : NO type conversion is happening here */
// // HTMLElement
// // HTMLInputElement
// /* syntax 2  */
// let phone2 = <HTMLInputElement>document.getElementById('phone2');
// phone2.value;

/*  The Unknown Type */
function render(document: unknown) {
  // narrowing
  if (typeof document === 'string') {
    console.log(document.toUpperCase());
  }
  if (document instanceof Error) {
    console.log(document.message);
  }
}

/* never type  */
function processEvents(): never {
  while (true) {
    // read a message from a queue
  }
}
// processEvents();
function alwaysThrowError(args: string): never {
  throw new Error(); // crash the program
}
// alwaysThrowError('...');
// console.log('cocain');
