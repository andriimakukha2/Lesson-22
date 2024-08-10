// #1

const counter = (function() {
    let count = 0;

    return function(n) {
        if (typeof n === 'number') {
            count = n;
        } else {
            count++;
        }
        return count;
    };
})();

console.log(counter());    // 0
console.log(counter());    // 1
console.log(counter(100)); // 100
console.log(counter());    // 101
console.log(counter());    // 102
console.log(counter(500)); // 500
console.log(counter());    // 501
console.log(counter());    // 502
console.log(counter(0));   // 0
console.log(counter());    // 1
console.log(counter());    // 2

// #2

const counterFactory = (function () {
    let count = 0;

    return {
        value: function(n) {
            if (typeof n === 'number') {
                count = n;
            }
            return count;
        },
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        }
    };
})();


console.log(counterFactory.value()); // 0
counterFactory.increment();
counterFactory.increment();
counterFactory.increment();
console.log(counterFactory.value()); // 3
counterFactory.decrement();
counterFactory.decrement();
console.log(counterFactory.value()); // 1
console.log(counterFactory.value(100)); // 100
counterFactory.decrement();
console.log(counterFactory.value()); // 99
console.log(counterFactory.value(200)); // 200
counterFactory.increment();
console.log(counterFactory.value()); // 201

// #3

const myPrint = (a, b, res) => {
    return `${a}^${b}=${res}`;
};

const myPow = (a, b, myPrint) => {
    const powRecursive = (a, b) => {
        if (b === 0) {
            return 1;
        } else if (b > 0) {
            return a * powRecursive(a, b - 1);
        } else {
            return 1 / powRecursive(a, -b);
        }
    };

    const result = powRecursive(a, b);
    return myPrint(a, b, result);
};

console.log(myPow(3, 4, myPrint)); // 3^4=81
console.log(myPow(2, 3, myPrint)); // 2^3=8
console.log(myPow(2, 0, myPrint)); // 2^0=1
console.log(myPow(2, -2, myPrint)); // 2^-2=0.25

// #4

const myMax = (arr) => {
    return Math.max.apply(null, arr); // Застосовуємо Math.max до елементів масиву
};

const list = [12, 23, 100, 34, 56, 9, 233];
console.log(myMax(list)); // 233

// #5

const myMul = (a, b) => {
    return a * b;
};

const myDouble = myMul.bind(null, 2);

const myTriple = myMul.bind(null, 3);

console.log(myDouble(3)) // = myMul(2, 3) = 6
console.log(myDouble(4)) // = myMul(2, 4) = 8
console.log(myDouble(5)) // = myMul(2, 5) = 10

console.log(myTriple(3)) // = myMul(3, 3) = 9
console.log(myTriple(4)) // = myMul(3, 4) = 12
console.log(myTriple(5)) // = myMul(3, 5) = 15
