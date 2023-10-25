const listItemInput = document.querySelector("#listItem");

const myUnOrderList = document.querySelector("ul");

function submitHandler() {

    // console.log(listItemInput.value);

    const li = `<li>${listItemInput.value}  
    <div>
<span class="listbutton" id="edit">Edit</span>
<span class="listbutton" id="delete">Delete</span>
</div>
</li>`

 myUnOrderList.innerHTML = li

}