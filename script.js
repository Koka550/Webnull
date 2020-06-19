let choice = prompt("Choose between 'add,subtract,sum,multiply,power and factorial'")
function add(a , b) {
    let result = a + b ;
    return result ; 
}
function subtract(a , b) {
    let result = a - b ;
    return result ;
}
function sum() {
    let numbers = [] ;
    let result ;
    while(true) {
        let input = prompt("Enter a number or press 'S' to submit") ;
        if(input === "s" || input === null) {
            break;
        }
        numbers.push(Number(input)) ;
    }
    let submaition = numbers.reduce(myfun , 0); 
    function myfun(a , b) {
     return a + b ;
    
    }
    return submaition ;
}
function multiply() {
    let numbers = [] ;
    let result ;
    while(true) {
        let input = prompt("Enter a number or press 'S' to submit") ;
        if(input === "s" || input === null) {
            break;
        }
        numbers.push(Number(input)) ;
    }
    let submaition = numbers.reduce(myfun , 0); 
    function myfun(a , b) {
     return a * b ;
    
    }
    return submaition ;
}
function power(theNum , thePower) {
    let result = Math.pow(theNum , thePower) ;
    return result ;
}
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
