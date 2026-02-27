function evenmultiply ( a ){
    let result =0;
    if(a % 2 ===1){
     result = a*3;
        console.log(result);    
    } 
    else{
        result = a*2;
        console.log(result);
    }
    return result;
}
const num = 54;
result = evenmultiply(num);
console.log(result);