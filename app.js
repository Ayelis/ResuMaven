// Brevity
const qs = document.querySelector.bind(document);

// Get the panel elements
const panelJ = qs('#job-panel');
const panelR = qs('#rez-panel');
const panelC = qs('#cov-panel');
const panelA = qs('#app-panel');
const tb0 = qs('.toggle-button0');
const tb1 = qs('.toggle-button1');
const tb2 = qs('.toggle-button2');
const tb3 = qs('.toggle-button3');

// Function to toggle the panel state
function togglePanel(num) {
    switch(num){
        case 0: panelJ.classList.toggle('collapsed'); break;
        case 1: panelR.classList.toggle('collapsed'); break;
        case 2: panelC.classList.toggle('collapsed'); break;
        case 3: panelA.classList.toggle('collapsed'); break;
    }
}

// Event listener for button or user interaction
tb0.addEventListener('click', ()=>{togglePanel(0)});
//tb1.addEventListener('click', ()=>{togglePanel(1)});
tb2.addEventListener('click', ()=>{togglePanel(2)});
//tb3.addEventListener('click', ()=>{togglePanel(3)});
