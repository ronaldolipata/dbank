import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {
  stable var balance : Float = 300;
  stable var startTime = Time.now();

  public func deposit(amount : Float) {
    balance += amount;
    Debug.print(debug_show (balance));
  };

  public func withdraw(amount : Float) {
    let tempValue : Float = balance - amount;

    if (tempValue < 0) {
      Debug.print("The balance is less than the withdrawn amount.");
    };

    balance -= amount;
    Debug.print(debug_show (balance));
  };

  public query func checkBalance() : async Float {
    return balance;
  };

  public func compound() {
    let currentTime = Time.now();
    let timeElapseNS = currentTime - startTime;
    let timeElapseS = timeElapseNS / 1000000000;
    balance := balance * (1.01 ** Float.fromInt(timeElapseS));
    startTime := currentTime;
  };
};
