## 미션

JavaScript로 알고리즘 문제 풀어보기

### 문제

- [https://programmers.co.kr/learn/courses/30/lessons/64061](https://programmers.co.kr/learn/courses/30/lessons/64061)
- [https://programmers.co.kr/learn/courses/30/lessons/42840](https://programmers.co.kr/learn/courses/30/lessons/42840)
- [https://programmers.co.kr/learn/courses/30/lessons/12930](https://programmers.co.kr/learn/courses/30/lessons/12930)
- [https://programmers.co.kr/learn/courses/30/lessons/42748](https://programmers.co.kr/learn/courses/30/lessons/42748)

## 1. 화살표함수란?


let sum = (a, b) => a + b;

/* 위 화살표 함수는 아래 함수의 축약 버전입니다.

let sum = function(a, b) {
  return a + b;
};
*/

화살표 함수는 본문이 한 줄인 함수를 작성할 때 유용합니다. 본문이 한 줄이 아니라면 다른 방법으로 화살표 함수를 작성해야 합니다.

-중괄호 없이 작성: (...args) => expression – 화살표 오른쪽에 표현식을 둡니다. 함수는 이 표현식을 평가하고, 평가 결과를 반환합니다.
-중괄호와 함께 작성: (...args) => { body } – 본문이 여러 줄로 구성되었다면 중괄호를 사용해야 합니다. 다만, 이 경우는 반드시 return 지시자를 사용해 반환 값을 명기해 주어야 합니다.


## 2. 호이스팅이란?

JavaScript에서 호이스팅(hoisting)이란, 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미합니다. var 로 선언한 변수의 경우 호이스팅 시 undefined 로 변수를 초기화합니다.


## 3. settimeout/setinterval

- setTimeout()
어떤 코드를 바로 실행하지 않고 일정 시간 기다린 후 실행해야하는 경우

<ex>
setTimeout(() => console.log("2초 후에 실행됨"), 2000);

2초 후에 실행됨

- setInterval()
어떤 코드를 일정한 시간 간격을 두고 반복해서 실행하고 싶을 때 사용

<ex>
setInterval(() => console.log(new Date()), 2000);

Sun Dec 12 2021 12:29:06 GMT-0500 (Eastern Standard Time)
Sun Dec 12 2021 12:29:08 GMT-0500 (Eastern Standard Time)
Sun Dec 12 2021 12:29:10 GMT-0500 (Eastern Standard Time)
Sun Dec 12 2021 12:29:12 GMT-0500 (Eastern Standard Time)
Sun Dec 12 2021 12:29:14 GMT-0500 (Eastern Standard Time)
Sun Dec 12 2021 12:29:16 GMT-0500 (Eastern Standard Time)
Sun Dec 12 2021 12:29:18 GMT-0500 (Eastern Standard Time)


## 4. 삼항연산자

삼항 연산자는 JavaScript에서 세 개의 피연산자를 받는 유일한 연산자입니다. 앞에서부터 조건문, 물음표(?), 조건문이 참(truthy)일 경우 실행할 표현식, 콜론(:), 조건문이 거짓(falsy)일 경우 실행할 표현식이 배치됩니다. 해당 연산자는 if...else문의 대체재로 빈번히 사용됩니다.

function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');
}

var age = 26;
var beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage); // "Beer"


## 5. 옵셔널 체이닝  (?.)


옵셔널 체이닝(optional chaining) ?. 을 사용하면 프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근할 수 있습니다.

let user = {}; // 주소 정보가 없는 사용자

alert( user?.address?.street ); // undefined, 에러가 발생하지 않습니다.



## 6. 고차함수


고차 함수는 함수를 인자(argument)로 받거나 함수를 리턴하는 함수를 말한다. 이 때 다른 함수(caller)의 인자(argument)로 전달되는 함수를 콜백 함수(callback function)라고 한다.

콜백 함수를 전달받은 함수는 이 콜백 함수를 호출(invoke)할 수 있다. caller는 조건에 따라 콜백 함수의 실행 여부를 결정할 수 있고, 여러번 실행도 가능하다.

