// let lis = document.querySelectorAll("ul li");
// let con = document.querySelector(".container");

// if (window.localStorage.getItem("color")) {
//     con.style.backgroundColor = window.localStorage.getItem("color");
//     lis.forEach((li) => {
//         li.classList.remove("active")
//     });
//     document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
// } else {
//     console.log("No");
// }

// lis.forEach((li) => {
//     li.addEventListener("click", (e) => {
//         console.log(e.currentTarget.dataset.color)
//         lis.forEach((li) => {
//             li.classList.remove("active")
//         })
//         lis.forEach((li) => {
//             li.addEventListener("click", (e) => {
//                 e.currentTarget.classList.add("active");
//                 window.localStorage.setItem("color", e.currentTarget.dataset.color);
//                 con.style.backgroundColor = window.localStorage.getItem("color");
//             })
//         })
//     })
// });

// let form = document.querySelector("form");
let inputTask = document.querySelector("#add");
let addBtn = document.querySelector("#sub");
let pubDiv = document.querySelector(".tasks");
let taskArray = []

// add.innerHTML = addTask.value;

window.onload = (e) => {
    inputTask.focus()
}

addBtn.onclick = function() {
    if (inputTask.value.trim() !== "") {
        taskArray.push(inputTask.value.trim());
        addTaskFunc(inputTask.value.trim());
        inputTask.value = "";
    }
}

if (window.localStorage.getItem("tasks")) {
    taskArray = (window.localStorage.getItem("tasks").split(","))
    for (let i = 0; i < taskArray.length; i++) {
        addTaskFunc(taskArray[i]);
    }
}

function addTaskFunc(redTask) {
    if (redTask !== "") {
        let addedTaskDiv = document.createElement("div");
        addedTaskDiv.className = "adtask"
        let addedTaskTx = document.createTextNode(redTask);
        addedTaskDiv.appendChild(addedTaskTx);
        let deletBtn = document.createElement("button");
        let deletBtnTx = document.createTextNode("delete");
        deletBtn.setAttribute("btn-Tx", redTask)
        deletBtn.className = "btndelete"
        deletBtn.appendChild(deletBtnTx)
        addedTaskDiv.appendChild(deletBtn)
        pubDiv.appendChild(addedTaskDiv)
        window.localStorage.setItem("tasks", (taskArray));
    };
};
document.addEventListener("click", (e) => {
    if (e.target.hasAttribute("btn-Tx")) {
        for (let i = 0; i < taskArray.length; i++) {
            if (taskArray[i] === e.target.getAttribute("btn-Tx")) {
                taskArray.splice(i, 1);
                console.log("Ok del")
            }
        }
        e.target.parentElement.remove();
        console.log(e.target.parentElement)
        window.localStorage.setItem("tasks", (taskArray));
    }
});

let night = document.querySelector(".night");
let morning = document.querySelector(".morning");
let btnT = document.querySelector(".btn-2")
let btnA = document.querySelector(".btn")

night.addEventListener("click", (e) => {
    night.style.cssText = "transform: translateX(30px);"
    morning.style.cssText = "transform: translateX(0px);"
    document.body.style.cssText = "background-color: #333;"
    btnT.style.cssText = "display: inline;"
    btnA.style.cssText = "display: none;"
})
morning.addEventListener("click", (e) => {
    morning.style.cssText = "transform: translateX(30px);"
    night.style.cssText = "transform: translateX(0px);"
    document.body.style.cssText = "background-color: whight;"
    btnT.style.cssText = "display: none;"
    btnA.style.cssText = "display: inline;"
})