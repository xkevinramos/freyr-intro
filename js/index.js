const today = new Date();
let thisYear = today.getFullYear(); // get current year

// create paragraph element within the footer 
const footer = document.querySelector('footer');
const copyright = document.createElement('p');  
copyright.innerText = `Kevin A. Ramos ${thisYear}`;
footer.appendChild(copyright);

const skills = ['JavaScript', 'HTML', 'CSS', 'Python', 'Git'];

// select the skills id
skillsSection = document.querySelector("#skills");
 
// select the unordered list element
skillsList = skillsSection.querySelector('ul');

// iterate through skills array and append as a new list item
for(let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

let messageForm = document.getElementById("messageForm");
messageForm.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent refreshing after submitting
    let nameField = e.target.usersName.value;
    let emailField = e.target.usersEmail.value;
    let messageField = e.target.usersMessage.value;
    console.log(nameField);
    console.log(emailField);
    console.log(messageField);

    let messageSection = document.getElementById("messages");
    let messageList = messageSection.querySelector("ul");

    // create new list element for new entries
    let newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${emailField}">${nameField}</a><span> wrote: ${messageField} </span>`;
    
    // create button to remove entries
    let removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    
    // click functionality for remove button
    removeButton.addEventListener("click", function(e) {
        let entry = removeButton.parentNode;
        entry.remove();
    });
    
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    
    messageForm.reset(); // reset form fields after submitting
});
