{

    const tasks = [
        {
            task: "wysłać zadanie",
            done: false,
        },
        {
            task: "umyć rower",
            done: true,
        },
    ];



    const render = () => {

        let HtmlString = "";

        for (const task of tasks) {
            HtmlString += `
        <li>
          ${task.task}
        </li>
        `;
        }

        document.querySelector(".js-list").innerHTML = HtmlString;
    };


    const init = () => {

        render();
    };

    init();
}