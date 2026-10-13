import { robots } from "../data/robots.js";

let isSimulating = false;
let intervalId;


function renderRobotsSummary() {
  let robotsIdHTML = '';
  let robotsNameHTML = '';
  let robotsStatusHTML = '';
  let robotsTemperatureHTML = '';

  robots.forEach((robot) => {
    robotsIdHTML += `
    <div>${robot.id}</div>     
    `;

    robotsNameHTML += `
    <div>${robot.name}</div>     
    `;

    robotsStatusHTML += `
    <div>${robot.status}</div>     
    `;

    robotsTemperatureHTML += `
    <div>${robot.temperature}</div>     
    `;
  });

  document.querySelector('.js-robots-id')
    .innerHTML = robotsIdHTML;

  document.querySelector('.js-robots-name')
    .innerHTML = robotsNameHTML;

  document.querySelector('.js-robots-status')
    .innerHTML = robotsStatusHTML;

  document.querySelector('.js-robots-temperature')
    .innerHTML = robotsTemperatureHTML;
}


function simulateData() {
  const temperatureValue = Math.floor(Math.random() * 46) + 25; // 25 to 70
  const robotsIndex = Math.floor(Math.random() * 5); // 0 to 4

  robots[robotsIndex].temperature = temperatureValue;

  if (temperatureValue <= 45 && temperatureValue >= 25) {
    robots[robotsIndex].status = 'Running';
  } else if (temperatureValue <= 60 && temperatureValue >= 46) {
    robots[robotsIndex].status = 'Warning';
  } else {
    robots[robotsIndex].status = 'Stopped';
  }
}


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


function countRunning() {
  let count = 0;

  robots.forEach(robot => {
    if (robot.status === 'Running') {
      count++;
    }
  });

  document.querySelector('.js-running-count')
    .innerHTML = count;
}


function countWarning() {
  let count = 0;

  robots.forEach(robot => {
    if (robot.status === 'Warning') {
      count++;
    }
  });

  document.querySelector('.js-warning-count')
    .innerHTML = count;
}


function countStopped() {
  let count = 0;

  robots.forEach(robot => {
    if (robot.status === 'Stopped') {
      count++;
    }
  });

  document.querySelector('.js-stopped-count')
    .innerHTML = count;
}


document.querySelector('.js-start-stop-button')
    .addEventListener('click', () => {
      
      startStopSimulation();
    });