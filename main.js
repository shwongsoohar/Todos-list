
var todos = [];

function Todo(name) {
    "use strict";
	this.name = name;
	this.completed = false;
}

//Add New Todo

function addNewTodoWithName(name) {
	"use strict";
	var t = new Todo(name);
	todos.push(t);
}


//Remove Todo
function removeTodoAtIndex(index) {
	"use strict";
	todos.splice(index, 1);
}

//Get Todo
function getTodosAtIndex(index) {
	"use strict";
	return todos[index];
}

//List Todos

function listTodos() {
	"use strict";
	for (var i in todos){
	var todo = todos[i];		
		var html = " ";
		var name = todo.name;
		var completed = todo.completed;
		html += "<li>"+name+" "+completed+"</li>";
	}
	$("#list-todos").html(html);
}

addNewTodoWithName("Eat breakfast");
addNewTodoWithName("Brush Teeth");
addNewTodoWithName("Tie Shoes");
addNewTodoWithName("Walk to School");
addNewTodoWithName("Walk Dog");
addNewTodoWithName("Feed Cat");

listTodos();
console.log("*******");

removeTodoAtIndex(1);
listTodos();