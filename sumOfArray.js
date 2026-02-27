




function evenNumbersOnly(numbers){
         let sumOfEven =[];
   
        for (let number of numbers){
            if(number % 2=== 0){
            console.log(number);
            sumOfEven.push(number);
            }
            
        }
    return sumOfEven;
    }     


let numbers=[12,41,25,42,11,31]
const evens = evenNumbersOnly(numbers);
console.log("Even numbers array:", evens);


function sumOfEvenNumbers (numbers){
    let sum=0;
    for (const number of numbers){
        if(number %2 ===0){
            console.log(number);
            sum = sum + number;
        }

    }
    return sum;
}
let sum = sumOfEvenNumbers(numbers);
console.log(sum)