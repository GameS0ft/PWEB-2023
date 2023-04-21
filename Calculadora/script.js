window.addEventListener("load", init)
let buttons, display, cls, equals, numbers, operators, decimal;


let operatorsObj = { "add": '', "subtract": '', "multiply": '', "divide": '' };
let operatorsObjValues = [];
const methods = [sum, sum, multiply, divide];
let operatorsLen = 0;

//total is calculated every time the user inputs an operator
let total = 0;
//stringBuffer only stores one float (including a negative one) as string.
let stringBuffer = "0";
//buffer stores up to 4 elements at once: number operator1 number operator2
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
    button.addEventListener("click", function() {
      handleOperator(button);
    });
  })

  operatorsObjValues = Object.values(operatorsObj);
  operatorsLen = operatorsObjValues.length;
  clear();

}


function clear() {
  display.innerText = '0';
  stringBuffer = display.innerText;
  setTotal(0);
  // console.log(buffer);
}

function strPut(text, sym) {
  if (text == null)
    text = '0';
  if (text == '0') {
    if (sym != decimal.innerText) {
      text = sym;
      return text;
    }
  }
  text += sym;

  return text;

}

function setTotal(value){
  buffer = [value, operatorsObj['add']]
  total = value;
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
  if (stringBuffer == '0' && operatorsObjValues.indexOf(buffer[buffer.length - 1]) != -1)
    return;
  pushOperation(op);
  display.innerText = strPut(display.innerText, op);
}

function pushOperation(op) {
  if (last(buffer) == operatorsObj['subtract']) {
    buffer[buffer.length - 1] = operatorsObj['add'];
    stringBuffer = '-' + stringBuffer;
  }
  buffer.push(parseFloat(stringBuffer));
  buffer.push(op);
  buffer = resolve(buffer);
  total = buffer[0];
  console.log("total =" + total)
  stringBuffer = '0';
}

function resolve(buf) {
  console.log(buf)
  if (buf.length > 4) {
    console.log(buf.slice(0, 2))
    buf = buf.slice(0, 2).concat(resolve(buf.slice(2)))
    console.log("recall: " + buf);
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
  pushOperation(operatorsObj['add'])
  display.innerText = total;
}

function last(list) {
  return list[list.length - 1];
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



