function sumOfEvenNumbers() {
     let sum=0;
  for (const numbr of number) {
   
    if (numbr % 2 === 0) {
    //   console.log(numbr);
      sum = sum + numbr;
    }
  }
  return sum;
}
const number = [24,45,47,14,41,31];
const result = sumOfEvenNumbers(number);
console
.log(result);
