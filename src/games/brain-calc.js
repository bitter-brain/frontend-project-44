import gameEngine from '../index.js';

const instruction = 'What is the result of the expression?';
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const round = () => {
  const num1 = getRandomNumber(0, 50);
  const num2 = getRandomNumber(0, 50);
  const operand = ['+', '-', '*'];
  const randomOperator = Math.floor(Math.random() * operand.length);
  const operation = operand[randomOperator];
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operation));
  return [question, correctAnswer];
};

const brainCalc = () => {
  gameEngine(instruction, round);
};

export default brainCalc;
