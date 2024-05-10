{
  // access modifiers
  // private access modifiers only use this class but protected methods are use his children
  //
  class BankAccount {
    public readonly id: number;
    public name: string;
    private balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }

    addDeposit(amount: number) {
      this.balance += amount;
    }
    getBalance(): number {
      return this.balance;
    }
  }

  const goribManusherAccount = new BankAccount(111, "Gorib Manusher", 2000);
  goribManusherAccount.name = "akib bhai";
  goribManusherAccount.addDeposit(20);
  const myBalance = goribManusherAccount.getBalance();
  console.log(`my balance ${myBalance}`);

  //
}
