let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, target) => {
  const humanPoints = Math.abs(humanGuess - target);
  const computerPoints = Math.abs(computerGuess - target);

  return humanPoints <= computerPoints;
};

const updateScore = (winner) => {
  switch (winner) {
    case 'human':
      humanScore += 1;
      break;

    case 'computer':
      computerScore += 1;
      break;

    default:
      throw new Error('Invalid winner, options are human or computer.');
  }
};

const advanceRound = () => {
  currentRoundNumber += 1;
};