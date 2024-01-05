/* Follow the instructions found in the description to complete the JavaScript functionality.*/

let itemsContainer = document.getElementById("itemsContainer");
let addProjectButton = document.getElementById("addProjectButton");




function getProjectsListFromLocalStorage() {
    let stringifiedList = localStorage.getItem("projectList");
    let parsedList = JSON.parse(stringifiedList);
    if (parsedList === null) {
        return [];
    } else {
        return parsedList;
    }
}

let projectEl = document.getElementById("projects");
projectEl.onclick = function() {
    let projectConEl = document.getElementById("projects-con");
    projectConEl.classList.remove("pro");
    let mainCon = document.getElementById("first-con");
    mainCon.classList.add("button1")

};

let aboutEl = document.getElementById("about");
aboutEl.onclick = function() {
    let projectConEl = document.getElementById("projects-con");
    let mainCon = document.getElementById("first-con");
    mainCon.classList.add("button1")
    let aboutCon = document.getElementById("ab-con");
    aboutCon.classList.remove("pro")
    aboutCon.classList.add("a-con")

};

let contactEl = document.getElementById("contact");
contactEl.onclick = function() {
    let projectConEl = document.getElementById("projects-con");
    let mainCon = document.getElementById("first-con");
    mainCon.classList.add("button1")
    let contactCon = document.getElementById("cont-con");
    contactCon.classList.remove("pro")
    contactCon.classList.add("a-con")

};




let projectsList = getProjectsListFromLocalStorage();
let projectCount = projectsList.length;



function onAddproject() {
    let userInputElement = document.getElementById("userInput");
    let userDescription = document.getElementById("userDesc");
    let userLink = document.getElementById("userLinkInput")
    let userInputValue = userInputElement.value;
    let userDescriptionValue = userDescription.value;

    if (userInputValue === "") {

        return;
    }

    projectCount = projectCount + 1;

    let newProject = {
        text: userInputValue,
        description: userDescriptionValue,
        uniqueNo: projectCount,
    };
    projectsList.push(newProject);
    createAndAppendProject(newProject);
    userInputElement.value = "";
    userDescription.value = "";
    userLink.value = "";
}

addProjectButton.onclick = function() {
    onAddproject();
};




function createAndAppendProject(each) {
    let todoId = "each" + each.uniqueNo;
    let checkboxId = "checkbox" + each.uniqueNo;
    let labelId = "label" + each.uniqueNo;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-col");
    todoElement.id = todoId;
    itemsContainer.appendChild(todoElement);



    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", );
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("h1");

    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add("title");
    labelElement.textContent = each.text;
    labelContainer.appendChild(labelElement);
    let descEl = document.createElement("p")
    descEl.classList.add("checkbox-label");
    descEl.textContent = each.description;
    labelContainer.appendChild(descEl);

    let viewbtn = document.createElement("button");
    viewbtn.textContent = "View Project";
    viewbtn.classList.add("v-btn");
    labelContainer.appendChild(viewbtn);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");


    deleteIcon.onclick = function() {
        onDeleteTodo(todoId);
    };

    deleteIconContainer.appendChild(deleteIcon);
}

for (let each of projectsList) {
    createAndAppendProject(each);
}