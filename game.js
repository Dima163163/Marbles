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
    let flag = true;

    return function start() {
      if (countMarbles.computer !== 0 && countMarbles.player !== 0) {
        console.log('countMarbles', countMarbles);
        let guessTheNumberUser;
        let guessTheNumberComputer;
        let computerResult;
        let userResult;
        if (flag) {
          guessTheNumberUser =
          +prompt(`Загадай число от 1 до ${countMarbles.player}`);
          flag = false;
          computerResult = getEvenOrOdd(evenOdd);
          if (guessTheNumberUser !== 0) {
            if (computerResult === evenOdd[0] && guessTheNumberUser % 2 === 0) {
              if (guessTheNumberUser > countMarbles.player) {
                countMarbles.player -= countMarbles.player;
                countMarbles.computer += countMarbles.player;
              } else {
                countMarbles.player -= guessTheNumberUser;
                countMarbles.computer += guessTheNumberUser;
              }
              alert(`
              Компьютер угадал! \n
              Компьютер выбрал: ${computerResult} \n
              Вы выбрали: ${guessTheNumberUser} \n
              Количество шариков \n
              Компьютер: ${countMarbles.computer} \n
              Игрок: ${countMarbles.player}
              `);
              console.log('countMarbles1', countMarbles);
              start();
            } else if (computerResult === evenOdd[1] &&
            guessTheNumberUser % 2 !== 0) {
              if (guessTheNumberUser > countMarbles.player) {
                countMarbles.player -= countMarbles.player;
                countMarbles.computer += countMarbles.player;
              } else {
                countMarbles.player -= guessTheNumberUser;
                countMarbles.computer += guessTheNumberUser;
              }
              alert(`
              Компьютер угадал! \n
              Компьютер выбрал: ${computerResult} \n
              Вы выбрали: ${guessTheNumberUser} \n
              Количество шариков \n
              Компьютер: ${countMarbles.computer} \n
              Игрок: ${countMarbles.player}
              `);
              console.log('countMarbles2', countMarbles);
              start();
            } else {
              if (guessTheNumberUser > countMarbles.computer) {
                countMarbles.player += countMarbles.computer;
                countMarbles.computer -= countMarbles.computer;
              } else {
                countMarbles.player += guessTheNumberUser;
                countMarbles.computer -= guessTheNumberUser;
              }
              alert(`
              Компьютер не угадал! \n
              Компьютер выбрал: ${computerResult} \n
              Вы выбрали: ${guessTheNumberUser} \n
              Количество шариков \n
              Компьютер: ${countMarbles.computer} \n
              Игрок: ${countMarbles.player}
              `);
              console.log('countMarbles3', countMarbles);
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
          guessTheNumberComputer =
          getRandomIntIncInclusive(1, countMarbles.computer);
          const question = confirm('Число четное?', '');
          if (question) {
            userResult = evenOdd[0];
          } else {
            userResult = evenOdd[1];
          }
          flag = true;
          if (userResult === evenOdd[0] && guessTheNumberComputer % 2 === 0) {
            if (guessTheNumberComputer > countMarbles.computer) {
              countMarbles.computer -= countMarbles.computer;
              countMarbles.player += countMarbles.computer;
            } else {
              countMarbles.computer -= guessTheNumberComputer;
              countMarbles.player += guessTheNumberComputer;
            }
            alert(`
              Вы угадали! \n
              Вы выбрали: ${userResult} \n
              Компьютер выбрал: ${guessTheNumberComputer} \n
              Количество шариков \n
              Компьютер: ${countMarbles.computer} \n
              Игрок: ${countMarbles.player}
            `);
            console.log('countMarblesComp Четный', countMarbles);
            start();
          } else if (userResult === evenOdd[1] &&
          guessTheNumberComputer % 2 !== 0) {
            if (guessTheNumberComputer > countMarbles.computer) {
              countMarbles.computer -= countMarbles.computer;
              countMarbles.player += countMarbles.computer;
            } else {
              countMarbles.computer -= guessTheNumberComputer;
              countMarbles.player += guessTheNumberComputer;
            }
            alert(`
              Вы угадали! \n
              Вы выбрали: ${userResult} \n
              Компьютер выбрал: ${guessTheNumberComputer} \n
              Количество шариков \n
              Компьютер: ${countMarbles.computer} \n
              Игрок: ${countMarbles.player}
            `);
            console.log('countMarblesComp Нечетный', countMarbles);
            start();
          } else {
            if (guessTheNumberComputer > countMarbles.player) {
              countMarbles.computer += countMarbles.player;
              countMarbles.player -= countMarbles.player;
            } else {
              countMarbles.computer += guessTheNumberComputer;
              countMarbles.player -= guessTheNumberComputer;
            }
            alert(`
              Вы не угадали! \n
              Вы выбрали: ${userResult} \n
              Компьютер выбрал: ${guessTheNumberComputer} \n
              Количество шариков \n
              Компьютер: ${countMarbles.computer} \n
              Игрок: ${countMarbles.player}
            `);
            console.log('countMarblesComp Победа компьютера', countMarbles);
            start();
          }
        }

        console.log('flag', flag);
        console.log('userResult', userResult);
        console.log('guessTheNumberComputer', guessTheNumberComputer);
        console.log('guessTheNumberUser', guessTheNumberUser);
        console.log('computerResult', computerResult);
        console.log('countMarbles.computer', countMarbles.computer);
        console.log('countMarbles.player', countMarbles.player);
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
