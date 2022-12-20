import startGame, { getRandomNumber } from '../index.js';

const instruction = 'What number is missing in the progression?';

const generateArithmeticSequence = (startNumber, step, progressionLength) => {
  const arithmeticSequence = [startNumber];
  for (let i = 1; i < progressionLength; i += 1) {
    arithmeticSequence.push(arithmeticSequence[i - 1] + step);
  }
  return arithmeticSequence;
};

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 50);
  const difference = getRandomNumber(3, 10);
  const length = getRandomNumber(6, 10);
  const progression = generateArithmeticSequence(firstNumber, difference, length);
  const hiddenNumIndex = getRandomNumber(0, length - 1);
  const correctAnswer = String(progression[hiddenNumIndex]);
  progression[hiddenNumIndex] = '..';
  const question = `${progression.join(' ')}`;
  return [question, correctAnswer];
};

const startBrainProgression = () => {
  startGame(instruction, generateRound);
};

export default startBrainProgression;
