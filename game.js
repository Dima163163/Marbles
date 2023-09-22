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
      if (userFigure === figure[0] || userFigure === figure[1] ||
      userFigure === figure[2]) {
        if (isNaN(userFigure) && userFigure !== '') {
          const computerFigure = getFigure();
          if (userFigure.toLowerCase()[0] === figure[0][0] &&
              computerFigure[0] === figure[1][0] ||
              userFigure.toLowerCase()[0] === figure[1][0] &&
              [0] === figure[2][0] ||
              userFigure.toLowerCase()[0] === figure[2][0] &&
              computerFigure[0] === figure[0][0]
          ) {
            alert('В камень ножницы бумага победил пользователь, он начинает!');
            result.player = 1;
            result.computer = 0;
          } else if (userFigure.toLowerCase()[0] === computerFigure[0]) {
            alert('Ничья, играем еще раз!');
            playGameRSP();
          } else {
            alert('В камень ножницы бумага победил компьютер, он начинает!');
            result.player = 0;
            result.computer = 1;
          }
        } else {
          playGameRSP();
        }
      } else if (userFigure === null) {
        action = confirm('Точно ли вы хотите выйти?');
        if (action) {
          alert('Вы выбрали завершить игру');
          return;
        } else {
          playGameRSP();
        }
      } else {
        playGameRSP();
      }
    }
    return result;
  };

  const getEvenOrOdd = (arr) => arr[getRandomIntIncInclusive(0, 1)];

  const strockeindicator = () => {
    let flag;

    const resultRSP = playGameRSP();
    console.log(resultRSP);
    if (resultRSP !== undefined) {
      if (resultRSP.player > resultRSP.computer) {
        flag = true;
      } else if (resultRSP.player < resultRSP.computer) {
        flag = false;
      } else {
        return;
      }
    }

    return flag;
  };

  const game = () => {
    const evenOdd = ['четное', 'нечетное'];
    let flag = strockeindicator();
    const countMarbles = {
      player: 5,
      computer: 5,
    };

    return function start() {
      if (flag === undefined) {
        return;
      }

      const newGame = () => {
        const question = confirm('Сыграем еще разок?');
        if (question) {
          alert('Играем заново!');
          countMarbles.player = 5;
          countMarbles.computer = 5;
          flag = strockeindicator();
          start();
        } else {
          alert('Вы отказались продолжить');
          return;
        }
      };

      const endGame = () => {
        const action = confirm('Точно ли вы хотите выйти?');
        if (action) {
          alert('Вы выбрали закончить игру');
          return;
        } else {
          start();
        }
        return;
      };

      if (countMarbles.computer !== 0 &&
      countMarbles.player !== 0 && flag !== undefined) {
        let guessTheNumberUser;
        let guessTheNumberComputer;
        if (flag) {
          guessTheNumberUser =
          prompt(`Загадай число от 1 до ${countMarbles.player}`);
          if (guessTheNumberUser === null) {
            endGame();
          } else {
            if (guessTheNumberUser > countMarbles.player ||
            guessTheNumberUser < 1 || isNaN(guessTheNumberUser)) {
              start();
            } else {
              const computerResult = getEvenOrOdd(evenOdd);
              if (guessTheNumberUser !== null) {
                guessTheNumberUser = Number(guessTheNumberUser);
                if (computerResult === evenOdd[0] &&
                guessTheNumberUser % 2 === 0 ||
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
                  flag = false;
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
                  flag = false;
                  start();
                }
              } else {
                endGame();
              }
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
            flag = true;
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
            flag = true;
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
