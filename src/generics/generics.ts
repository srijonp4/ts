/* Generic Classess */
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}
let pair = new KeyValuePair<number, string>(1, 'Apple');
console.log(pair.key.toString());

/* Generic Fuctions */
function wrapInArray<T>(value: T) {
  return [value];
}
let stringArray = wrapInArray('Hello, World!');
let numberArray = wrapInArray(45);

/* Generic Interfaces  */
interface User {
  username: string;
}
// interface Product {
//   title: string;
// }
interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  return {
    data: null,
    error: null,
  };
}

const result = fetch<User>('url');
result.data?.username;

function echo<T extends number | string>(value: T): T {
  return value;
}
function print<T extends { name: string }>(value: T): T {
  return value;
}
interface Person {
  name: string;
  age?: number;
}
const testPrint = <T extends Person>(val: T) => {
  console.log(val.name);
};
class Employee {
  constructor(private readonly _eid: number, public name: string) {}
  get eid() {
    return this._eid;
  }
}
const testPrint2 = <T extends Employee>(val: T) => {
  console.log(val.eid);
};
echo('A');
print({ name: 'a', optional: 'd' });
testPrint({ name: 'Kaberi' });
testPrint2(new Employee(13855134, 'Srijon Paul'));

/* Generic Classes and Inheritance  */
interface Product {
  name: string;
  price: number;
  category: string;
}

class Store<T> {
  protected _objects: T[] = [];
  add(obj: T): void {
    this._objects.push(obj);
  }
  /* T is product then keyof T =>
  name , price , category 
  */
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}
let newStore = new Store<Product>();
newStore.add({
  name: 'a',
  price: 4,
  category: 'appliances',
});
newStore.add({
  name: 'b',
  price: 5,
  category: 'cocain',
});
console.log(newStore.find('name', 'b'));
//Pass on the generic type parameter
class CompressableStore<T> extends Store<T> {
  compress() {}
}
let store = new CompressableStore<Product>();
// Restricting the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  searchStore(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}
// fixing a generic type parameter
class FiterStore<T> extends Store<Product> {
  filterByCategory(category: T) {
    return this._objects.filter((obj) => obj.category === category);
  }
}

/* Type mapping */

interface Cola {
  name: string;
  brand: string;
  marketShare: number;
}

type ReadOnly<T> = {
  // [Property in keyof Product]: Product[Property];
  readonly [Key in keyof T]: T[Key];
};

let thumbsUp: ReadOnly<Cola> = {
  name: 'ThumbsUp',
  brand: 'CocaCola',
  marketShare: 20,
};
type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]?: T[K] | null;
};

/*  these are also called the utility types  */

let Limca: Optional<Cola> = {};

// thumbsUp.brand = 'pepsico'; // error cuz readonly
