import readlineSync from 'readline-sync';

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const calculate = (num1, num2, operator) => {
    let result = 0;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        result = null;
    }
    return result;
  };
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNumber(0, 50);
    const num2 = getRandomNumber(0, 50);
    const operand = ['+', '-', '*'];
    const randomOperator = Math.floor(Math.random() * operand.length);
    const operation = operand[randomOperator];
    console.log('Question: ', num1, operation, num2);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = String(calculate(num1, num2, operation));
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainCalc;
