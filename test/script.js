let addList = document.querySelector("#addToListButton")




function addToList() {
    let list= document.querySelector("#list1");
    let newListItem=document.createElement("li");
    
    var textInput=document.querySelector("#textInput").value;
    if(textInput <=0)   {
        alert("0dan büyük bir sayı girin.")
    }
    
    var node = document.createTextNode(textInput);

    newListItem.append(node);
    list.append(newListItem);
}

function deleteFromList() {
    let list= document.querySelector("#list1");
    let deleteListItem=document.removeChild("li");

    var numberInput=document.querySelector("#numberInput").value
    var node = document.removeChild(list[deleteListItem -1])
    
    console.log(`Deleted item ${numberInput}`)
}