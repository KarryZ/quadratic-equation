module.exports = function solveEquation(equation) {
    // your implementation
    let arrOfequation = equation.split(" ");
    let a = arrOfequation[0];
    let b = arrOfequation[3] + arrOfequation[4];
    let c = arrOfequation[7] + arrOfequation[8];
    let D = Math.pow(b, 2) - 4 * a * c;
    let x1, x2;
    let solutionArr = [];
    if (D > 0) {
        x1 = Math.round((-(b) + Math.sqrt(D)) / (2 * a));
        x2 = Math.round((-(b) - Math.sqrt(D)) / (2 * a));
        solutionArr.splice(0, 0, x1, x2);
        solutionArr.sort((i, j) => i - j);
        return solutionArr;
    }
    if (D < 0) {
        let z = -1;
        x1 = Math.round((-(b) + (z * Math.sqrt(D))) / (2 * a));
        x2 = Math.round((-(b) - (z * Math.sqrt(D))) / (2 * a));
        solutionArr.splice(0, 0, x1, x2);
        solutionArr.sort((i, j) => i - j);
        return solutionArr;
    }
}