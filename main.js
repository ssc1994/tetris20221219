const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

//캔버스 크기 계산
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

//블록의 크기 변경
ctx.scale(BLOCK_SIZE,BLOCK_SIZE);

let board = new Board();

//플레이버튼 누르면 실행되는 함수
function play() {
  board.reset();
  console.table(board.grid);
//   board=getemptyBoard();
  let piece = new Piece(ctx);
  piece.draw();
  board.piece=piece;
}