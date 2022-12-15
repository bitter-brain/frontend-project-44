import gameEngine from '../index.js';

const instruction = 'Find the greatest common divisor of given numbers.';
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const getGcd = (num1, num2) => {
  if (num2 !== 0) {
    const k = num1 % num2;
    return getGcd(num2, k);
  }
  return num1;
};

const round = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  return [question, correctAnswer];
};

const brainGcd = () => {
  gameEngine(instruction, round);
};

export default brainGcd;
