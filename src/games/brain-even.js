import gameEngine from '../index.js';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const isEven = (num) => num % 2 === 0;

const round = () => {
  const number = getRandomNumber(0, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = `${number}`;
  return [question, correctAnswer];
};

const brainEven = () => {
  gameEngine(instruction, round);
};

export default brainEven;
