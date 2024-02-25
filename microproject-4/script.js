
//display one digit at a time

function appendToResult(value) {

    let currentResult = document.getElementById("input").value

    let newResult = currentResult + value;
    document.getElementById("input").value = newResult;
    // console.log(newResult);

}

// delete a one digit at a time
const deleteOne = () => {

    let currentResult = document.getElementById("input");
    input.value = input.value.slice(0, -1);

}

// reset result

const Reset = () => {

    document.getElementById("input").value = "";

}


// perform operation

function performOperation() {

    let inputField = document.getElementById("input");
    let input = inputField.value;

    let operands = input.split(/[+\-*\/]/);
    let operator = input.match(/[+\-*\/]/);

    // if (operands.length !== 2 || !operator) {
    //     console.error("Invalid input");
    //     return;
    // }


    let num1 = parseFloat(operands[0]);
    let num2 = parseFloat(operands[1]);
    let result;


    switch (operator[0]) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            //result = num1 / num2;
            if (num2 !== 0) {

                result = num1 / num2;

            } else {

                document.getElementById('input').value = " ";
                return;

            }
            break;
        default:
            console.error("Invalid operation");
            return;

    }

    // Display the result in the same input field
    try {

        result = eval(input);
        inputField.value = result;

    }

    catch (error) {

        console.error("Invalid input or operation")

    }
}


// Example usage
document.getElementById("equalButton").addEventListener("click", performOperation);








































