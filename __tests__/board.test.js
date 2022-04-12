import { Board } from "./../src/board.js";

// row1 {[5, 3, 4, 6, 7, 8, 9, 1, 2]}
// row2 {[6, 7, 2, 1, 9, 5, 3, 4, 8]}
// row3 {[1, 9, 8, 3, 4, 2, 5, 6, 7]}
// row4 {[8, 5, 9, 7, 6, 1, 4, 2, 3]}
// row5 {[4, 2, 6, 8, 5, 3, 7, 9, 1]}
// row6 {[7, 1, 3, 9, 2, 4, 8, 5, 6]}
// row7 {[9, 6, 1, 5, 3, 7, 2, 8, 4]}
// row8 {[2, 8, 7, 4, 1, 9, 6, 3, 5]}
// row9 {[3, 4, 5, 2, 8, 6, 1, 7, 9]}


describe("board", () => {
  test("It should create a board object with 9 row arrays", () => {
    const board = new Board([5, 3, 4, 6, 7, 8, 9, 1, 2], [6, 7, 2, 1, 9, 5, 3, 4, 8], [1, 9, 8, 3, 4, 2, 5, 6, 7], [8, 5, 9, 7, 6, 1, 4, 2, 3], [4, 2, 6, 8, 5, 3, 7, 9, 1], [7, 1, 3, 9, 2, 4, 8, 5, 6], [9, 6, 1, 5, 3, 7, 2, 8, 4], [2, 8, 7, 4, 1, 9, 6, 3, 5], [3, 4, 5, 2, 8, 6, 1, 7, 9]);

    expect(board.row1).toEqual([5, 3, 4, 6, 7, 8, 9, 1, 2]);
    expect(board.row2).toEqual([6, 7, 2, 1, 9, 5, 3, 4, 8]);
    expect(board.row3).toEqual([1, 9, 8, 3, 4, 2, 5, 6, 7]);
    expect(board.row4).toEqual([8, 5, 9, 7, 6, 1, 4, 2, 3]);
    expect(board.row5).toEqual([4, 2, 6, 8, 5, 3, 7, 9, 1]);
    expect(board.row6).toEqual([7, 1, 3, 9, 2, 4, 8, 5, 6]);
    expect(board.row7).toEqual([9, 6, 1, 5, 3, 7, 2, 8, 4]);
    expect(board.row8).toEqual([2, 8, 7, 4, 1, 9, 6, 3, 5]);
    expect(board.row9).toEqual([3, 4, 5, 2, 8, 6, 1, 7, 9]);
  });

  test("It should compare the first element of each array to determine if 1 through 9 are present", () => {
    const board = new Board([5, 3, 4, 6, 7, 8, 9, 1, 2], [6, 7, 2, 1, 9, 5, 3, 4, 8], [1, 9, 8, 3, 4, 2, 5, 6, 7], [8, 5, 9, 7, 6, 1, 4, 2, 3], [4, 2, 6, 8, 5, 3, 7, 9, 1], [7, 1, 3, 9, 2, 4, 8, 5, 6], [9, 6, 1, 5, 3, 7, 2, 8, 4], [2, 8, 7, 4, 1, 9, 6, 3, 5], [3, 4, 5, 2, 8, 6, 1, 7, 9]);
  
  expect(board.compareColumns(0)).toEqual(true);

  });

  test("It should compare the first element of each array to determine if 1 through 9 are present", () => {
    const board = new Board([6, 3, 4, 6, 7, 8, 9, 1, 2], [6, 7, 2, 1, 9, 5, 3, 4, 8], [1, 9, 8, 3, 4, 2, 5, 6, 7], [8, 5, 9, 7, 6, 1, 4, 2, 3], [4, 2, 6, 8, 5, 3, 7, 9, 1], [7, 1, 3, 9, 2, 4, 8, 5, 6], [9, 6, 1, 5, 3, 7, 2, 8, 4], [2, 8, 7, 4, 1, 9, 6, 3, 5], [3, 4, 5, 2, 8, 6, 1, 7, 9]);
  
  expect(board.compareColumns(0)).toEqual(false);

  });
  
});