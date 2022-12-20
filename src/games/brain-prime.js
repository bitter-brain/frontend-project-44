import startGame, { getRandomNumber } from '../index.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const randomNumber = getRandomNumber(10, 100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const question = `${randomNumber}`;
  return [question, correctAnswer];
};

const startBrainPrime = () => {
  startGame(instruction, generateRound);
};

export default startBrainPrime;
