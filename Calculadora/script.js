window.addEventListener("load", init)
let display, cls, equals, decimal;

//The string showing up on display can differ from the calculation string
//per example the decimal, multiply, divide can differ depending of the style or region

//buttons is a map for the string on display (the same characters of buttons)
let buttons;

//numberMap maps the button id to its calculation value
const numberMap = {
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  decimal: "."
};
//operatorMap maps the button id to its calculation value
//DO NOT change this since it'll break the stuff, literal values of
//this are used to improve the consiceness
const operatorMap = {
  add: "+",
  subtract: "-",
  multiply: "*",
  divide: "/",
  // exponent: "^",
  // radical: "√"
}

//Arithmetic functions that will be chosen through the indexing techiniques
const operatorDef = {
  "+": [addition, 1],  //function to call and the priority
  "-": [subtraction, 1],
  "*": [multiplication, 2],
  "/": [division, 2],
  // "^": [exponentiation, 3],
  // "√": [radication, 3],
}

const buttonMap = { ...numberMap, ...operatorMap };

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
  const numbers_ = document.querySelectorAll(".number");
  const operators_ = document.querySelectorAll(".operator");
  decimal = document.querySelector("#decimal")
  cls.addEventListener("click", clear);
  equals.addEventListener("click", showResult)

  buttons = Object.assign(Object.assign({}, numberMap), operatorMap);
  numbers_.forEach(button => {
    buttons[button.id] = button.innerText;
    button.addEventListener("click", function() {
      handleNumber(button);
    });
  })
  operators_.forEach(button => {
    buttons[button.id] = button.innerText;

    button.addEventListener("click", function() {
      handleOperator(button);
    });
  })
  clear();

}


function clear() {
  display.innerText = '0';
  stringBuffer = '';
  setTotal(0);
}

function strPut(text, sym) {
  text = text == '' ? '0' : text;
  if (text == '0' && sym != decimal.innerText) {
    return sym;
  }
  return text + sym;

}

function setTotal(value) {
  buffer = [];
  total = value;
  stringBuffer = value.toString();
}

function handleNumber(button) {
  //get the number for calculation
  const num = numberMap[button.id]
  if (button == decimal && stringBuffer.includes(num)) {
    return
  }
  display.innerText = strPut(display.innerText, showOnDisplay(num));
  stringBuffer = strPut(stringBuffer, num);
}
function handleOperator(button) {
  //get the operator for calculation
  const op = operatorMap[button.id];

  //let it changes operator
  if (stringBuffer == '')
    display.innerText = display.innerText.slice(0, -1);

  pushOperation(op);
  display.innerText = strPut(display.innerText, showOnDisplay(op));
}

function pushOperation(op) {
  //change operator
  if (stringBuffer == '') {
    buffer[buffer.length - 1] = op;
    return;
  }

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
    //splits the buf into two and resolve the last part
    buf = buf.slice(0, 2).concat(resolve(buf.slice(2)))
  }
  const num1 = buf[0];
  const op1 = buf[1];
  const num2 = buf[2];
  const op2 = buf[3];

  const op1Def = operatorDef[op1];
  const op2Def = operatorDef[op2];

  //rule for it doesn't resolve an operation before another with higher priority
  if (op1Def[1] < op2Def[1])
    return buf;

  const result = op1Def[0](num1, num2);
  buf = [result, op2];
  return buf;

}

function showOnDisplay(string) {
  for (let btn of Object.entries(buttonMap)) {
    string = string.replaceAll(btn[1], buttons[btn[0]]);
  }
  return string;
}

function showResult() {
  //pushes any operation to calculate total
  pushOperation(operatorMap['add']);
  setTotal(total);

  //prepares the total to display on screen
  //using the defined symbols in the HTML
  display.innerText = showOnDisplay(total.toString())
}


function addition(num1, num2) {
  return num1 + num2;
}
function subtraction(num1, num2) {
  return addition(num1, -num2);
}
function multiplication(num1, num2) {
  return num1 * num2;
}
function division(num1, num2) {
  if (num2 == 0)
    return num1;
  return num1 / num2;
}
// function exponentiation(num1, num2) {
//   return Math.pow(num1, num2);
// }
// function radication(num1, num2) {
//   return Math.pow(num2, division(1, num1));
// }
