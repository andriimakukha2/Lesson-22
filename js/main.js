// #1

const counter = (function() {
    let count = null; // Ініціалізуємо змінну для збереження значення лічильника

    return function(n) {
        if (typeof n === 'number') {
            count = n; // Якщо передано число, починаємо з нього
        } else if (count === null) {
            count = 0; // Якщо число не передано, і лічильник ще не ініціалізовано, починаємо з 0
        }
        return count++; // Повертаємо поточне значення і збільшуємо лічильник
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

const myPow = (a, b, callback) => {
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

    return callback(a, b, result);
};

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

export { counter, counterFactory, myPrint, myPow, myMax, myMul, myDouble, myTriple }