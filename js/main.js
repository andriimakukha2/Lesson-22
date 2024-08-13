// #1

const counter = (function() {
    let count = 0; // початкове значення лічильника

    return function(n) {
        if (typeof n === 'number') {
            count = n; // оновлюємо лічильник на передане значення
        }
        const result = count; // зберігаємо поточне значення для повернення
        if (count !== 0 || n !== 0) {
            count++; // збільшуємо лічильник тільки якщо поточне значення не 0 або передане значення не 0
        }
        return result; // повертаємо збережене значення
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