//게임 초기화와 종료로직 코드

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

//캔버스 크기 계산
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

//매번 block_size로 계산할 필요 없이 블록의 크기를 1로 취급함
ctx.scale(BLOCK_SIZE,BLOCK_SIZE);

let board = new Board();

//플레이버튼 누르면 실행되는 함수
function play() {
  board.reset();
  console.table(board.grid);
  // board=getEmptyBoard();
  let piece = new Piece(ctx);
  piece.draw();
  board.piece=piece;
}