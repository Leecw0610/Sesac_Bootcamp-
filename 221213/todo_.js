main()



function main() {
    addList();
    showlist();
    //     .then((result) => result);
    //console.log(a);
}

async function getData(){
    return await fetch("https://jsonplaceholder.typicode.com/todos/").then(res => res.json())
    
}

async function showlist(){
    const data = await getData();
    //console.log(data);
    const ul = document.querySelector('ul');

    for (var i=0; i < data.length; i++){
        ul.appendChild(createList(data[i].userId, data[i].title, data[i].completed))
    }
}



function addList() {
    // 입력받을 아이디와 할 일 부분을 찾는다.
    const inputId = document.querySelector('#inputId');
    const inputText = document.querySelector('#inputText');
    const addBtn = document.querySelector('.addBtn');
    const ul = document.querySelector('#todo_list')

    // console.log(inputId.value);
    // console.log(inputText.value);
    // console.log(addBtn);
    addBtn.addEventListener('click', function(){
        //alert('click');
        // 1. ID 입력값 확인하기
        // 2. 할일 입력값 확인하기
        // 3. <li> 태그로 리스트 추가하기</li>
        
        console.log(inputId.value)

        if(inputId.value.length<1){
            alert("ID를 입력해주세요")
        }
        else if(inputText.value.length<1){
            alert("할일을 입력해주세요")
        }
        else {
            // 1. ul에 하위로 리스트를 추가한다
            // --> ul.appendChild()
            ul.appendChild(createList(inputId.value, inputText.value, true));
        }
        inputId.value='';
        inputText.value='';
    });
}

function createList(id, text, completed) {
    // 0. 완료여부(check)를 확인해야한다.
    // 1. id 값이 나와야한다.
    // 2. 할일 값이 나와야한다.
    // 3. 삭제버튼을 생성해야한다.
    let check_value= '';
    let li = document.createElement('li');
    if(completed===true){
        check_value = 'checked';
    }

    li.innerHTML = `
    <input type="checkbox" ${check_value}>
    <div>${id}</div>
    <div>${text}</div>
    <button class="remove">X</button>
    `
    let delBtn = li.querySelector('.remove');
    delBtn.addEventListener('click',liremove)

    return li
}

function liremove({target}){
    //console.log(target);
    //console.log(target.parentElement);
    target.parentElement.remove();
}