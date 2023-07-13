function worldSwimmingRecord(input) {
 let worldRecordInSeconds = Number(input[0]);
 let lenghtOfSwimming = Number(input[1]);
 let oneMeterInSeconds = Number(input[2]);
 let totalTimeNeeded = lenghtOfSwimming * oneMeterInSeconds;
 let delay = Math.floor(lenghtOfSwimming/15) * 12.5;
 let finalTime = totalTimeNeeded + delay;

 if (worldRecordInSeconds > finalTime) {
     console.log(` Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`);
 }
 else {
     console.log(`No, he failed! He was ${(finalTime - worldRecordInSeconds).toFixed(2)} seconds slower.`);
 }
}
worldSwimmingRecord(["55555.67",
"3017",
"5.03"])

