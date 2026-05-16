

let task=document.getElementById("taskInput")
let addBtn=document.getElementById("addBtn")
let taskList=document.getElementById("taskList")




addBtn.addEventListener("click", () => {
    let typedTask = task.value;
    let list=document.createElement("li")
    let check = document.createElement("input");
    check.setAttribute("type","checkbox");
    let del = document.createElement("button");
    del.innerText="Delete"
    let span =document.createElement("span");
    span.innerText=typedTask;
    list.appendChild(check);
    list.appendChild(span)
    list.appendChild(del);
    taskList.appendChild(list)
    updateCounter();

    check.addEventListener("change",() => {
    span.classList.toggle("done")
    updateCounter();
})

del.addEventListener("click", () => {
    list.remove();
    updateCounter();
})
})




let allBtn = document.getElementById("allBtn");
let activeBtn = document.getElementById("activeBtn");
let completeBtn = document.getElementById("completeBtn");

allBtn.addEventListener("click",()=>{
    let allTask=taskList.querySelectorAll("li");
    allTask.forEach((task) => {
        task.style.display="block";
    })
})

activeBtn.addEventListener("click", () => {
    let allTask=taskList.querySelectorAll("li");
    allTask.forEach((task) => {
        let checkbox=task.querySelector("input[type='checkbox']")
        if(checkbox.checked){
            task.style.display="none";
        }
        else{
            task.style.display="block";
        }
       
    })
})


completeBtn.addEventListener("click", () => {
    let allTask=taskList.querySelectorAll("li");
    allTask.forEach((task) => {
        let checkbox=task.querySelector("input[type='checkbox']")
        if(checkbox.checked){
            task.style.display="block";
        }
        else{
            task.style.display="none";
        }
       
    })
})

let counter = document.getElementById("counter")

function updateCounter(){
    let allTask=taskList.querySelectorAll("li")
    let remaining=0;
    allTask.forEach((task) => {
        let checkbox=task.querySelector("input[type='checkbox']")
        if(!checkbox.checked){
            remaining++;
        }
    })

    counter.innerText= `${remaining} tasks remaining`
}






