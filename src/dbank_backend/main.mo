import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {
  stable var currentValue: Float = 300;

  public func topUp(amount: Float) {
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withdraw(amount: Float) {
    let tempValue: Float = currentValue - amount;

    if (tempValue < 0) {
      Debug.print("The balance is less than the withdrawn amount.");
    };

    currentValue -= amount;
    Debug.print(debug_show(currentValue));
  };

  public query func checkBalance(): async Float {
    return currentValue;
  };
}