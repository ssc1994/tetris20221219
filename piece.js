class Piece{
    x;
    y;
    color;
    shape;
    ctx;
    constructor(ctx){
        this.ctx;
        this.spawn();
    }

    spawn(){
        this.color = 'blue';
        this.shape = [
            [2,0,0],
            [2,2,2],
            [0,0,0]
        ];
        
        this.x = 3;
        this.y = 0;

    }

    draw(){
        this.ctx.fillstyle = this.color;
        this.shape.array.forEach((row,y)) => {
            row.array.forEach((value,x)) => {
                if(value>0){
                    this.ctx.fillRect(this.x + x, this.y+y,1,1);
                }
            };
        };
    }

}