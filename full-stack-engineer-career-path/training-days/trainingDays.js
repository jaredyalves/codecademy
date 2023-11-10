const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);

  switch (random) {
    case 0:
      return 'Marathon';
    case 1:
      return 'Triathlon';
    case 2:
      return 'Pentathlon';
  }
};

const getTrainingDays = event => {
  let days;

  switch (event) {
    case 'Marathon':
      days = 50;
      break;
    case 'Triathlon':
      days = 100;
      break;
    case 'Pentathlon':
      days = 200;
      break;
  }

  return days;
};

const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
const name = 'Nala';

logEvent(name, event);
logTime(name, days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);