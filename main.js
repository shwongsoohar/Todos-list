
var todos = [];

function Todo(name) {
    "use strict";
	this.name = name;
	this.completed = false;
}

//Add New Todo

function addNewTodoWithName(name) {
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
    // Move this variable outside the loop 
    var html = "";
	for (var i in todos){
        var todo = todos[i];
        // Log the todos in the array to make sure your todos array contains Todo Items.
        console.log(todo);
        // var html = ""; // Need to move this outside the loop or it gets over written each iteration. 
        var name = todo.name;
        var completed = todo.completed;
        html += "<li>"+name+" "+completed+"</li>";
	}
    // Log the HTML output here to make your string contains what you think it contains.
    console.log(html);
    // Then double check the id name #list-todos against what you have in your HTML doc.
    // You can log the element to test it: 
    console.log($("#list-todos")); // !!!! This produced an empty array so the element doesn't exist!
    // But it exists in your Page. In your case the element doesn't exist when the script is run. 
    // This is because main.js is loaded in the head of the document. The code at the top 
    // of page loads and executes before the HTML below is loaded. 
    // Solution: Load main at the bottom of the page before the body tag closes. 
    
	$("#list-todos").html(html);
}

addNewTodoWithName("Eat breakfast");
addNewTodoWithName("Brush Teeth");
addNewTodoWithName("Tie Shoes");
addNewTodoWithName("Walk to School");
addNewTodoWithName("Walk Dog");
addNewTodoWithName("Feed Cat");

removeTodoAtIndex(1);
listTodos();