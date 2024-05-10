{
  // getter and setter

  class BankAccount {
    public readonly id: number;
    public name: string;
    private balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }

    // public addDeposit(amount: number) {
    //   this.balance += amount;
    // }
    // getter
    set deposit(amount: number) {
      this.balance += amount;
    }
    get Balance(): number {
      return this.balance;
    }
    // public getBalance(): number {
    //   return this.balance;
    // }
  }

  const goribManusherAccount = new BankAccount(111, "Gorib Manusher", 2000);
  // goribManusherAccount.name = "akib bhai";
  // goribManusherAccount.addDeposit(20);
  // const myBalance = goribManusherAccount.getBalance();

  // getter and setter methods
  goribManusherAccount.deposit = 20;
  const myBalance = goribManusherAccount.Balance; // used as a property
  console.log(`my balance ${myBalance}`);
  //
}
