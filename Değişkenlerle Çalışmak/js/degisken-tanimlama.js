

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
    




var liste = document.querySelector("ul");

var urun = document.querySelector("#veri")
var ekle = document.querySelector("#ekle")

ekle.addEventListener("click",function(){
    var li= document.createElement("li");

    li.textContent=veri.value;

    liste.appendChild(li);
    
    veri.value="";
});