// ==============header scroll effect===============
const header = document.querySelector("header");
const sectionOne = document.querySelector(".home");

const sectionOneOptions = {
    rootMargin: "-80% 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
) {
entries.forEach(entry => {
    if (!entry.isIntersecting) {
        header.classList.add("header--scrolled");
    } else {
        header.classList.remove("header--scrolled");
    }
});
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

//============== hamburger menu ================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navmenu");
const body = document.querySelector("body")

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("hamburger-active");
})

// ==================video carousel=====================
const slider = document.getElementById("slider");
function videoURL(link){
    slider.src = link;
}

// ===================todo-list==========================
const newTodo = document.querySelector(".todo-list__header > .btn");
const addTodo = document.querySelector(".todo-add");
const addTodoText = document.querySelector(".todo-add > input");
const addTodoBtn = document.querySelector(".todo-add > .btn");
const taskList = document.querySelector(".todo-list > ul");
const taskListSpan = document.querySelector(".todo-list ul li span");
const checkbox = document.querySelector(".todo-list input[type=checkbox]");
newTodo.addEventListener("click", () =>{    //opening the todo-add tab 
    addTodo.classList.toggle("active");
    newTodo.classList.toggle("active");
    if(newTodo.classList.contains("active")){
        newTodo.innerHTML = "Close";
    }
    else{
        newTodo.innerHTML = "<span class='text-font--24'>+</span>New";
    }
})
addTodoText.addEventListener("keyup", () =>{
    if(addTodoText.value.trim() != 0){
        addTodoBtn.classList.add("active");
    }
    else{
        addTodoBtn.classList.remove("active");
    }
})
let newLiTag = '';
addTodoBtn.addEventListener("click", () =>{
    if (addTodoText.value.trim() != 0){
        let element = addTodoText.value;    
        taskList.innerHTML += `<li class="margin-bottom--10"><span class="text--tertiary">${element}</span><input type="checkbox"></li>`;
        addTodoText.value = "";
    }
})
// checkbox.addEventListener("click", () =>{
//     taskListSpan.classList.toggle("done");
// })
