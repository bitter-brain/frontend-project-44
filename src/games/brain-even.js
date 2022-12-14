import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const isEven = (num) => num % 2 === 0;
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(0, 100);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    console.log(`Question: ${number} `);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainEven;
