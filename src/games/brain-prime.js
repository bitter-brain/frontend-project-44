import gameEngine from '../index.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const round = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = `${number}`;
  return [question, correctAnswer];
};

const brainPrime = () => {
  gameEngine(instruction, round);
};

export default brainPrime;
