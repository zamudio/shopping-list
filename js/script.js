// add items to list
let button = document.getElementById("addItem");
let input = document.getElementById("usrInput");
let ul = document.querySelector("ul");
let listlistlist = document.querySelector("li");
let listItems = document.getElementsByTagName("li");

// func that adds items
function addItemsToList() {
  if (input.value.length >= 1) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));

    let deleteBtn = document.createElement("button");
    let iElement = deleteBtn.appendChild(document.createElement("i"));
    iElement.classList.add("fa", "fa-trash");
    deleteBtn.id = "delete";

    li.appendChild(deleteBtn);
    ul.appendChild(li);
    input.value = "";
    deleteBtn.onclick = removeParent;
  }
}

// adds items on enter key
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addItemsToList();
  }
});

// adds items on button click
button.addEventListener("click", addItemsToList);

// strikethrough list items
// listlistlist.onclick = function (e) {
//   let target = e.target;
//   target.classList.toggle("done");
// };

// delete button on list elements
function deleteButton() {
  let deleteBtn = document.createElement("button");
  let iElement = deleteBtn.appendChild(document.createElement("i"));
  iElement.classList.add("fa", "fa-trash");
  deleteBtn.id = "delete";
  listItems[i].appendChild(deleteBtn);
  deleteBtn.onclick = removeParent;
}

// len of list
function listLength() {
  return listItems.length;
}

for (i = 0; i < listLength(); i++) {
  deleteButton();
}

// remove parent node from deleted list item
function removeParent(e) {
  if ("I" == e.target.nodeName) {
    e.target.parentNode.parentNode.remove();
  } else {
    e.target.parentNode.remove();
  }
}
