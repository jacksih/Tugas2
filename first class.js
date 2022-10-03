const Arithmetics = {
    add: (a, b) => {
        return `${a} + ${b} = ${a + b}`;
    },
    subtract: (a, b) => {
        return `${a} - ${b} = ${a - b}`
    },
    multiply: (a, b) => {
        return `${a} * ${b} = ${a * b}`
    },
    division: (a, b) => {
        if (b != 0) return `${a} / ${b} = ${a / b}`;
        return `Cannot Divide by Zero!!!`;
    }

}

document.write(Arithmetics.add(100, 100) + "<br>");
document.write(Arithmetics.subtract(100, 7) + "<br>");
document.write(Arithmetics.multiply(5, 5) + "<br>");
document.write(Arithmetics.division(100, 5));