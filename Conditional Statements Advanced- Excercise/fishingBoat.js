function fishingBoat (input) {
   let budjet = Number(input[0]);
   let season = input[1];
   let friends = Number(input[2]) ;

   if (season == 'Spring' && friends <= 6) {
   let finalSum = 3000 * 0.9;
    
   if (friends % 2 == 0) {
        finalSum = finalSum *0.95

      if (budjet - finalSum >=0) {
          let moneyLeft = budjet- finalSum;
 console.log(`Yes! You have ${(moneyLeft).toFixed(2)} leva left.`);
      }
      else if (budjet - finalSum < 0) {
          let moneyNeeded = finalSum - budjet;
   console.log(`Not enough money! You need ${(moneyNeeded).toFixed(2)} leva.`);
      }
   }
   else if (friends % 2 == 1) {
         if (budjet - finalSum >=0) {
             let moneyLeft = budjet - finalSum;
             console.log(`Yes! You have ${(moneyLeft).toFixed(2)} leva left.`);
         }
         else if (budjet - finalSum < 0) {
            let moneyNeeded = finalSum - budjet;
            console.log(`Not enough money! You need ${(moneyNeeded).toFixed(2)} leva.`); 
         }
   }
}

else if (season == 'Spring' && friends > 7 && friends <=11) {
    let finalSum = 3000 * 0.85;
     
    if (friends % 2 == 0) {
         finalSum = finalSum *0.95
 
       if (budjet - finalSum >=0) {
           let moneyLeft = budjet- finalSum;
  console.log(`Yes! You have ${(moneyLeft).toFixed(2)} leva left.`);
       }
       else if (budjet - finalSum < 0) {
           let moneyNeeded = finalSum - budjet;
    console.log(`Not enough money! You need ${(moneyNeeded).toFixed(2)} leva.`);
       }
    }
    else if (friends % 2 == 1) {
          if (budjet - finalSum >=0) {
              let moneyLeft = budjet - finalSum;
              console.log(`Yes! You have ${(moneyLeft).toFixed(2)} leva left.`);
          }
          else if (budjet - finalSum < 0) {
             let moneyNeeded = finalSum - budjet;
             console.log(`Not enough money! You need ${(moneyNeeded).toFixed(2)} leva.`); 
          }
    }
 }

 else if (season == 'Spring' && friends > 12) {
    let finalSum = 3000 * 0.75;
     
    if (friends % 2 == 0) {
         finalSum = finalSum *0.95
 
       if (budjet - finalSum >=0) {
           let moneyLeft = budjet- finalSum;
  console.log(`Yes! You have ${(moneyLeft).toFixed(2)} leva left.`);
       }
       else if (budjet - finalSum < 0) {
           let moneyNeeded = finalSum - budjet;
    console.log(`Not enough money! You need ${(moneyNeeded).toFixed(2)} leva.`);
       }
    }
    else if (friends % 2 == 1) {
          if (budjet - finalSum >=0) {
              let moneyLeft = budjet - finalSum;
              console.log(`Yes! You have ${(moneyLeft).toFixed(2)} leva left.`);
          }
          else if (budjet - finalSum < 0) {
             let moneyNeeded = finalSum - budjet;
             console.log(`Not enough money! You need ${(moneyNeeded).toFixed(2)} leva.`); 
          }
    }
 }

  if (season == 'Summer' && friends <= 6) {
    let finalSum = 4200 * 0.9;
     
    if (friends % 2 == 0) {
         finalSum = finalSum *0.95
 
       if (budjet - finalSum >=0) {
           let moneyLeft = budjet- finalSum;
  console.log(`Yes! You have ${(moneyLeft).toFixed(2)} leva left.`);
       }
       else if (budjet - finalSum < 0) {
           let moneyNeeded = finalSum - budjet;
    console.log(`Not enough money! You need ${(moneyNeeded).toFixed(2)} leva.`);
       }
    }
    else if (friends % 2 == 1) {
          if (budjet - finalSum >=0) {
              let moneyLeft = budjet - finalSum;
              console.log(`Yes! You have ${(moneyLeft).toFixed(2)} leva left.`);
          }
          else if (budjet - finalSum < 0) {
             let moneyNeeded = finalSum - budjet;
             console.log(`Not enough money! You need ${(moneyNeeded).toFixed(2)} leva.`); 
          }
    }
 }
 
 else if (season == 'Summer' && friends > 7 && friends <=11) {
     let finalSum = 4200 * 0.85;
      
     if (friends % 2 == 0) {
          finalSum = finalSum *0.95
  
        if (budjet - finalSum >=0) {
            let moneyLeft = budjet- finalSum;
   console.log(`Yes! You have ${(moneyLeft).toFixed(2)} leva left.`);
        }
        else if (budjet - finalSum < 0) {
            let moneyNeeded = finalSum - budjet;
     console.log(`Not enough money! You need ${(moneyNeeded).toFixed(2)} leva.`);
        }
     }
     else if (friends % 2 == 1) {
           if (budjet - finalSum >=0) {
               let moneyLeft = budjet - finalSum;
               console.log(`Yes! You have ${(moneyLeft).toFixed(2)} leva left.`);
           }
           else if (budjet - finalSum < 0) {
              let moneyNeeded = finalSum - budjet;
              console.log(`Not enough money! You need ${(moneyNeeded).toFixed(2)} leva.`); 
           }
     }
  }
 
  else if (season == 'Summer' && friends > 12) {
     let finalSum = 4200 * 0.75;
      
     if (friends % 2 == 0) {
          finalSum = finalSum *0.95
  
        if (budjet - finalSum >=0) {
            let moneyLeft = budjet- finalSum;
   console.log(`Yes! You have ${(moneyLeft).toFixed(2)} leva left.`);
        }
        else if (budjet - finalSum < 0) {
            let moneyNeeded = finalSum - budjet;
     console.log(`Not enough money! You need ${(moneyNeeded).toFixed(2)} leva.`);
        }
     }
     else if (friends % 2 == 1) {
           if (budjet - finalSum >=0) {
               let moneyLeft = budjet - finalSum;
               console.log(`Yes! You have ${(moneyLeft).toFixed(2)} leva left.`);
           }
           else if (budjet - finalSum < 0) {
              let moneyNeeded = finalSum - budjet;
              console.log(`Not enough money! You need ${(moneyNeeded).toFixed(2)} leva.`); 
           }
     }
  }

  if (season == 'Autumn' && friends <= 6) {
    let finalSum = 4200 * 0.9;
    let moneyLeft = budjet - finalSum;
    let moneyNeeded = finalSum - budjet;

    if (budjet - finalSum >= 0) {
    console.log(`Yes! You have ${(moneyLeft).toFixed(2)} leva left.`);
    }
    else if (budjet - finalSum < 0) {
        console.log(`Not enough money! You need ${(moneyNeeded).toFixed(2)} leva.`);
    }
  }
 
 else if (season == 'Autumn' && friends > 7 && friends <=11) {
    let finalSum = 4200 * 0.85;
    let moneyLeft = budjet - finalSum;
    let moneyNeeded = finalSum - budjet;

    if (budjet - finalSum >= 0) {
    console.log(`Yes! You have ${(moneyLeft).toFixed(2)} leva left.`);
    }
    else if (budjet - finalSum < 0) {
        console.log(`Not enough money! You need ${(moneyNeeded).toFixed(2)} leva.`);
    }
  }
 
  else if (season == 'Autumn' && friends > 12) {
    let finalSum = 4200 * 0.75;
    let moneyLeft = budjet - finalSum;
    let moneyNeeded = finalSum - budjet;

    if (budjet - finalSum >= 0) {
    console.log(`Yes! You have ${(moneyLeft).toFixed(2)} leva left.`);
    }
    else if (budjet - finalSum < 0) {
        console.log(`Not enough money! You need ${(moneyNeeded).toFixed(2)} leva.`);
    }
  }

  if (season == 'Winter' && friends <= 6) {
    let finalSum = 2600 * 0.9;
     
    if (friends % 2 == 0) {
         finalSum = finalSum *0.95
 
       if (budjet - finalSum >=0) {
           let moneyLeft = budjet- finalSum;
  console.log(`Yes! You have ${(moneyLeft).toFixed(2)} leva left.`);
       }
       else if (budjet - finalSum < 0) {
           let moneyNeeded = finalSum - budjet;
    console.log(`Not enough money! You need ${(moneyNeeded).toFixed(2)} leva.`);
       }
    }
    else if (friends % 2 == 1) {
          if (budjet - finalSum >=0) {
              let moneyLeft = budjet - finalSum;
              console.log(`Yes! You have ${(moneyLeft).toFixed(2)} leva left.`);
          }
          else if (budjet - finalSum < 0) {
             let moneyNeeded = finalSum - budjet;
             console.log(`Not enough money! You need ${(moneyNeeded).toFixed(2)} leva.`); 
          }
    }
 }
 
 else if (season == 'Winter' && friends > 7 && friends <=11) {
     let finalSum = 2600 * 0.85;
      
     if (friends % 2 == 0) {
          finalSum = finalSum *0.95
  
        if (budjet - finalSum >=0) {
            let moneyLeft = budjet- finalSum;
   console.log(`Yes! You have ${(moneyLeft).toFixed(2)} leva left.`);
        }
        else if (budjet - finalSum < 0) {
            let moneyNeeded = finalSum - budjet;
     console.log(`Not enough money! You need ${(moneyNeeded).toFixed(2)} leva.`);
        }
     }
     else if (friends % 2 == 1) {
           if (budjet - finalSum >=0) {
               let moneyLeft = budjet - finalSum;
               console.log(`Yes! You have ${(moneyLeft).toFixed(2)} leva left.`);
           }
           else if (budjet - finalSum < 0) {
              let moneyNeeded = finalSum - budjet;
              console.log(`Not enough money! You need ${(moneyNeeded).toFixed(2)} leva.`); 
           }
     }
  }
 
  else if (season == 'Winter' && friends > 12) {
     let finalSum = 2600 * 0.75;
      
     if (friends % 2 == 0) {
          finalSum = finalSum *0.95
  
        if (budjet - finalSum >=0) {
            let moneyLeft = budjet- finalSum;
   console.log(`Yes! You have ${(moneyLeft).toFixed(2)} leva left.`);
        }
        else if (budjet - finalSum < 0) {
            let moneyNeeded = finalSum - budjet;
     console.log(`Not enough money! You need ${(moneyNeeded).toFixed(2)} leva.`);
        }
     }
     else if (friends % 2 == 1) {
           if (budjet - finalSum >=0) {
               let moneyLeft = budjet - finalSum;
               console.log(`Yes! You have ${(moneyLeft).toFixed(2)} leva left.`);
           }
           else if (budjet - finalSum < 0) {
              let moneyNeeded = finalSum - budjet;
              console.log(`Not enough money! You need ${(moneyNeeded).toFixed(2)} leva.`); 
           }
     }
  }
}
fishingBoat (["2000",
"Winter",
"13"])



