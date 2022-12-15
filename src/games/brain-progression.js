import gameEngine from '../index.js';

const instruction = 'What number is missing in the progression?';
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
// const arithmeticSequenceMember = (number, s, n) => number + n * s;
// const generateArithmeticSequence = (number, s, N) =>
// Array.from({ length: N }, (_, n) => arithmeticSequenceMember(number, s, n));
const generateArithmeticSequence = (number, difference, length) => {
  let startNumber = number;
  const dif = difference;
  const range = length;
  const result = [];
  for (let i = 0; i < range; i += 1) {
    result.push(startNumber);
    startNumber += dif;
  }
  return result;
};

const round = () => {
  const firstNumber = getRandomNumber(1, 90);
  const difference = getRandomNumber(3, 10);
  const length = getRandomNumber(6, 10);
  const progression = generateArithmeticSequence(firstNumber, difference, length);
  const hiddenElement = getRandomNumber(0, progression.length - 1);
  const correctAnswer = String(progression[hiddenElement]);
  progression[hiddenElement] = '..';
  const progressionWithHiddenElement = progression.join(' ');
  const question = `${progressionWithHiddenElement}`;
  return [question, correctAnswer];
};

const brainProgression = () => {
  gameEngine(instruction, round);
};

export default brainProgression;
