{

    const tasks = [
        {
            task: "wysłać zadanie",
            done: false,
        }
    ];



    const render = () => {

        let HtmlString = "";

        for (const task of tasks) {
            HtmlString += `
        <li class="js-list__li"
        >
           <button class="js-done"><span class="js-done__emoji">👍</span></button>
          <span class="js-span"
          ${task.done ? " style =\"text-decoration: line-through\"" : ""}
          >${task.task}</span>
          <button class="js-remove">&#10060;</button>
        </li>
        `;
        }

        document.querySelector(".js-list").innerHTML = HtmlString;

        const removeButton = document.querySelectorAll(".js-remove");

        removeButton.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toogleDone = document.querySelectorAll(".js-done");
        const emoji = document.querySelector(".js-done__emoji");

        toogleDone.forEach((toogleDone, index) => {
            toogleDone.addEventListener("click", () => {
                toggleTaskDone(index);
                emoji.textContent = "👎";
            });
        });


    };

    const addNewTask = (newTask) => {

        tasks.push({
            task: newTask,
        });
        render();
    }

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    }

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTask = document.querySelector(".js-addTask").value.trim();
        console.log(newTask);

        if (newTask === "") {
            return;
        }

        addNewTask(newTask);

    };

    const init = () => {

        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };

    init();
}