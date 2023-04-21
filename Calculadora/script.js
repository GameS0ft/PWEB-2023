window.addEventListener("load", init)
let buttons, display, cls, equals, numbers, operators, decimal;

//The object that stores the values for operators.
//This allows the operators to be anything, the calculation won't be compromised.
let operatorsObj = { "add": '', "subtract": '', "multiply": '', "divide": '' };

//The values of each operator, this allows some indexing techiniques
let operatorsObjValues = [];

//Arithmetic functions that will be chosen through the indexing techiniques
const methods = [sum, sum, multiply, divide];

//total is calculated every time the user inputs an operator
let total = 0;

//stringBuffer only stores one float (including a negative one) as string.
let stringBuffer = '';

//buffer stores elements like floats and operators to be used in the calculation
let buffer = [];

function init() {
  display = document.querySelector(".display");
  cls = document.querySelector("#clear");
  equals = document.querySelector("#equals");
  buttons = document.querySelectorAll(".button");
  numbers = document.querySelectorAll(".number");
  operators = document.querySelectorAll(".operator");
  decimal = document.querySelector("#decimal")
  cls.addEventListener("click", clear);
  equals.addEventListener("click", showResult)
  numbers.forEach(button => {
    button.addEventListener("click", function() {
      handleNumber(button);
    });
  })
  operators.forEach(button => {
    //reading the value of each operator in the HTML file
    //and assgining to operatorsObj Object
    switch (button.id) {
      case 'add':
        operatorsObj["add"] = button.innerText;
        break;
      case 'subtract':
        operatorsObj["subtract"] = button.innerText;
        break;
      case 'multiply':
        operatorsObj["multiply"] = button.innerText;
        break;
      case 'divide':
        operatorsObj["divide"] = button.innerText;
        break;
    }
    //That makes the code a litte more flexible

    button.addEventListener("click", function() {
      handleOperator(button);
    });
  })

  operatorsObjValues = Object.values(operatorsObj);
  clear();

}


function clear() {
  display.innerText = '0';
  stringBuffer = '';
  setTotal(0);
}

function strPut(text, sym) {
  if (text == '')
    text = '0';
  if (text == '0') {
    //if the user starts typing the decimal, so consider the zero before.
    if (sym != decimal.innerText) {
      text = sym;
      return text;
    }
  }
  text += sym;

  return text;

}

function setTotal(value) {
  buffer = [];
  total = value;
  stringBuffer = transform_str(value.toString(), false);
}

function handleNumber(button) {
  let num = button.innerText;
  if (button == decimal && stringBuffer.indexOf(decimal.innerText) != -1) {
    return
  }
  display.innerText = strPut(display.innerText, num);
  stringBuffer = strPut(stringBuffer, num);
}
function handleOperator(button) {
  let op = button.innerText;

  //let it changes operator and cuts the last operator
  if (stringBuffer == '' && operatorsObjValues.lastIndexOf(display.innerText[display.innerText.length - 1]) != -1)
    display.innerText = display.innerText.slice(0, -1);

  // console.log(stringBuffer);
  pushOperation(op);
  display.innerText = strPut(display.innerText, op);
}

function pushOperation(op) {
  //change operator
  if (stringBuffer == '') {
    buffer[buffer.length - 1] = op;
    return;
  }

  //all subtractions are also sums with negative number.
  if (last(buffer) == operatorsObj['subtract']) {
    buffer[buffer.length - 1] = operatorsObj['add'];
    stringBuffer = operatorsObj['subtract'] + stringBuffer;
  }

  //prepares the buffer to parsing, replacing characters.
  stringBuffer = transform_str(stringBuffer, true)

  buffer.push(parseFloat(stringBuffer));
  buffer.push(op);
  buffer = resolve(buffer);
  total = buffer[0];
  stringBuffer = '';

}

function resolve(buf) {
  if (buf.length < 4)
    return buf;
  if (buf.length > 4) {
    buf = buf.slice(0, 2).concat(resolve(buf.slice(2)))
  }
  const num1 = buf[0];
  const op1 = buf[1];
  const num2 = buf[2];
  const op2 = last(buf);
  if (operatorsObjValues.indexOf(op1) <= 1 && operatorsObjValues.indexOf(op2) > 1)
    return buf;
  const index = operatorsObjValues.indexOf(op1);
  if (index == -1)
    return buf;
  let result = methods[index](num1, num2);
  buf = [result, op2];
  return buf;


}

function showResult() {
  //pushes any operation to calculate total
  pushOperation(operatorsObj['add']);
  setTotal(total);

  //prepares the total to display on screen
  //using the defined symbols in the HTML
  display.innerText = transform_str(total.toString(), false);
}

function last(list) {
  return list[list.length - 1];
}

function transform_str(string, isInput) {
  if (isInput) {
    string = string.replace(decimal.innerText, ".");
    string = string.replace(operatorsObj['subtract'], '-');
  }
  else {
    string = string.replace(".", decimal.innerText);
    string = string.replace('-', operatorsObj['subtract']);
  }
  return string;
}

function sum(num1, num2) {
  return num1 + num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  if (num2 == 0)
    return num1;
  return num1 / num2;
}



