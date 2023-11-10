const getSleepHours = day => {
  switch (day) {
    case 'sunday':
      return 10;

    case 'monday':
      return 8;

    case 'tuesday':
      return 8;

    case 'wednesday':
      return 8;

    case 'thursday':
      return 8;

    case 'friday':
      return 8;

    case 'saturday':
      return 8;
  }
};

const getActualSleepHours = () => getSleepHours('sunday') +
    getSleepHours('monday') + getSleepHours('tuesday') +
    getSleepHours('wednesday') + getSleepHours('thursday') +
    getSleepHours('friday') + getSleepHours('saturday');

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${actualSleepHours -
    idealSleepHours} hours more of sleep than needed.`);
  } else {
    console.log(`You need to get some rest. You are ${idealSleepHours -
    actualSleepHours} hours less of sleep than needed.`);
  }
};

calculateSleepDebt();