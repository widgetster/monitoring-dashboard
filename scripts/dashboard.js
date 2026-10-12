import { robots } from "../data/robots.js";

renderRobotsSummary();

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


function simulateTemperature() {
  const temperatureValue = Math.floor(Math.random() * 46) + 25; // 25 to 70
  const robotsIndex = Math.floor(Math.random() * 5); // 0 to 4

  robots[robotsIndex].temperature = temperatureValue;

}


function simulateStatus() {
  const number = Math.random();
  const robotsIndex = Math.floor(Math.random() * 5); // 0 to 4

  if (0 < number < 0.333) {
    robots[robotsIndex].status = 'Running';
  } else if (0.333 < number < 0.666) {
    robots[robotsIndex].status = 'Warning';
  } else {
    robots[robotsIndex].status = 'Stopped';
  }
}


setInterval(() => {
  console.log('running');
  simulateTemperature();
  renderRobotsSummary();
  simulateStatus();
}, 1000);