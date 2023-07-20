document.getElementById("liveToastBtn").addEventListener("click", function () {
  var task = document.getElementById("task").value.trim();

  if (task === "") {
    $("#liveToastEmpty").toast("show");
  } else {
    var li = document.createElement("li");
    li.textContent = task;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.className = "btn";
    deleteButton.style.fontWeight = "bold";

    li.appendChild(deleteButton);
    list.appendChild(li);

    $("#liveToast").toast("show");
    document.getElementById("task").value = "";
  }
});

document.getElementById("list").addEventListener("click", function (event) {
  if (event.target.classList.contains("btn")) {
    var listItem = event.target.parentNode;
    listItem.remove();
  }
});

document.getElementById("list").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
});
