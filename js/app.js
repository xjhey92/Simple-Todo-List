let input_name = document.getElementById("input_name");
let input_add = document.getElementById("input_add");
let name_target = undefined;
let tasks = document.getElementById("tasks");
let tasks_todo = document.getElementsByClassName("todo");

input_name.addEventListener("keypress", event => {
    name_target = event.target;
    if (event.key === "Enter") {
        input_add.click();
    }
});

input_add.addEventListener("click", event => {
    if (name_target.value.trim()) {
        todoItem(name_target.value.trim());
        name_target.value = '';
    }
});

const todoItem = (value) => {
    const div = document.createElement("div");
    div.className = "todo";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "done-checkbox";
    const input = document.createElement("input");
    input.className = "name";
    input.type = "text";
    input.value = value;
    input.disabled = true;
    const div2 = document.createElement("div");
    div2.className = "action";
    const edit = document.createElement("button");
    edit.className = "edit";
    edit.innerHTML = "Edit";
    const remove = document.createElement("button");
    remove.className = "remove";
    remove.innerHTML = "Remove";

    div2.appendChild(edit);
    div2.appendChild(remove);
    div.appendChild(checkbox);
    div.appendChild(input);
    div.appendChild(div2);
    tasks.appendChild(div);

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            input.classList.add("done-mark");
        } else {
            input.classList.remove("done-mark");
        }
    });

    remove.addEventListener("click", () => {
        div.remove();
    });

    edit.addEventListener("click", () => {
        input.disabled = false;
        input.focus();
    });

    input.addEventListener("keypress", event => {
        if (event.key === "Enter") {
            input.disabled = true;
        }
    });
};
