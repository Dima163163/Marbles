'use strict';
(() => {
  const getRandomIntIncInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getEvenOrOdd = (arr) => arr[getRandomIntIncInclusive(0, 1)];

  const game = () => {
    const evenOdd = ['четное', 'нечетное'];
    const countMarbles = {
      player: 5,
      computer: 5,
    };
    return function start() {
      if (countMarbles.computer !== 0 && countMarbles.player !== 0) {
        console.log(countMarbles);
        const guessTheNumber =
          +prompt(`Загадай число от 1 до ${countMarbles.player}`);
        const computerResult = getEvenOrOdd(evenOdd);
        console.log(guessTheNumber);
        console.log(computerResult);
        console.log(countMarbles.computer);
        console.log(countMarbles.player);
        if (guessTheNumber !== 0) {
          if (computerResult === evenOdd[0] && guessTheNumber % 2 === 0) {
            if (guessTheNumber > countMarbles.computer ||
            guessTheNumber > countMarbles.player) {
              countMarbles.player -= countMarbles.player;
              countMarbles.computer += countMarbles.player;
            } else {
              countMarbles.player -= guessTheNumber;
              countMarbles.computer += guessTheNumber;
            }
            alert(`
            Компьютер выбрал ${computerResult} \n
            Компьютер угадал! \n
            Количество шариков \n
            Компьютер: ${countMarbles.computer} \n
            Игрок: ${countMarbles.player}
          `);
            console.log(countMarbles);
            start();
          } else if (computerResult === evenOdd[1] &&
          guessTheNumber % 2 !== 0) {
            if (guessTheNumber > countMarbles.computer ||
            guessTheNumber > countMarbles.player) {
              countMarbles.player -= countMarbles.player;
              countMarbles.computer += countMarbles.player;
            } else {
              countMarbles.player -= guessTheNumber;
              countMarbles.computer += guessTheNumber;
            }
            alert(`
            Компьютер выбрал ${computerResult} \n
            Компьютер угадал! \n
            Количество шариков \n
            Компьютер: ${countMarbles.computer} \n
            Игрок: ${countMarbles.player}
            `);
            console.log(countMarbles);
            start();
          } else {
            if (guessTheNumber > countMarbles.computer) {
              countMarbles.player += countMarbles.computer;
              countMarbles.computer -= countMarbles.computer;
            } else {
              countMarbles.player += guessTheNumber;
              countMarbles.computer -= guessTheNumber;
            }
            alert(`
            Компьютер выбрал ${computerResult} \n
            Компьютер не угадал! \n
            Количество шариков \n
            Компьютер: ${countMarbles.computer} \n
            Игрок: ${countMarbles.player}
            `);
            console.log(countMarbles);
            start();
          }
        } else {
          const action = confirm('Точно ли вы хотите выйти?');
          if (action) {
            alert('Вы выбрали закончить игру');
            return;
          } else {
            start();
          }
        }
      } else {
        if (countMarbles.player > countMarbles.computer) {
          alert(`
        Игра окончена! \n
        Вы победили! \n
        У вас: ${countMarbles.player} \n
        У компьютера: ${countMarbles.computer} 
        `);
        } else {
          alert(`
          Игра окончена! \n
          Вы проиграли! \n
          У вас: ${countMarbles.player} \n
          У компьютера: ${countMarbles.computer} 
          `);
        }
      }
    };
  };

  window.gameMarbles = game;
})();
