/* Custom Dragula JS */
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
  
  /* Vanilla JS to add a new task */
  function addTask() {
    /* Get task text from input */
    var inputTask = document.getElementById("taskText").value;
    /* Add task to the 'To Do' column */
    document.getElementById("to-do").innerHTML +=
      "<li class='task'><p>" + inputTask + "</p></li>";
    /* Clear task text from input after adding task */
    document.getElementById("taskText").value = "";
  }
  
  /* Vanilla JS to delete tasks in 'Trash' column */
  function emptyTrash() {
    /* Clear tasks from 'Trash' column */
    document.getElementById("trash").innerHTML = "";
  }
  