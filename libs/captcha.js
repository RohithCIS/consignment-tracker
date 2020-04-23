module.exports = function solveCaptcha(challenge, problem) {    
    console.log(challenge);
    console.log(problem);

    let solved;
    switch (challenge) {
        case "Evaluate the Expression":
            const operands = problem.split(" ");
            const a = parseInt(operands[0]);
            const b = parseInt(operands[2]);
            switch (operands[1]) {
                case "-":
                    solved = a - b;
                    break;
                case "+":
                    solved = a + b;
                    break;
                default:
                    solved = a - b;
                    break;
            }
            break;
        case "Enter characters as displayed in image":
            solved = problem;
            break;
        case "Enter the First number":
            solved = problem.split(",")[0];
            break;
        case "Enter the Second number":
            solved = problem.split(",")[1];
            break;
        case "Enter the Third number":
            solved = problem.split(",")[2];
            break;
        case "Enter the Fourth number":
            solved = problem.split(",")[3];
            break;
        case "Enter the Fifth number":
            solved = problem.split(",")[4];
            break;
        default:
            solved = problem;
            break;
    }
    return solved;
}