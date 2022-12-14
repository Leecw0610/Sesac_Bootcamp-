


// 최초 시작시 세팅
// 잔액 0원 , 로그 초기화
function init() {
    setInitMoney() 
    setProductEvent()
    setAmountEvent()
    setNavClickBtn()
}

let money = 0; //최초 돈 상태는 0원 (전역변수)
init()


function setInitMoney() {    
    //money로 현재 잔액 확인 (현재 money값을 html에 출력)
    let moneyText = document.getElementById("current")
    console.log(moneyText)
    moneyText.innerHTML = money + "원";
}




// 상품란에 각 상품버튼 눌렸을 때 이벤트 리스너
// 1. 클릭하면 가격부분 찾아서 price빼주고 다시 값 화면에 출력하기
// 2. 상품가격이 잔액을 초과하는 경우 Alert으로 잔액 부족 출력, Log에도 띄움.
function setProductEvent() {
    let products = document.querySelector('.product')
    for(let i = 0; i < products.childElementCount; i++) {
        let inputBtn = products.children[i].querySelector('input')
        inputBtn.addEventListener('click', ({target}) => {
            console.log(target, target.dataset.price)
            consumeMoney(target.dataset.price)
        })
    }
}

// 금액란에 각 금액버튼 눌렀을 때 이벤트 리스너
// 1. 금액 추가시 Alert으로 충전액 출력
// 1-1. Alert 확인을 누를 시에 잔액 충전, Log에도 띄움.
function setAmountEvent() {
    let amounts = document.querySelector('.account').children
    for(let i = 0; i < amounts.length; i++) {
        amounts[i].addEventListener('click', ({target}) => {
            console.log(target, target.dataset.price,typeof(target.dataset.price))
            
            addMoney(Number(target.dataset.price))
        })
    }
}




function addMoney(price) {
    document.getElementById("current").innerHTML = `${money + price}` + "원";
    money = money + price
    writeLog(`${price}원이 입금되었습니다.`)
    //money += 각버튼의 price;
    //alert("'각버튼의 price' 넣음");
    
}


// 가격부분 찾아서 price빼주고 다시 값 화면에 출력하기
// 1. 금액 모자랄 시 (if문) 금액이 모자랍니다 Alert 필요
function consumeMoney(price) {
    document.getElementById("current").innerHTML = `${money - price}` + "원";
    money = money - price
    writeLog(`${price}원이 출금되었습니다.`)
}

// Log 파트 출력 부분
// 1. ul에 li속성으로 로그 하나씩 추가 (맨 위에서부터 아래로 한줄씩 밀어내기 방식)
// 2. 일정 구간이 넘으면 로그를 스크롤로 탐색 
// 3. Log 파트 아래 부분은 항상 sticky 하게 둠
function writeLog(text) {
    console.log(text)
    let a_log = document.getElementById("logList");
    let liElement = document.createElement('li');
    liElement.textContent = text;
    a_log.prepend(liElement);
    
}




// 점보트론 nav에 상품.출력.금액 버튼 이벤트 리스너
// 각 영역을 포커싱할 수 있게 'css boarder'라든지 something!
function setNavClickBtn() {
    let loadbtn = document.querySelector('nav').children
    let choiceSection1 = document.querySelector('.section1')
    let choiceSection2 = document.querySelector('.section2')
    let choiceSection3 = document.querySelector('.section3')
    //console.log(loadbtn)

    for(let i = 0; i < loadbtn.length; i++) {
        loadbtn[i].addEventListener('click', ({target}) => {
            //console.log(target, target.innerHTML)
            navDeactive()
            if (target.innerHTML==='상품'){
                choiceSection1.classList.add('press')
            }
            if (target.innerHTML==='출력'){
                choiceSection2.classList.add('press')
            }
            if (target.innerHTML==='금액'){
                choiceSection3.classList.add('press')

            }

            
            
        })
    }
}


function add() {
	element.classList.add('active');
}

function remove() {
	element.classList.remove('active');
}
//Element.classList.remove

function navDeactive() {
    let sections = document.querySelectorAll('.section')
    for(let i = 0; i< sections.length; i++) {
        sections[i].classList.remove('press')
    }
}

//가격이 변할때마다 상품 구매 가능 / 불가능을 색으로 표현하는 함수

function availProduct() {
    //1. 상품을 select

}

//current account 가 변하면 함수 항상 적용