// taskManager 만들어보기

// - [ 할일추가, 완료처리, 목록보기 ] 이렇게 3가지 기능이 필요
// - 객체를 이용하여 만들어보기( 프로퍼티, 메소드 )

class TaskManager{

    task_list = [];
    complete_list = [];

    addTask(item){
        console.log("할일 추가 : " + item);
        this.task_list.push(item);
    }

    completeTask(item){
        console.log("완료 : " + item);
        let item_index = this.task_list.indexOf(item);
        this.task_list.splice(item_index, 1);
        this.complete_list.push(item);
    }

    listAllTasks(){
        console.log("#######################");
        console.log("할일 목록 : " + this.task_list);
        console.log("완료 목록 : " + this.complete_list);
        console.log("#######################");
    }

    cancelCompletedTask(item){
        console.log("취소 : " + item);
        let item_index = this.complete_list.indexOf(item);
        this.complete_list.splice(item_index, 1);
        this.task_list.push(item);
    }
}


var taskManager = new TaskManager();
taskManager.addTask('a');
taskManager.addTask('b');
taskManager.addTask('c');
taskManager.completeTask('a');
taskManager.listAllTasks('b');
taskManager.completeTask('c');
taskManager.listAllTasks();

console.log("- - -")

taskManager = new TaskManager();
taskManager.addTask('a');
taskManager.addTask('b');
taskManager.addTask('c');
taskManager.completeTask('a');
taskManager.listAllTasks('b');
taskManager.completeTask('c');
taskManager.listAllTasks();
taskManager.cancelCompletedTask('a');
taskManager.listAllTasks();