console.log('계산기 준비 완료')

const arr =[3,2,1]
for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

function cal(oper, num1, num2) {
    if (oper == '+') {
    ret = num1 + num2
    }
    else if (oper == '-') {
    ret = num1 - num2
    }
    else if (oper == '*') {
    ret = num1 * num2
    }
    else if (oper == '/') {
    ret = num1 / num2
    }

    return console.log(ret)
}

