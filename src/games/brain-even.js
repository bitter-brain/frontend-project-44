import startGame, { getRandomNumber } from '../index.js';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = `${number}`;
  return [question, correctAnswer];
};

const startBrainEven = () => {
  startGame(instruction, generateRound);
};

export default startBrainEven;
