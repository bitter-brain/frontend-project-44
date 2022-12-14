import readlineSync from 'readline-sync';

const brainProgression = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

  const arithmeticSequenceMember = (number, d, n) => number + n * d;
  const generateArithmeticSequence = (number, d, N) => Array.from({length: N}, (_, n) => arithmeticSequenceMember(number, d, n));

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(1, 100);
    const step = getRandomNumber(1, 10);
    const range = getRandomNumber(6, 10);

    const progression = generateArithmeticSequence(number, step, range);
    const hiddenElement = getRandomNumber(0, progression.length - 1);
    const correctAnswer = String(progression[hiddenElement]);
    progression[hiddenElement] = '..';
    const progressionWithHiddenElement = progression.join(' ');
    console.log(`Question: ${progressionWithHiddenElement} `);
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

export default brainProgression;
