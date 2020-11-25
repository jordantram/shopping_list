var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = ul.getElementsByTagName("li");

/* Function used to add a delete button next to a given element */
function addDeleteButton(element) {
	var btn = document.createElement("BUTTON");
	btn.innerHTML = "Delete";

	/* All margins except margin to left of delete button will be 0 to eliminate
	   clicking whitespace to trigger ul event listener */
	btn.style.margin = 0;
	btn.style.marginLeft = "0.3em";

	element.appendChild(btn);

	/* Add an event listener that triggers a callback function to remove list item if its respective
	   delete button is clicked */
	btn.addEventListener("click", function() {
		btn.parentElement.remove();
	});
}

/* Add delete buttons for the existing list items pre-defined in HTML file */
for (var i = 0; i < items.length; i++) {
	addDeleteButton(items[i]);
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	addDeleteButton(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

/* Add event listener to unordered list element which toggles done class if event target is a list item */
ul.addEventListener("click", function(event) {
	if (event.target && event.target.nodeName === "LI") {
		event.target.classList.toggle("done");
	}
});