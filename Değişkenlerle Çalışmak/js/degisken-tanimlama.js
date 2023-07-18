

// alt gr + , = `` (for string)



function getname()
{
    let name=prompt("Adinizi soyadinizi giriniz:")
    while(!isNaN(parseFloat(name)))
    {
        alert("Yanlış karakter girdiniz. Lütfen tekrar deneyin.")
        name =prompt("Adinizi soyadinizi giriniz:")
        
    }
    document.getElementById('name').innerHTML="Merhaba "+name+"!"
};
    




var liste = document.getElementById("liste");
var veri = document.getElementById("veri");
var ekle = document.getElementById("ekle");

ekle.addEventListener("click", function () {
  var li = document.createElement("li");
  li.textContent = veri.value;
  liste.appendChild(li);
  veri.value = "";
});

var sil = document.getElementById("sil");

sil.addEventListener("click", function () {
  var liList = liste.getElementsByTagName("li");
  var lastLi = liList[liList.length - 1];

  if (lastLi) {
    liste.removeChild(lastLi);
  } else {
    console.error("List is empty. Nothing to delete.");
  }
});
