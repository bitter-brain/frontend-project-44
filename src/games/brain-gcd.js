import readlineSync from 'readline-sync';

const brainGcd = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const gcd = (num1, num2) => {
    if (num2 !== 0) {
      const k = num1 % num2;
      return gcd(num2, k);
    }
    return num1;
  };
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNumber(0, 100);
    const num2 = getRandomNumber(0, 100);
    console.log(num1, num2);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = String(gcd(num1, num2));
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainGcd;
