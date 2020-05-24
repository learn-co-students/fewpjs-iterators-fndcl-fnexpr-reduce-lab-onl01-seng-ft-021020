const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


// Code your solution here


let totalBatteries = getTotalAmountForBatteries(batteryBatches);

function getTotalAmountForBatteries(batteryBatches) {
    let totalBatteries = 0;
   
    batteryBatches.forEach(function(battery) {
        totalBatteries += battery;
    });
   
    return totalBatteries;
  }
   
  console.log(getTotalAmountForBatteries(batteryBatches)); // prints 33.46