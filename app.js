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

// const li = document.createElement('li')
// const btn1 = Document.createElement('span')
// const btn2 = Document.createElement('span')
// console.log(li);
// console.log(btn1);
// console.log(btn2);
// li.textContent = listItemInput.value
// btn1 = innerText = "Edit"
// btn2 = innerText = "Delete"
// li.appendChild(btn1)
// li.appendChild(btn2)
// btn1.classList.add('listButtons')
// btn2.classList.add('listButtons')

//  myUnOrderList.appendChild(li)


 myUnOrderList.innerHTML = li

}