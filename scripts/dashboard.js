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