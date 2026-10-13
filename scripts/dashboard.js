import { robots, countRunning, countWarning , countStopped, renderRobotsSummary, simulateData } from "../data/robots.js";

let isSimulating = false;
let intervalId;
export let filter = 'All';


function startStopSimulation() {
  if (!isSimulating) {
    isSimulating = true;

    document.querySelector('.js-start-stop-span')
      .innerHTML = 'Stop';

    intervalId = setInterval(() => {
        simulateData();
        renderRobotsSummary();
        countRunning();
        countWarning();
        countStopped();
      }, 1000);
  }
  else {
    clearInterval(intervalId);
    isSimulating = false;

    document.querySelector('.js-start-stop-span')
      .innerHTML = 'Start';
  }

  document.querySelector('.js-start-stop-button').setAttribute('aria-pressed', String(isSimulating));
  document.querySelector('.simulation-icon').textContent = isSimulating ? 'Ⅱ' : '▶';

}


document.querySelector('.js-start-stop-button')
  .addEventListener('click', () => {
    
    startStopSimulation();
  });


document.querySelector('.js-all-button')
  .addEventListener('click', () => {

    filter = 'All';
  });


document.querySelector('.js-running-button')
  .addEventListener('click', () => {

    filter = 'Running';
  });


document.querySelector('.js-warning-button')
  .addEventListener('click', () => {

    filter = 'Warning';
  });


document.querySelector('.js-stopped-button')
  .addEventListener('click', () => {

    filter = 'Stopped';
  });

// Keep the selected filter visible and refresh the list even while paused.
document.querySelectorAll('.filters button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filters button').forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    renderRobotsSummary();
  });
});

renderRobotsSummary();
countRunning();
countWarning();
countStopped();
