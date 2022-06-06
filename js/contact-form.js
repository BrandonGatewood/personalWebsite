//event listener to alert user that email has been sent
let submit = document.querySelector('#submit-form');
submit.addEventListener('click', handleClick);

function handleClick(event) {
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let message = document.querySelector('#message');
    
    //validate inputs before "sending" email
    if(name.value === "" && email.value === "" && message.value === "")
        alert("Name, Email, and Message required.");
    else if(name.value === "")
        alert("Name is required.");
    else if(email.value === "")
        alert("Email is requred.");
    else if(message.value === "")
        alert("Message is requred.");
    else
        alert("Email sent!");
}


