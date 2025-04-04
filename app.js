// Brevity
const qs = document.querySelector.bind(document);

// Get the panel elements
const panelJ = qs('#job-panel');
const panelR = qs('#rez-panel');
const panelC = qs('#cov-panel');
const tb0 = qs('.toggle-button0');
const tb1 = qs('.toggle-button1');

// Function to toggle the panel state
function togglePanel(num) {
    switch(num){
        case 0: panelJ.classList.toggle('collapsed'); break;
        case 1: panelC.classList.toggle('collapsed'); break;
    }
}

// Event listener for button or user interaction
tb0.addEventListener('click', ()=>{togglePanel(0)});
tb1.addEventListener('click', ()=>{togglePanel(1)});

// Buttons functionality
const resumeButtons = document.querySelectorAll('li[data-resume-id]');
const jobButtons = document.querySelectorAll('li[data-job-id]');
const mainTextarea = document.querySelector('#main-area textarea');

// Resume choice functionality
resumeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    //Activate button
    resumeButtons.forEach(b => b.classList.remove('active'));
    jobButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    //Load resume
    const titleText = btn.childNodes[0].nodeValue.trim(); // Gets the text
    document.getElementById('MainTitle').textContent = titleText;
    //Load content
    mainTextarea.value = "Resume Content loaded here..."
  });
});
// Job choice functionality
jobButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    //Activate button
    resumeButtons.forEach(b => b.classList.remove('active'));
    jobButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    //Load resume
    const titleText = btn.childNodes[1].innerHTML.trim(); // Gets the text
    document.getElementById('MainTitle').textContent = titleText;
    //Load content
    mainTextarea.value = "Job Type: Full time\nWork Setting: Remote\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis egestas magna. Ut id convallis felis, vitae tincidunt odio. Aenean euismod ornare risus id rhoncus. Integer vel varius elit, sit amet ultrices nibh. Vestibulum metus metus, vehicula eget orci suscipit, semper tincidunt urna. Nulla mattis imperdiet enim a bibendum. Sed sagittis, turpis ut molestie cursus, justo nulla varius nunc, sed mollis quam leo in leo. Integer justo mi, ornare a arcu tincidunt, interdum eleifend sem. Cras quis erat vel ex elementum lobortis fermentum in purus. Morbi suscipit leo eu lacus laoreet ornare. Mauris egestas purus at fermentum rhoncus. Aliquam ut tincidunt ante."
  });
});
//Cover letter AI mockup
document.getElementById('update-cover').addEventListener('click', () => {
  const textarea = document.querySelector('#cov-panel textarea');
  const message = "Dear Hiring Manager,\n\nI am writing to express my enthusiastic interest in the 'Job Title 1' position at your company 'Lorem Ipsum', as my skills and experience align perfectly with the requirements outlined in the job description.";
  let i = 0;
  textarea.value = ''; // Clear existing content
  const typer = setInterval(() => {
    if (i < message.length) {
      textarea.value += message.charAt(i);
      i++;
    } else {
      clearInterval(typer);
    }
  }, 25); // Speed: adjust for faster/slower typing
});
