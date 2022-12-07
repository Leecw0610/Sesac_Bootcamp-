console.log("이것은 연습용입니다");

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}



function cal(oper, num1, num2) {
    
     if (oper == "+") {
    ret = add(num1, num2);
     } else if (oper == "-") {
    ret = sub(num1, num2);
     } else if (oper == "*") {
    ret = mul(num1, num2);
     } else if (oper == "/") {
    ret = div(num1, num2);
     }
     console.log(num1, oper, num2, "=", ret);

     return ret;
}

cal("+", 3, 4);

cal("*", 3, 4);

let a = 100;
let b = 200;
let c = "자바스크립트";
let str = `저는 ${a + b}살이고 ${c}를 좋아합니다.`;
console.log(str);

cal('+',1,2);
cal('-',1,2);
cal('*',1,2);
cal('/',1,2);

let oper = '/'
let num1 = 60
let num2 = 4
let fn = cal(oper, num1, num2)
let sen = `${num1} ${oper} ${num2} = ${fn}`;
console.log(sen);

