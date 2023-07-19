var list = document.getElementById("list");
var gorev = document.getElementById("task");
var ekle = document.getElementById("liveToastBtn");

var li = document.querySelector("li ")



ekle.addEventListener("click", function newElement () { //Listeye eleman ekler.
  var li = document.createElement("li");
  li.textContent = gorev.value;
  li.value= li.textContent+this.append(<button class="btn" onclick="deleteButton()">X</button>);
  list.appendChild(li);
  gorev.value = "";
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

function buttonDel()    {

    var liste = document.querySelector("#list");
    
    li.removeChild(Element);

    list.removeChild(Element);
    
}

