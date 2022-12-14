import "./vm_00.css";

var money = 0; //처음 돈 상태는 0원
//현재 잔액 확인해주는 것 (현재 money값이 html에 찍히게 함)
document.getElementById("current").innerHTML = money + "원";

//현재 금액에 따라 제품색상 변하게 해주는 함수

function color_change() {
  //만약 1000원이상 들어있으면 모든 제품을 다 구매가능하니 전부 파란색으로 변경
  if (money >= 1000) {
    document.getElementById("tea").style.color = "blue";
    document.getElementById("coffee").style.color = "blue";
    document.getElementById("water").style.color = "blue";
  } else if (money >= 700) {
    document.getElementById("coffee").style.color = "blue";
    document.getElementById("water").style.color = "blue";
  } else if (money >= 500) {
    document.getElementById("water").style.color = "blue";
  } else {
    document.getElementById("tea").style.color = "red";
    document.getElementById("coffee").style.color = "red";
    document.getElementById("water").style.color = "red";
  }
}
//버튼1을 클릭하면 현재 금액(money)에 1000원추가됨
function click_btn1() {
  money = money + 1000;
  color_change();
  alert("1000원 넣음");
  document.getElementById("current").innerHTML = money + "원";
}

function click_btn2() {
  money += 500;
  color_change();
  alert("500원 넣음");
  document.getElementById("current").innerHTML = money + "원";
}

function click_btn3() {
  money += 100;
  color_change();
  alert("100원 넣음");
  document.getElementById("current").innerHTML = money + "원";
}

function click_coffee() {
  if (money < 700) {
    alert("돈이 부족합니다");
  } else {
    money -= 700;
    alert("커피 뽑음");
    color_change();
    document.getElementById("current").innerHTML = money + "원";
  }
}

function click_water() {
  if (money < 500) {
    alert("돈이 부족합니다");
  } else {
    money -= 500;
    alert("물 뽑음");
    color_change();
    document.getElementById("current").innerHTML = money + "원";
  }
}

function click_tea() {
  if (money < 1000) {
    alert("돈이 부족합니다");
  } else {
    money -= 1000;
    alert("옥수수수염차 뽑음");
    color_change();
    document.getElementById("current").innerHTML = money + "원";
  }
}

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", click_btn1);

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", click_btn2);

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", click_btn3);

const coffee = document.getElementById("coffee");
coffee.addEventListener("click", click_coffee);

const water = document.getElementById("water");
water.addEventListener("click", click_water);

const tea = document.getElementById("tea");
tea.addEventListener("click", click_tea);
