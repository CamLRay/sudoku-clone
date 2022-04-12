import { Board } from "./../src/board.js";

describe("board", () => {
  const boardArray = [];
  for (let i = 0; i < 9; i++) {
    boardArray.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }

  test("It should create an object with a property that contains the given 9x9 2D array", () => {
    let newBoardArray = boardArray.concat([]);
    const board = new Board(newBoardArray);

    expect(board.boardArray).toEqual(newBoardArray);
  });
});