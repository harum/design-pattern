import readline from 'readline';
import CaffeineBeverageWithHook from './CaffeineBeverageWithHook.js';

export default class CoffeeWithHook extends CaffeineBeverageWithHook {
  brew() {
    console.log('Dripping Coffee through filter');
  }

  addCondiments() {
    console.log('Adding Sugar and Milk');
  }

  async customerWantsCondiments() {
    const answer = await this.getUserInput();

    if (answer.toLowerCase()[0] === 'y') {
      return true;
    }

    return false;
  }

  getUserInput() {
    const userInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve, reject) => {
      let answer = null;

      try {
        const questionText = 'Would you like milk and sugar with your coffee (y/n)? ';
        userInterface.question(questionText, (input) => {
          answer = input;
          userInterface.close();

          if (answer === null) {
            resolve('no');
          }
          resolve(answer);
        });
      } catch (e) {
        console.log('IO error trying to read your answer');
        reject(e);
      }
    });
  }
}
