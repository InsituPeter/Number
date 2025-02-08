// Prime Number Check
const isPrime = (num) => {
    if (num < 2) return false;
    if (num % 2 === 0 && num !== 2) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
};

// Perfect Number Check
const isPerfect = (num) => {
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }
    return sum === num && num !== 1;
};

// Armstrong Number Check
const isArmstrong = (num) => {
    const digits = num.toString().split("").map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, d) => acc + Math.pow(d, power), 0);
    return sum === num;
};

// Digit Sum Calculation
const digitSum = (num) => {
    return num.toString().split("").reduce((acc, d) => acc + parseInt(d), 0);
};

module.exports = { isPrime, isPerfect, isArmstrong, digitSum };