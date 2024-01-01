import Debug "mo:base/Debug";

actor DBank {
  var currentValue: Nat = 300;

  public func topUp(amount: Nat) {
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withdraw(amount: Nat) {
    let tempValue: Int = currentValue - amount;

    if (tempValue < 0) {
      Debug.print("The balance is less than the withdrawn amount.");
    };

    currentValue -= amount;
    Debug.print(debug_show(currentValue));
  };

  public query func checkBalance(): async Nat {
    return currentValue;
  };
}