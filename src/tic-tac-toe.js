class TicTacToe {
    constructor() {
      this.step = "x";
      this.stepNumber = 0;
      this.field = [[null, null, null], [null, null, null], [null, null, null]];
    }

    // сообщает чей ход (x, o)
    getCurrentPlayerSymbol() {
      return this.step;
    }

    // ход
    nextTurn(rowIndex, columnIndex) {
      if (this.field[rowIndex][columnIndex] == null) {
        this.field[rowIndex][columnIndex] = this.step;
        this.stepNumber += 1;
        if (this.step == "x") {
          this.step = "o";
        } else {
          this.step = "x";
        }
      }
    }

    // закончена игра (true, false)
    isFinished() {
      if (this.stepNumber == 9 || this.getWinner() != null) {
        return true;
      }
      return false;
    }

    // сообщает кто выиграл (x, o, null)
    getWinner() {
      for (let i = 0; i < 3; i++) {
        if ((this.field[i][0] == this.field[i][1] && this.field[i][0] == this.field[i][2]) ||
            (this.field[0][i] == this.field[1][i] && this.field[0][i] == this.field[2][i])) {
          return this.field[i][i];
        }
      }
      if ((this.field[0][0] == this.field[1][1] && this.field[0][0] == this.field[2][2]) ||
          (this.field[0][2] == this.field[1][1] && this.field[0][2] == this.field[2][0])) {
        return this.field[1][1];
      }
      return null;
    }

    // true - нет свободных полей
    noMoreTurns() {
      if (this.stepNumber == 9) {
        return true;
      }
      return false;
    }

    // true - нет свободных полей и нет победителя
    isDraw() {
      return (this.noMoreTurns() && this.getWinner() == null) ? true : false;
    }

    // возвращает значение ячейки
    getFieldValue(rowIndex, colIndex) {
      return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
