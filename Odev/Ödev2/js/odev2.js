

var list = document.getElementById("list");
var gorev = document.getElementById("task");
var ekle = document.getElementById("liveToastBtn");
var li = document.querySelector("li ")





ekle.addEventListener("click", function newElement () { //Listeye eleman ekler.
  var li = document.createElement("li");
  li.textContent = gorev.value;


  var deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.className = "btn";
  deleteButton.style.fontWeight = "bold";

  li.appendChild(deleteButton);
  list.appendChild(li);

  gorev.value = "";
});






var list = document.getElementById("list"); //Listeden eleman siler.

list.addEventListener("click", function(event) {
  if (event.target.classList.contains("btn")) {
    var listItem = event.target.parentNode;
    listItem.remove();
  }
});



function displayCheckedGroup() { // Listedeki elementi yapıldı olarak işaretler.
    var elem, i;
    for (i = 0; i < 5; i++) {
        elem = document.getElementById("in" + i)
        if (elem.checked) {
            alert(elem.nextSibling.nodeValue);
        }
    }
}