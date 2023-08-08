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
    skill.innerText = skills[i]
    skillsList.appendChild(skill);
}