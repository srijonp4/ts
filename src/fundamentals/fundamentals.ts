/* primitive types  */
let sales: number = 4_465_465_465;
let course: string = 'TypeScript';
let is_published = false;
let level; // any type can represent any kind of values
/* function render(doc) {
  console.log(doc);
} */
/* Arrays  */
let numbers = [1, 24, 4];
/* Tuples */
let user: [number, string] = [1, 'srijon'];
user[1] = 'fsd';
user.push(8978);
console.log(user);
/*  enums  */

const enum Size {
  Small = 2,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
// console.log('mySize : ', mySize);

/* function */
function calculator(income: number) {
  let x = 300;
  if (income > 50000) return 0;
  return x;
} // because js returns undefined by default

function calculateTax(income: number, taxYear = 2024): number {
  if (taxYear > 2024) {
    return income * 1.5;
  }
  return income * 1.3;
}
/* Objects  */

let employee: {
  readonly id: string;
  name?: string;
  salary: number;
  retire?: (date: Date) => string;
} = {
  id: 'c001',
  name: 'Srijon Paul',
  salary: 8000,
  retire(date: Date) {
    return date.toString();
  },
};
