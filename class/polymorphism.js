 class parent{
    withdraw(cash){
        console.log("cash")

    }
    withraw(cheque){
                console.log("cheque")


    }
    withdraw(atm){
                console.log("atm")


    }
    withdraw(netbanking){
        console.log("netbanking")


    }

 }
 
 class Bank{
    
    withdraw(upi){
        console.log("upi");


    }
}
var bank=new Bank();
console.log(bank);
bank.withdraw();
