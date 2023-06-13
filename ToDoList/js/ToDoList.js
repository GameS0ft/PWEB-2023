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
  