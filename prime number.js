const number = parseInt(prompt("Enter a  number: "));
let isPrime = true;


if (number === 1) {
    console.log("1 is neither prime nor composite number");
}


else if (number > 1) {


    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        alert(number + " is prime number");
    } else {
        alert(number + " is not a prime number");
    }
}
