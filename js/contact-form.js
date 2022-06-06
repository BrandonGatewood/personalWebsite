//event listener to alert user that email has been sent
let submit = document.querySelector('#submit-form');
submit.addEventListener('click', handleClick);

function handleClick(event) {
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let message = document.querySelector('#message');
    
    if(name.value === "" && email.value === "" && message.value === "")
        alert("Name, Email, and Message required.");
    else if(name.value === "")
        alert("name is required.");
    else if(email.value === "")
        alert("email is requred.");
    else if(message.value === "")
        alert("message is requred.");
    else
        alert("Email sent!");
}

//event listener to determine if name has been inputted

