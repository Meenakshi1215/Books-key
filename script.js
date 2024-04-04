// selecting popup box
var popupboxoverlay = document.querySelector(".popupoverlay")
var popupbox = document.querySelector(".popupbox")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener('click',function(){
    popupboxoverlay.style.display = "block"
    popupbox.style.display = "block"
})

//select cancel button
var cancelbutton = document.getElementById("cancel-popup")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupboxoverlay.style.display = "none"
    popupbox.style.display = "none"
})

//selecting container,add book,book-title,book-author,book-description

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitle = document.getElementById("book-title-input")
var bookauthor = document.getElementById("book-author-input")
var bookdescription = document.getElementById("book-description")

addbook.addEventListener("click",function(){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML =`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupboxoverlay.style.display = "none"
    popupbox.style.display = "none"
})

function deletebook(event){
    event.target.parentElement.remove()
}