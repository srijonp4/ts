/* 
======================================
Classes, Interfaces & Object-Oriented-Programming
*/
/* classes */
class Account {
  // private readonly id: number;
  // private owner: string;
  // private _balance: number;
  private _nickname?: string;
  //constructor
  // constructor(id: number, owner: string, balance: number) {
  //   this.id = id;
  //   this.owner = owner;
  //   this._balance = balance;
  // }
  /* parameter properties  */
  // constructor using parameter properties
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error('Invalid Amount');
    }
    // record a transaction
    this._balance += amount;
    console.log(`${amount}$ deposited, ending balance : ${this._balance}`);
  }
  // getter
  get balance(): number {
    return this._balance;
  }
  //setter
  set nickname(value: string) {
    this._nickname = value;
  }
  get nickname(): string | undefined {
    return this._nickname;
  }
  private calculateTax() {}
}

const account = new Account(101, 'Srijon Paul', 500);
console.log('balance : ', account.balance);
account.deposit(100);
console.log(account);
// console.log(account instanceof Account);
