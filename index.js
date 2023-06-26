let boolean = true;
let depositAmount = 0;
let withdrawAmount = 0;

class Banking {
  constructor(balance) {
    this.balance = balance;
  }
  yourBalance() {
    return this.balance;
  }
  yourDeposit() {
    this.balance += depositAmount;
    return this.balance;
  }
  yourWithdrawl() {
    this.balance -= withdrawAmount;
    return this.balance;
  }
}
//
let balance = 0;
while (boolean) {
  const transaction1 = new Banking(balance);
  console.log(
    "************************\n\n Welcome to the Bank\n\n************************\n\n"
  );
  console.log("1.) Balance\n2.) Deposit\n3.) Withdraw\n\n");
  const userinput = prompt("Type a number to choose Transaction");
  console.log(typeof balance, balance);

  if (userinput === "1") {
    balance = transaction1.yourBalance();
    console.log("This is your Balance: $" + balance + ".00");
  } else if (userinput === "2") {
    let d = prompt("How much would you like to Deposit?");
    depositAmount = parseInt(d);
    balance = transaction1.yourDeposit();
    console.log("This is your Balance: $" + balance + ".00");
  } else if (userinput === "3") {
    let w = prompt("How much would you like to Withdraw?");
    withdrawAmount = parseInt(w);
    balance = transaction1.yourWithdrawl();
    console.log("This is your Balance: $" + balance + ".00");
  } else {
    boolean = false;
  }
}
