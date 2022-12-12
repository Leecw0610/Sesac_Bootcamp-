init ()

function init() {
    setAddEvent();
    setPriorData();
    setFilter();
}

async function getData() {
    return await fetch('https://jsonplaceholder.typicode.com/todos/').then(res => res.json()).then(result => result)
}

async function setPriorData() {
    const data = await getData()
    const ul = document.querySelector('ul')

    data.forEach(e => {
        if(e.id < 5) {
            ul.appendChild(createListDom(e.title, e.completed))
        }
    })
}

function createListDom(title, completed) {
    let li = document.createElement('li')
    li.innerHTML = `
        <input type="checkbox" ${completed ? 'checked' : ''}>
        <div>${title}</div>
        <button>X</button>
    `
    let delBtn = li.querySelector('button')
    delBtn.addEventListener('click', removeParent)
    return li
}

function removeParent({target}) {
    target.parentElement.remove()
}

function setAddEvent() {
    const input = document.querySelector('input')
    const button = document.querySelector('button')

    input.addEventListener('keyup', (event) => {
        event.key == 'Enter' ? inputToList() : '';
    }) 
    button.addEventListener('click', () => {
        inputToList()
    })
}

function inputToList() {
    const ul = document.querySelector('ul')
    const input = document.querySelector('#input')
    if(input.value) {
        createListDom(input.value, false)
        ul.appendChild(createListDom(input.value, false))
        input.value = ''
    }
}

function setFilter() {
    let filterBtns = document.querySelectorAll('.filter')
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterList(btn.dataset.kind)
        })
    })
}

function filterList(kind) {
    if(kind == 'all') displayAll();
    if(kind == 'completed') displayCompleted();
    if(kind == 'todo') displayTodo()
}
//if문으로 새로운 정렬방식 추가 용이

function displayAll() {
    const lis =document.querySelectorAll('li')
    lis.forEach(li => {
        li.style.display = 'flex'
})
}

function displayCompleted() {
    const lis =document.querySelectorAll('li')
    lis.forEach(li => {
        li.style.display = li.children[0].checked ? 'flex' : 'none'
    })
}
//checked가 true일 때만 flex, false일 때 none으로 출력을 가림


function displayTodo() {
    const lis =document.querySelectorAll('li')
    lis.forEach(li => {
        li.style.display = !li.children[0].checked ? 'flex' : 'none'
    })
}