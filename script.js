const inputText = document.getElementById("input-text");
const toDoBlock = document.getElementById("to-do-block");

function addTask() {
    if (inputText.value == '') {
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.classList.add("task");

        li.innerHTML = `
        <span class="checkboxleft">
            <img src="images/check.svg" alt="">
        </span>
        
        <span class="text">${inputText.value}</span>
        
        <span class="checkboxright">
            <img src="images/delete.svg" alt="">
        </span>
        `;

        toDoBlock.appendChild(li);
        inputText.value = '';
    }
}
toDoBlock.addEventListener("click", function(e){

    if (e.target.closest(".checkboxright")){
        e.target.closest("li").remove();
    }

    if (e.target.closest(".checkboxleft")){
        e.target.closest("li").style.textDecoration = "line-through";
        e.target.closest("li").style.backgroundColor = "#8CD4CB";
    }

});