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

// #5

const myMul = (a, b) => {
    return a * b;
};

const myDouble = myMul.bind(null, 2);

const myTriple = myMul.bind(null, 3);

// Export

export { counter, counterFactory, myPow, myMax, myMul, myDouble, myTriple }