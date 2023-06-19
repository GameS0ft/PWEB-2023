dragula([
  document.getElementById("to-do"),
  document.getElementById("doing"),
  document.getElementById("done"),
  document.getElementById("trash")
], {
  removeOnSpill: false
})
.on("drag", function(el) {
  el.classList.remove("ex-moved");
})
.on("drop", function(el) {
  el.classList.add("ex-moved");
})
.on("over", function(el, container) {
  container.classList.add("ex-over");
})
.on("out", function(el, container) {
  container.classList.remove("ex-over");
});


function addTask() {
  
  var inputTask = document.getElementById("taskText").value;
 
  document.getElementById("to-do").innerHTML +=
    "<li class='task'><p>" + inputTask + "</p></li>";
  
  document.getElementById("taskText").value = "";
}


function emptyTrash() {
  
  document.getElementById("trash").innerHTML = "";
}


function enableTaskEditing() {
  var taskLists = document.getElementsByClassName("task-list");

  for (var i = 0; i < taskLists.length; i++) {
    var taskList = taskLists[i];

    taskList.addEventListener("dblclick", function(e) {
      if (e.target.tagName === "P") {
        var taskElement = e.target;
        var originalText = taskElement.textContent;
        var inputElement = document.createElement("input");
        inputElement.type = "text";
        inputElement.value = originalText;
        inputElement.classList.add("editing");
        inputElement.classList.add("no-outline");

        inputElement.addEventListener("keydown", function(event) {
          if (event.key === "Enter" || event.key === "Escape") {
            var newText = inputElement.value.trim();

            if (newText !== "") {
              taskElement.textContent = newText;
            }

            taskElement.classList.remove("editing");
            inputElement.parentNode.replaceChild(taskElement, inputElement);
          }
        });

        inputElement.addEventListener("blur", function() {
          var newText = inputElement.value.trim();

          if (newText !== "") {
            taskElement.textContent = newText;
          }

          taskElement.classList.remove("editing");
          inputElement.parentNode.replaceChild(taskElement, inputElement);
        });

        taskElement.classList.add("editing");
        taskElement.parentNode.replaceChild(inputElement, taskElement);
        inputElement.focus();
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", enableTaskEditing);
