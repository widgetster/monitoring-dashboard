export const robots = [
  {
    id: 532,
    name: 'Robot 1',
    status: 'Running',
    temperature: 41
  },
  {
    id: 274,
    name: 'Robot 2',
    status: 'Warning',
    temperature: 58
  },
  {
    id: 164,
    name: 'Robot 3',
    status: 'Stopped',
    temperature: 33
  },
  {
    id: 387,
    name: 'Robot 4',
    status: 'Running',
    temperature: 46
  },
  {
    id: 259,
    name: 'Robot 5',
    status: 'Warning',
    temperature: 62
  }
];


export function renderRobotsSummary() {
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


export function simulateData() {
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


export function countRunning() {
  let count = 0;

  robots.forEach(robot => {
    if (robot.status === 'Running') {
      count++;
    }
  });

  document.querySelector('.js-running-count')
    .innerHTML = count;
}


export function countWarning() {
  let count = 0;

  robots.forEach(robot => {
    if (robot.status === 'Warning') {
      count++;
    }
  });

  document.querySelector('.js-warning-count')
    .innerHTML = count;
}


export function countStopped() {
  let count = 0;

  robots.forEach(robot => {
    if (robot.status === 'Stopped') {
      count++;
    }
  });

  document.querySelector('.js-stopped-count')
    .innerHTML = count;
}