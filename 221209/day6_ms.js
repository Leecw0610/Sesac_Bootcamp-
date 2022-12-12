document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#todo");
  const addButton = document.querySelector("#add-button");
  const todoList = document.querySelector("#todo-list");
  const alert = document.querySelector("span");

  // '+' 버튼 익명 화살표 함수
  const addTodo = () => {
    if (input.value !== "") {
      const item = document.createElement("div");
      // 체크박스
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      // text
      const text = document.createElement("span");
      // 수정하기 버튼
      const editButton = document.createElement("button");
      editButton.textContent = "edit";
      // 제거하기 버튼
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "del";

      text.textContent = input.value;
      input.value = "";


      item.appendChild(checkbox);
      item.appendChild(text);
      item.appendChild(editButton);
      item.appendChild(deleteButton);
      todoList.appendChild(item);

      // 체크박스 이벤트 리스너
      checkbox.addEventListener("change", (event) => {
        if (event.currentTarget.checked) {
          text.style.textDecoration = "line-through";
        } else {
          text.style.textDecoration = "none";
        }
      });

      // 수정하기 버튼 이벤트 리스너
      editButton.addEventListener("click", ({target}) => {
        console.log(target)
        const span = target.parentElement.children[1]
        const value = span.textContent
        const input = document.createElement('input')
        input.value = value
        console.log(value)
        target.parentElement.insertBefore(editButton)
        span.remove()
      });
        
      

      // 제거하기 버튼 클릭 이벤트 리스너
      deleteButton.addEventListener("click", (event) => {
        todoList.removeChild(event.currentTarget.parentNode);
      });
      input.value = "";
      alert.textContent = "";
    }
    else alert.textContent = "할 일을 입력하세요!";
  };

  addButton.addEventListener("click", addTodo);

  // 할 일 입력창에서 enter key가 눌렸을 때
  input.addEventListener("keypress", (event) => {
    const ENTER = 13;
    if (event.keyCode === ENTER) addTodo();
  });
});

// async function getData() {
//   let data = await fetch("https://jsonplaceholder.typicode.com/todos/")
//     .then((res) => res.json())
//     .then((result) => result);

//   console.log(data[0].title);
//   let add_div = document.querySelector("#todo-list");
//   for(let i =0 ; i <data.length; i++){
//     console.log(data[i])

//     let list1 = createListDom(data[i].title);
//     // ul.appendChild(list1);
//     add_div.appendChild(list1)
//   }
// }




// function createListDom(title) {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <input type="checkbox">
//     <span>${title}</span>
//     <button>del</button>
//   `;
//   return div;
// }
