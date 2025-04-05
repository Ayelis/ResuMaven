// Brevity
const qs = document.querySelector.bind(document);
const qa = document.querySelectorAll.bind(document);

// Get the panel elements
const panelJ = qs('#job-panel');
const panelR = qs('#rez-panel');
const panelC = qs('#cov-panel');
const tb0 = qs('.toggle-button0');
const tb1 = qs('.toggle-button1');

function handleRestore(panel) {
    console.log(panel);
    console.log(panel.classList);
    panel.classList.remove('collapsed');
    console.log(panel.classList);
    console.log('Whoa whoa whoa');
}
// Function to toggle the panel state
function togglePanel(panel) {
    console.log(panel);
    console.log(panel.classList);
  panel.classList.add('collapsed');
    console.log(panel.classList);
    console.log('WTF');
    setTimeout(() => {panel.addEventListener('click', () => handleRestore(panel), { once: true });}, 1);
}
function showDoc(docId) {
  const container = document.getElementById('main-area');
  Array.from(container.children).forEach(child => child.classList.add('hid'));
  const target = document.getElementById(docId);
  if (target) target.classList.remove('hid');
}

// Event listener for button or user interaction
tb0.addEventListener('click', ()=>{togglePanel(panelJ)});
tb1.addEventListener('click', ()=>{togglePanel(panelC)});

// Buttons functionality
const resumeButtons = qa('li[data-resume-id]');
const jobButtons = qa('li[data-job-id]');
const mainTextarea = qs('#main-area textarea');

// Resume choice functionality
resumeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    //Activate button
    resumeButtons.forEach(b => b.classList.remove('active'));
    jobButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    //Load resume
    showDoc("resume-editor");
    const titleText = btn.childNodes[0].nodeValue.trim(); // Gets the text
    qs('#resume-editor .MainTitle').textContent = titleText;
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
    //Load job
    showDoc("job-details");
    const titleText = btn.childNodes[1].innerHTML.trim(); // Gets the text
    qs('#job-details .MainTitle').textContent = titleText;
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
