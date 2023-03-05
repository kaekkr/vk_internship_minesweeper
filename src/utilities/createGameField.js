export default () => {
    let gameField = [];
    let bombsLocation = [];
  
    for (let i = 0; i < 16; i++) {
      let temp = [];
      for (let j = 0; j < 16; j++) {
        let temp2 = {
            value: 0,
            marked: false,
            neighbors: [],
            r: i,
            c: j,
            flagged: 0,
            redBomb: false, 
        };
        temp.push(temp2);
      }
      gameField.push(temp);
    }
  
    let bombs = 0;
    while (bombs < 40) {
      let r = Math.floor(Math.random() * 16);
      let c = Math.floor(Math.random() * 16);
  
      if (gameField[r][c].value === 0) {
        gameField[r][c].value = 1000;
        bombsLocation.push([r, c]);
        bombs++;
      }
    }
  
    for (let i = 0; i < 16; i++) {
      for (let j = 0; j < 16; j++) {
        if (gameField[i][j].value === 1000) {
          continue;
        }
  
        if (i > 0 && gameField[i - 1][j].value === 1000) {
          gameField[i][j].value++;
        }
  
        if (i > 0 && j < 15 && gameField[i - 1][j + 1].value === 1000) {
          gameField[i][j].value++;
        }
  
        if (j < 15 && gameField[i][j + 1].value === 1000) {
          gameField[i][j].value++;
        }
  
        if (i < 15 && j < 15 && gameField[i + 1][j + 1].value === 1000) {
          gameField[i][j].value++;
        }
  
        if (i < 15 && gameField[i + 1][j].value === 1000) {
          gameField[i][j].value++;
        }
  
        if (i < 15 && j > 0 && gameField[i + 1][j - 1].value === 1000) {
          gameField[i][j].value++;
        }
  
        if (j > 0 && gameField[i][j - 1].value === 1000) {
          gameField[i][j].value++;
        }
  
        if (i > 0 && j > 0 && gameField[i - 1][j - 1].value === 1000) {
          gameField[i][j].value++;
        }
      }
    }
  
    return { gameField, bombsLocation };
  };
  