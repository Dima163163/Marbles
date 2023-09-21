'use strict';
(() => {
  const figure = ['камень', 'ножницы', 'бумага'];

  const getRandomIntIncInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const getFigure = () => figure[getRandomIntIncInclusive(0, 2)];

  const playGameRSP = () => {
    const result = {
      player: 0,
      computer: 0,
    };
    if (result.player === 0 || result.computer === 0) {
      const userFigure = prompt(`камень, ножницы, бумага`, '');
      let action;
      if (typeof userFigure === 'string' && userFigure !== null) {
        const computerFigure = getFigure();
        if (userFigure.toLowerCase()[0] === figure[0][0] &&
            computerFigure[0] === figure[1][0] ||
            userFigure.toLowerCase()[0] === figure[1][0] &&
            [0] === figure[2][0] ||
            userFigure.toLowerCase()[0] === figure[2][0] &&
            computerFigure[0] === figure[0][0]
        ) {
          ++result.player;
          alert('В камень ножницы бумага победил пользователь, он начинает!');
          return result;
        } else if (userFigure.toLowerCase()[0] === computerFigure[0]) {
          alert('Ничья, играем еще раз!');
          playGameRSP();
        } else {
          ++result.computer;
          alert('В камень ножницы бумага победил компьютер, он начинает!');
          return result;
        }
      } else {
        action = confirm('Точно ли вы хотите выйти?');
        if (action) {
          alert('Вы выбрали завершить игру');
          return;
        } else {
          playGameRSP();
        }
      }
      return result;
    }
  };

  const getEvenOrOdd = (arr) => arr[getRandomIntIncInclusive(0, 1)];

  const game = () => {
    const evenOdd = ['четное', 'нечетное'];
    const countMarbles = {
      player: 5,
      computer: 5,
    };
    console.log('countMarbles.computer0', countMarbles.computer);
    console.log('countMarbles.player0', countMarbles.player);
    let flag;

    const resultRSP = playGameRSP();
    const newGame = () => {
      const question = confirm('Сыграем еще разок?');
      if (question) {
        alert('Играем заново!');
        game();
      } else {
        alert('Вы отказались продолжить');
        return;
      }
    };

    console.log('resultRSP', resultRSP);
    if (resultRSP.player > resultRSP.computer) {
      flag = true;
    } else {
      flag = false;
    }
    return function start() {
      if (countMarbles.computer !== 0 && countMarbles.player !== 0) {
        let guessTheNumberUser;
        let guessTheNumberComputer;
        if (flag) {
          guessTheNumberUser =
          +prompt(`Загадай число от 1 до ${countMarbles.player}`);
          flag = false;
          const computerResult = getEvenOrOdd(evenOdd);
          if (guessTheNumberUser !== 0) {
            if (computerResult === evenOdd[0] && guessTheNumberUser % 2 === 0 ||
            computerResult === evenOdd[1] &&
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
              Вы выбрали: ${guessTheNumberUser} \n
              Компьютер выбрал: ${computerResult} \n
              Количество шариков \n
              Компьютер: ${countMarbles.computer} \n
              Игрок: ${countMarbles.player}
              `);
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
              Вы выбрали: ${guessTheNumberUser} \n
              Компьютер выбрал: ${computerResult} \n
              Количество шариков \n
              Компьютер: ${countMarbles.computer} \n
              Игрок: ${countMarbles.player}
              `);
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
          let userResult;
          if (question) {
            userResult = evenOdd[0];
          } else {
            userResult = evenOdd[1];
          }
          flag = true;

          if (userResult === evenOdd[0] && guessTheNumberComputer % 2 === 0 ||
          userResult === evenOdd[1] &&
          guessTheNumberComputer % 2 !== 0) {
            if (guessTheNumberComputer > countMarbles.computer) {
              countMarbles.computer -= countMarbles.computer;
              countMarbles.player += countMarbles.computer;
            } else {
              countMarbles.computer -= guessTheNumberComputer;
              countMarbles.player += guessTheNumberComputer;
            }
            alert(`
              Пользователь угадал! \n
              Вы выбрали: ${userResult} \n
              Компьютер выбрал: ${guessTheNumberComputer} \n
              Количество шариков \n
              Компьютер: ${countMarbles.computer} \n
              Игрок: ${countMarbles.player}
            `);
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
              Пользователь не угадал! \n
              Вы выбрали: ${userResult} \n
              Компьютер выбрал: ${guessTheNumberComputer} \n
              Количество шариков \n
              Компьютер: ${countMarbles.computer} \n
              Игрок: ${countMarbles.player}
            `);
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
          newGame();
        } else {
          alert(`
          Игра окончена! \n
          Вы проиграли! \n
          У вас: ${countMarbles.player} \n
          У компьютера: ${countMarbles.computer} 
          `);
          newGame();
        }
      }
    };
  };

  window.gameMarbles = game;
})();
