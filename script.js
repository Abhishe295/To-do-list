let input = document.getElementById("input1");
let button = document.getElementById("button");
let list = document.getElementById("list-container");

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();  // Prevent the default action (if any)
        add();  // Call the add function
    }
});

function add() {
    if (input.value === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "";  
        li.appendChild(span);

        // Add event listeners for the new li and span
        span.addEventListener("click", () => {
            span.parentElement.remove();
            save();
        });

        li.addEventListener("click", () => {
            li.classList.toggle("checked");
            save();
        });

        save();
    }
    input.value = "";
}

function save() {
    localStorage.setItem("data", list.innerHTML);
}

function show() {
    list.innerHTML = localStorage.getItem("data");

    // Reassign event listeners after retrieving from localStorage
    let allLi = list.getElementsByTagName("li");
    for (let i = 0; i < allLi.length; i++) {
        let li = allLi[i];
        let span = li.getElementsByTagName("span")[0];

        // Reassign the same event listeners
        span.addEventListener("click", () => {
            span.parentElement.remove();
            save();
        });

        li.addEventListener("click", () => {
            li.classList.toggle("checked");
            save();
        });
    }
}

show();
