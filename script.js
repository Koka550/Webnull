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
    while(true) {
        let input = prompt("Enter a number or press 'S' to submit") ;
        if(input === "s" || input === null) {
            break;
        }
        numbers.push(Number(numbers)) ;
    }
}