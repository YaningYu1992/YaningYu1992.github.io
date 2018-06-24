var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var itemdiv = document.getElementsByClassName("itemdiv");
var deletebtn = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function listLength() {
	return li.length;
}

function addEventListenerToDeleteButton(button) {
	button.addEventListener("click", deleteItemAfterClick);
}

function addEventListenerToItem(item) {
	item.addEventListener("click", lineThroughItemAfterClick);
}

function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var button = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	addEventListenerToItem(li);
	button.appendChild(document.createTextNode("Delete"));
	addEventListenerToDeleteButton(button);
	div.appendChild(li);
	div.appendChild(button);
	div.classList.add("itemdiv");
	ul.appendChild(div);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0){
		createListElement();
	}
}

function addListAfterPressEnter(event) {
	//event.which == 13 works as well
	if (inputLength() > 0 && event.keyCode == 13){
		createListElement();
	}
}

function lineThroughItemAfterClick(event) {
	event.target.classList.toggle("done");
}

function deleteItemAfterClick(event) {
	parentNode = event.target.parentNode;
	while (parentNode.firstChild) {
		parentNode.removeChild(parentNode.firstChild);
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterPressEnter);
for (var i = 0; i < listLength(); i++) {
	addEventListenerToItem(li[i]);
}
for (var i = 0; i < listLength(); i++) {
	addEventListenerToDeleteButton(deletebtn[i]);
}