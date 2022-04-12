export function Board(row1, row2, row3, row4, row5, row6, row7, row8, row9) {
  this.row1 = row1;
  this.row2 = row2;
  this.row3 = row3;
  this.row4 = row4;
  this.row5 = row5;
  this.row6 = row6;
  this.row7 = row7;
  this.row8 = row8;
  this.row9 = row9;
}

Board.prototype.compareColumns = function() {
  const board = this;
  for (let index = 0; index < 9; index++) {
    let array =[];
    for (let i = 1; i <= 9; i++) {
      if ((parseInt(board["row" + i ][index]) > 9) ||(parseInt(board["row" + i ][index]) < 1)) {
        return false;
      } else if (array.includes(board["row" + i ][index])){
        return false;
      } else {
        array.push(board["row" + i ][index]);
      } 
    }
  }
  return true;
};


Board.prototype.compareRows = function() {
  const board = this;
  for(let i = 1; i <= 9; i++) {
    for(let index = 1; index <= 9; index++){
      if(!board["row"+ i].includes(index)) {
        return false;
      }
    }
  }
  return true;
};