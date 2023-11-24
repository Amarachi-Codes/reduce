// given an array of numbers, find out whether the odd or even number wins. If odd number wins it prints out "odd wins"
// and vice versa.

const numbers =[2,5,3,9,6,]

// forEach Loop
const soundBattle = (numbers)=>{
    oCount = 0;
    eCount = 0
   numbers.forEach((number) => {
        if(number % 2 === 0){
            eCount++
        }   else{
            oCount++
        }
    });
    if(oCount > eCount){
        return "odd wins"
    }if(eCount > oCount){
        return "even wins"
    }return "draw"
}
console.log(soundBattle(numbers));

// for loop

const numberBattles = (numbers)=>{
    let oCount = 0
    let eCount = 0
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            eCount++
        } else{
            oCount++
        }
    }
    if(oCount > eCount){
        return "odd wins"
    }if(eCount > oCount){
        return "even wins"
    }else{
       return "draw"
    } 
}
console.log(numberBattles(numbers));