let that;
class Game{
    constructor(toll1,difficluy,energys){
        this.toll1 = toll1
        this.energys = energys;
        this.difficluy = difficluy;
        this.map;
        that = this;
        this.conts=[];
        this.layout = [
                    [{"r":0,"c":0,"val":0,"sta":0},{"r":0,"c":1,"val":0,"sta":0},{"r":0,"c":2,"val":0,"sta":0},{"r":0,"c":3,"val":0,"sta":0},{"r":0,"c":4,"val":0,"sta":0},{"r":0,"c":10,"val":0,"sta":0},{"r":0,"c":9,"val":0,"sta":0},{"r":0,"c":8,"val":0,"sta":0},{"r":0,"c":7,"val":0,"sta":0},{"r":0,"c":6,"val":0,"sta":0},{"r":1,"c":10,"val":0,"sta":0},{"r":1,"c":9,"val":0,"sta":0},{"r":1,"c":8,"val":0,"sta":0},{"r":1,"c":7,"val":0,"sta":0},{"r":2,"c":10,"val":0,"sta":0},{"r":2,"c":9,"val":0,"sta":0},{"r":2,"c":8,"val":0,"sta":0},{"r":3,"c":10,"val":0,"sta":0},{"r":3,"c":9,"val":0,"sta":0},{"r":4,"c":10,"val":0,"sta":0},{"r":1,"c":0,"val":0,"sta":0},{"r":1,"c":1,"val":0,"sta":0},{"r":1,"c":2,"val":0,"sta":0},{"r":1,"c":3,"val":0,"sta":0},{"r":2,"c":0,"val":0,"sta":0},{"r":2,"c":1,"val":0,"sta":0},{"r":2,"c":2,"val":0,"sta":0},{"r":3,"c":0,"val":0,"sta":0},{"r":3,"c":1,"val":0,"sta":0},{"r":4,"c":0,"val":0,"sta":0},{"r":15,"c":0,"val":0,"sta":0},{"r":15,"c":1,"val":0,"sta":0},{"r":15,"c":2,"val":0,"sta":0},{"r":15,"c":3,"val":0,"sta":0},{"r":15,"c":4,"val":0,"sta":0},{"r":15,"c":10,"val":0,"sta":0},{"r":15,"c":9,"val":0,"sta":0},{"r":15,"c":8,"val":0,"sta":0},{"r":15,"c":7,"val":0,"sta":0},{"r":15,"c":6,"val":0,"sta":0},{"r":14,"c":10,"val":0,"sta":0},{"r":14,"c":9,"val":0,"sta":0},{"r":14,"c":8,"val":0,"sta":0},{"r":14,"c":7,"val":0,"sta":0},{"r":13,"c":10,"val":0,"sta":0},{"r":13,"c":9,"val":0,"sta":0},{"r":13,"c":8,"val":0,"sta":0},{"r":12,"c":10,"val":0,"sta":0},{"r":12,"c":9,"val":0,"sta":0},{"r":11,"c":10,"val":0,"sta":0},{"r":14,"c":0,"val":0,"sta":0},{"r":14,"c":1,"val":0,"sta":0},{"r":14,"c":2,"val":0,"sta":0},{"r":14,"c":3,"val":0,"sta":0},{"r":13,"c":0,"val":0,"sta":0},{"r":13,"c":1,"val":0,"sta":0},{"r":13,"c":2,"val":0,"sta":0},{"r":12,"c":0,"val":0,"sta":0},{"r":12,"c":1,"val":0,"sta":0},{"r":11,"c":0,"val":0,"sta":0},{"r":7,"c":0,"val":0,"sta":0},{"r":8,"c":0,"val":0,"sta":0},{"r":7,"c":10,"val":0,"sta":0},{"r":8,"c":10,"val":0,"sta":0},{"r":9,"c":9,"val":0,"sta":0},{"r":10,"c":8,"val":0,"sta":0},{"r":11,"c":7,"val":0,"sta":0},{"r":12,"c":6,"val":0,"sta":0},{"r":13,"c":5,"val":0,"sta":0},{"r":12,"c":4,"val":0,"sta":0},{"r":11,"c":3,"val":0,"sta":0},{"r":10,"c":2,"val":0,"sta":0},{"r":9,"c":1,"val":0,"sta":0},{"r":6,"c":1,"val":0,"sta":0},{"r":5,"c":2,"val":0,"sta":0},{"r":4,"c":3,"val":0,"sta":0},{"r":3,"c":4,"val":0,"sta":0},{"r":2,"c":5,"val":0,"sta":0},{"r":3,"c":6,"val":0,"sta":0},{"r":4,"c":7,"val":0,"sta":0},{"r":5,"c":8,"val":0,"sta":0},{"r":6,"c":9,"val":0,"sta":0},{"r":7,"c":9,"val":0,"sta":0},{"r":7,"c":8,"val":0,"sta":0},{"r":7,"c":7,"val":0,"sta":0},{"r":7,"c":6,"val":0,"sta":0},{"r":7,"c":5,"val":0,"sta":0},{"r":7,"c":4,"val":0,"sta":0},{"r":7,"c":3,"val":0,"sta":0},{"r":7,"c":2,"val":0,"sta":0},{"r":7,"c":1,"val":0,"sta":0},{"r":6,"c":2,"val":0,"sta":0},{"r":6,"c":3,"val":0,"sta":0},{"r":6,"c":4,"val":0,"sta":0},{"r":6,"c":5,"val":0,"sta":0},{"r":6,"c":6,"val":0,"sta":0},{"r":6,"c":7,"val":0,"sta":0},{"r":6,"c":8,"val":0,"sta":0},{"r":5,"c":7,"val":0,"sta":0},{"r":5,"c":6,"val":0,"sta":0},{"r":5,"c":5,"val":0,"sta":0},{"r":5,"c":4,"val":0,"sta":0},{"r":5,"c":3,"val":0,"sta":0},{"r":4,"c":4,"val":0,"sta":0},{"r":4,"c":5,"val":0,"sta":0},{"r":4,"c":6,"val":0,"sta":0},{"r":3,"c":5,"val":0,"sta":0},{"r":8,"c":1,"val":0,"sta":0},{"r":8,"c":2,"val":0,"sta":0},{"r":8,"c":3,"val":0,"sta":0},{"r":8,"c":4,"val":0,"sta":0},{"r":8,"c":5,"val":0,"sta":0},{"r":8,"c":6,"val":0,"sta":0},{"r":8,"c":7,"val":0,"sta":0},{"r":8,"c":8,"val":0,"sta":0},{"r":8,"c":9,"val":0,"sta":0},{"r":9,"c":8,"val":0,"sta":0},{"r":9,"c":7,"val":0,"sta":0},{"r":9,"c":6,"val":0,"sta":0},{"r":9,"c":5,"val":0,"sta":0},{"r":9,"c":4,"val":0,"sta":0},{"r":9,"c":3,"val":0,"sta":0},{"r":9,"c":2,"val":0,"sta":0},{"r":10,"c":3,"val":0,"sta":0},{"r":10,"c":4,"val":0,"sta":0},{"r":10,"c":5,"val":0,"sta":0},{"r":10,"c":6,"val":0,"sta":0},{"r":10,"c":7,"val":0,"sta":0},{"r":11,"c":6,"val":0,"sta":0},{"r":11,"c":5,"val":0,"sta":0},{"r":11,"c":4,"val":0,"sta":0},{"r":12,"c":5,"val":0,"sta":0}],
                    [{"r":0,"c":10,"val":0,"sta":0},{"r":0,"c":9,"val":0,"sta":0},{"r":0,"c":8,"val":0,"sta":0},{"r":1,"c":10,"val":0,"sta":0},{"r":1,"c":9,"val":0,"sta":0},{"r":2,"c":10,"val":0,"sta":0},{"r":15,"c":10,"val":0,"sta":0},{"r":15,"c":9,"val":0,"sta":0},{"r":15,"c":8,"val":0,"sta":0},{"r":14,"c":10,"val":0,"sta":0},{"r":14,"c":9,"val":0,"sta":0},{"r":13,"c":10,"val":0,"sta":0},{"r":3,"c":1,"val":0,"sta":0},{"r":4,"c":1,"val":0,"sta":0},{"r":5,"c":1,"val":0,"sta":0},{"r":10,"c":1,"val":0,"sta":0},{"r":11,"c":1,"val":0,"sta":0},{"r":12,"c":1,"val":0,"sta":0},{"r":13,"c":2,"val":0,"sta":0},{"r":14,"c":3,"val":0,"sta":0},{"r":14,"c":4,"val":0,"sta":0},{"r":13,"c":5,"val":0,"sta":0},{"r":12,"c":6,"val":0,"sta":0},{"r":11,"c":7,"val":0,"sta":0},{"r":10,"c":8,"val":0,"sta":0},{"r":9,"c":9,"val":0,"sta":0},{"r":8,"c":10,"val":0,"sta":0},{"r":7,"c":10,"val":0,"sta":0},{"r":2,"c":2,"val":0,"sta":0},{"r":1,"c":3,"val":0,"sta":0},{"r":1,"c":4,"val":0,"sta":0},{"r":2,"c":5,"val":0,"sta":0},{"r":3,"c":6,"val":0,"sta":0},{"r":4,"c":7,"val":0,"sta":0},{"r":5,"c":8,"val":0,"sta":0},{"r":6,"c":9,"val":0,"sta":0},{"r":12,"c":2,"val":0,"sta":0},{"r":13,"c":3,"val":0,"sta":0},{"r":13,"c":4,"val":0,"sta":0},{"r":12,"c":3,"val":0,"sta":0},{"r":12,"c":4,"val":0,"sta":0},{"r":12,"c":5,"val":0,"sta":0},{"r":11,"c":6,"val":0,"sta":0},{"r":11,"c":5,"val":0,"sta":0},{"r":11,"c":4,"val":0,"sta":0},{"r":11,"c":3,"val":0,"sta":0},{"r":11,"c":2,"val":0,"sta":0},{"r":10,"c":2,"val":0,"sta":0},{"r":10,"c":3,"val":0,"sta":0},{"r":10,"c":4,"val":0,"sta":0},{"r":10,"c":5,"val":0,"sta":0},{"r":10,"c":6,"val":0,"sta":0},{"r":10,"c":7,"val":0,"sta":0},{"r":9,"c":8,"val":0,"sta":0},{"r":9,"c":7,"val":0,"sta":0},{"r":9,"c":6,"val":0,"sta":0},{"r":9,"c":5,"val":0,"sta":0},{"r":9,"c":4,"val":0,"sta":0},{"r":9,"c":3,"val":0,"sta":0},{"r":9,"c":2,"val":0,"sta":0},{"r":3,"c":2,"val":0,"sta":0},{"r":4,"c":2,"val":0,"sta":0},{"r":5,"c":2,"val":0,"sta":0},{"r":6,"c":2,"val":0,"sta":0},{"r":7,"c":2,"val":0,"sta":0},{"r":8,"c":2,"val":0,"sta":0},{"r":8,"c":3,"val":0,"sta":0},{"r":8,"c":4,"val":0,"sta":0},{"r":8,"c":5,"val":0,"sta":0},{"r":8,"c":6,"val":0,"sta":0},{"r":8,"c":7,"val":0,"sta":0},{"r":8,"c":8,"val":0,"sta":0},{"r":8,"c":9,"val":0,"sta":0},{"r":7,"c":9,"val":0,"sta":0},{"r":7,"c":8,"val":0,"sta":0},{"r":7,"c":7,"val":0,"sta":0},{"r":7,"c":6,"val":0,"sta":0},{"r":7,"c":5,"val":0,"sta":0},{"r":7,"c":4,"val":0,"sta":0},{"r":7,"c":3,"val":0,"sta":0},{"r":6,"c":3,"val":0,"sta":0},{"r":6,"c":4,"val":0,"sta":0},{"r":6,"c":5,"val":0,"sta":0},{"r":6,"c":6,"val":0,"sta":0},{"r":6,"c":7,"val":0,"sta":0},{"r":6,"c":8,"val":0,"sta":0},{"r":5,"c":7,"val":0,"sta":0},{"r":5,"c":6,"val":0,"sta":0},{"r":5,"c":5,"val":0,"sta":0},{"r":5,"c":4,"val":0,"sta":0},{"r":5,"c":3,"val":0,"sta":0},{"r":4,"c":3,"val":0,"sta":0},{"r":4,"c":4,"val":0,"sta":0},{"r":4,"c":5,"val":0,"sta":0},{"r":4,"c":6,"val":0,"sta":0},{"r":3,"c":5,"val":0,"sta":0},{"r":3,"c":4,"val":0,"sta":0},{"r":3,"c":3,"val":0,"sta":0},{"r":2,"c":4,"val":0,"sta":0},{"r":2,"c":3,"val":0,"sta":0}],
                    [{"r":0,"c":9,"val":0,"sta":0},{"r":1,"c":10,"val":0,"sta":0},{"r":4,"c":10,"val":0,"sta":0},{"r":7,"c":10,"val":0,"sta":0},{"r":10,"c":10,"val":0,"sta":0},{"r":13,"c":10,"val":0,"sta":0},{"r":15,"c":9,"val":0,"sta":0},{"r":3,"c":9,"val":0,"sta":0},{"r":2,"c":8,"val":0,"sta":0},{"r":1,"c":7,"val":0,"sta":0},{"r":0,"c":6,"val":0,"sta":0},{"r":6,"c":9,"val":0,"sta":0},{"r":5,"c":8,"val":0,"sta":0},{"r":4,"c":7,"val":0,"sta":0},{"r":3,"c":6,"val":0,"sta":0},{"r":2,"c":5,"val":0,"sta":0},{"r":1,"c":4,"val":0,"sta":0},{"r":0,"c":3,"val":0,"sta":0},{"r":9,"c":9,"val":0,"sta":0},{"r":8,"c":8,"val":0,"sta":0},{"r":7,"c":7,"val":0,"sta":0},{"r":6,"c":6,"val":0,"sta":0},{"r":5,"c":5,"val":0,"sta":0},{"r":4,"c":4,"val":0,"sta":0},{"r":3,"c":3,"val":0,"sta":0},{"r":2,"c":2,"val":0,"sta":0},{"r":1,"c":1,"val":0,"sta":0},{"r":0,"c":0,"val":0,"sta":0},{"r":12,"c":9,"val":0,"sta":0},{"r":11,"c":8,"val":0,"sta":0},{"r":10,"c":7,"val":0,"sta":0},{"r":9,"c":6,"val":0,"sta":0},{"r":8,"c":5,"val":0,"sta":0},{"r":7,"c":4,"val":0,"sta":0},{"r":6,"c":3,"val":0,"sta":0},{"r":5,"c":2,"val":0,"sta":0},{"r":4,"c":1,"val":0,"sta":0},{"r":3,"c":0,"val":0,"sta":0},{"r":14,"c":8,"val":0,"sta":0},{"r":13,"c":7,"val":0,"sta":0},{"r":12,"c":6,"val":0,"sta":0},{"r":11,"c":5,"val":0,"sta":0},{"r":10,"c":4,"val":0,"sta":0},{"r":9,"c":3,"val":0,"sta":0},{"r":8,"c":2,"val":0,"sta":0},{"r":7,"c":1,"val":0,"sta":0},{"r":6,"c":0,"val":0,"sta":0},{"r":15,"c":6,"val":0,"sta":0},{"r":14,"c":5,"val":0,"sta":0},{"r":13,"c":4,"val":0,"sta":0},{"r":12,"c":3,"val":0,"sta":0},{"r":11,"c":2,"val":0,"sta":0},{"r":10,"c":1,"val":0,"sta":0},{"r":9,"c":0,"val":0,"sta":0},{"r":15,"c":3,"val":0,"sta":0},{"r":14,"c":2,"val":0,"sta":0},{"r":13,"c":1,"val":0,"sta":0},{"r":12,"c":0,"val":0,"sta":0}],
                    [{"r":2,"c":0,"val":0,"sta":0},{"r":1,"c":1,"val":0,"sta":0},{"r":2,"c":1,"val":0,"sta":0},{"r":3,"c":1,"val":0,"sta":0},{"r":0,"c":2,"val":0,"sta":0},{"r":1,"c":2,"val":0,"sta":0},{"r":3,"c":2,"val":0,"sta":0},{"r":4,"c":2,"val":0,"sta":0},{"r":4,"c":3,"val":0,"sta":0},{"r":0,"c":3,"val":0,"sta":0},{"r":3,"c":4,"val":0,"sta":0},{"r":2,"c":5,"val":0,"sta":0},{"r":1,"c":6,"val":0,"sta":0},{"r":1,"c":7,"val":0,"sta":0},{"r":2,"c":6,"val":0,"sta":0},{"r":3,"c":5,"val":0,"sta":0},{"r":4,"c":6,"val":0,"sta":0},{"r":5,"c":7,"val":0,"sta":0},{"r":5,"c":6,"val":0,"sta":0},{"r":6,"c":6,"val":0,"sta":0},{"r":7,"c":5,"val":0,"sta":0},{"r":4,"c":5,"val":0,"sta":0},{"r":1,"c":9,"val":0,"sta":0},{"r":3,"c":10,"val":0,"sta":0},{"r":6,"c":10,"val":0,"sta":0},{"r":6,"c":9,"val":0,"sta":0},{"r":7,"c":9,"val":0,"sta":0},{"r":7,"c":8,"val":0,"sta":0},{"r":8,"c":7,"val":0,"sta":0},{"r":8,"c":8,"val":0,"sta":0},{"r":9,"c":8,"val":0,"sta":0},{"r":9,"c":9,"val":0,"sta":0},{"r":10,"c":9,"val":0,"sta":0},{"r":10,"c":10,"val":0,"sta":0},{"r":14,"c":10,"val":0,"sta":0},{"r":15,"c":8,"val":0,"sta":0},{"r":15,"c":7,"val":0,"sta":0},{"r":14,"c":7,"val":0,"sta":0},{"r":14,"c":6,"val":0,"sta":0},{"r":13,"c":7,"val":0,"sta":0},{"r":13,"c":8,"val":0,"sta":0},{"r":12,"c":8,"val":0,"sta":0},{"r":12,"c":9,"val":0,"sta":0},{"r":9,"c":5,"val":0,"sta":0},{"r":11,"c":5,"val":0,"sta":0},{"r":15,"c":0,"val":0,"sta":0},{"r":15,"c":1,"val":0,"sta":0},{"r":14,"c":1,"val":0,"sta":0},{"r":14,"c":2,"val":0,"sta":0},{"r":13,"c":2,"val":0,"sta":0},{"r":13,"c":3,"val":0,"sta":0},{"r":12,"c":1,"val":0,"sta":0},{"r":8,"c":0,"val":0,"sta":0},{"r":7,"c":1,"val":0,"sta":0},{"r":8,"c":1,"val":0,"sta":0},{"r":9,"c":1,"val":0,"sta":0},{"r":7,"c":2,"val":0,"sta":0},{"r":6,"c":2,"val":0,"sta":0},{"r":9,"c":2,"val":0,"sta":0},{"r":10,"c":2,"val":0,"sta":0},{"r":10,"c":3,"val":0,"sta":0},{"r":6,"c":3,"val":0,"sta":0}],
                    [{"r":0,"c":1,"val":0,"sta":0},{"r":1,"c":0,"val":0,"sta":0},{"r":2,"c":1,"val":0,"sta":0},{"r":3,"c":0,"val":0,"sta":0},{"r":4,"c":1,"val":0,"sta":0},{"r":5,"c":0,"val":0,"sta":0},{"r":6,"c":1,"val":0,"sta":0},{"r":7,"c":0,"val":0,"sta":0},{"r":8,"c":1,"val":0,"sta":0},{"r":9,"c":0,"val":0,"sta":0},{"r":10,"c":1,"val":0,"sta":0},{"r":11,"c":0,"val":0,"sta":0},{"r":12,"c":1,"val":0,"sta":0},{"r":13,"c":0,"val":0,"sta":0},{"r":14,"c":1,"val":0,"sta":0},{"r":15,"c":0,"val":0,"sta":0},{"r":14,"c":4,"val":0,"sta":0},{"r":13,"c":4,"val":0,"sta":0},{"r":12,"c":4,"val":0,"sta":0},{"r":12,"c":5,"val":0,"sta":0},{"r":13,"c":5,"val":0,"sta":0},{"r":14,"c":5,"val":0,"sta":0},{"r":12,"c":6,"val":0,"sta":0},{"r":13,"c":6,"val":0,"sta":0},{"r":14,"c":6,"val":0,"sta":0},{"r":14,"c":10,"val":0,"sta":0},{"r":13,"c":10,"val":0,"sta":0},{"r":12,"c":10,"val":0,"sta":0},{"r":13,"c":9,"val":0,"sta":0},{"r":13,"c":8,"val":0,"sta":0},{"r":13,"c":7,"val":0,"sta":0},{"r":10,"c":10,"val":0,"sta":0},{"r":9,"c":10,"val":0,"sta":0},{"r":8,"c":10,"val":0,"sta":0},{"r":9,"c":9,"val":0,"sta":0},{"r":8,"c":8,"val":0,"sta":0},{"r":9,"c":8,"val":0,"sta":0},{"r":10,"c":8,"val":0,"sta":0},{"r":10,"c":7,"val":0,"sta":0},{"r":9,"c":7,"val":0,"sta":0},{"r":8,"c":7,"val":0,"sta":0},{"r":8,"c":6,"val":0,"sta":0},{"r":9,"c":6,"val":0,"sta":0},{"r":10,"c":6,"val":0,"sta":0},{"r":6,"c":10,"val":0,"sta":0},{"r":5,"c":10,"val":0,"sta":0},{"r":4,"c":10,"val":0,"sta":0},{"r":5,"c":9,"val":0,"sta":0},{"r":5,"c":8,"val":0,"sta":0},{"r":5,"c":7,"val":0,"sta":0},{"r":5,"c":6,"val":0,"sta":0},{"r":4,"c":5,"val":0,"sta":0},{"r":5,"c":5,"val":0,"sta":0},{"r":6,"c":5,"val":0,"sta":0},{"r":6,"c":4,"val":0,"sta":0},{"r":5,"c":4,"val":0,"sta":0},{"r":4,"c":4,"val":0,"sta":0},{"r":4,"c":3,"val":0,"sta":0},{"r":5,"c":3,"val":0,"sta":0},{"r":6,"c":3,"val":0,"sta":0},{"r":2,"c":10,"val":0,"sta":0},{"r":1,"c":10,"val":0,"sta":0},{"r":0,"c":10,"val":0,"sta":0},{"r":1,"c":9,"val":0,"sta":0},{"r":1,"c":8,"val":0,"sta":0},{"r":0,"c":7,"val":0,"sta":0},{"r":1,"c":7,"val":0,"sta":0},{"r":2,"c":7,"val":0,"sta":0},{"r":2,"c":6,"val":0,"sta":0},{"r":1,"c":6,"val":0,"sta":0},{"r":0,"c":6,"val":0,"sta":0},{"r":0,"c":5,"val":0,"sta":0},{"r":1,"c":5,"val":0,"sta":0},{"r":2,"c":5,"val":0,"sta":0}]
                    ]
        this.timers = null;
        this.time = 0;
        this.score = 0;
        this.blocks = 0;
        this.enerys = 15;8
        this.refres = 3;
        this.gamestate = true;
        this.createmap();
        this.timer();
        this.musiceout();
        this.timeout();
    }
    createmap(){
        this.map = new Array(16).fill().map((vals,r)=> new Array(11).fill().map((val,c)=>({
            r,c,val:0,sta:0
        })))
        this.createblock();
    }
    timer(){
    $('.name').text(name);
    $('.toll1').text(this.toll1);
    clearInterval(this.timers);
     this.timers=setInterval(() => {
         if(!this.gamestate) return;
            this.time++;
            this.enerys--;
            if(this.enerys <= 0){
                this.enerys = 0;
                this.gamefail();
            }
            $('.eneryser').text(this.enerys);
            $('.enerylengthser').css('width',`${this.enerys*8}px`)
            $('.timers').text(`timer:${this.time}`)
        }, 1000);
    }
    createblock(){
        let cont = this.layout[~~(Math.random()*5)];
        cont.map(vals =>{
           this.map.map(val=>val.map(valser=>{
               if(valser.r == vals.r && valser.c == vals.c){
                    valser.sta = 1;
               }
           }))
        })
        for(let i = 0 ; i < cont.length/2; i++){
            this.conts.push(~~(Math.random()*8))
        }
        this.conts = this.conts.concat(this.conts);
        this.blocks = this.conts.length;
        $('.blocks').text(`Remaining blocks:${this.blocks}`)
        this.creatlayout(cont);
    }
    creatlayout(cont){
        $('.gamemap').html('');
        for(let i = 0 ;i <cont.length;i++ ){
            $('.gamemap').append($('<div class ="little"></div>'));
            $('.little')[i].style.left = cont[i].r*53+'px';
            $('.little')[i].style.top = cont[i].c*49+'px';
            $('.little')[i].style.background = `url(./images/images/${this.conts[i]+1}.gif)`;
            $('.little')[i].style.backgroundSize = '100% 100%';
            cont[i].val = this.conts[i];
        }
        this.blockclick(cont);
        this.refresh(cont);
        this.point(cont);
    }
    playaudo(src){
        if(!musta)return;
        $('body').append(`<audio src="./music/${src}.mp3" autoplay></audio>`)
    }
    blockclick(cont){
        let state = 0;
        let one, tow;
        let start,end;
        let little = document.getElementsByClassName('little');
        for(let i = 0; i < little.length;i++){
            little[i].onclick =function(){
                if(!that.gamestate) return;
                that.playaudo('blocks');
                state++
                $(this).css('animation',' move 0.8s infinite').siblings().css('animation','none')
                if(state == 1){
                    one = little[i];
                    start = cont[i];
                }
                if(state == 2){
                    tow = little[i];
                    end =  cont[i];
                    if(one == tow){
                        lessfun()
                        state = 1;
                        return 
                    } 
                    if(start.val == end.val){
                        state = 0;
                        let route = new Route(that.map);
                        let cont = route.get(start,end);
                        if(cont){
                            that.draw(cont,200);
                            that.playaudo('destroyed');
                            that.blocks-=2;
                            that.score +=10;
                            that.enerys+=that.energys;
                            if(that.blocks <= 0)that.gamewinll();
                            if(that.enerys >= 30) that.enerys = 30;
                            $('.eneryser').text(that.enerys);
                            $('.enerylengthser').css('width',`${that.enerys*8}px`)
                            $('.scores').text(`Score:${that.score}`);
                            $('.blocks').text(`Remaining blocks:${that.blocks}`);
                            that.map[start.r][start.c].sta = 0;
                            that.map[end.r][end.c].sta = 0;
                            one.style.display = 'none';
                            tow.style.display = 'none';
                        }else{
                            lessfun()
                        }
                    }else{
                        lessfun()
                    }
                }
            }
        }
        function lessfun(){
            that.score-=5
            if(that.score <= 0){
                that.score = 0;
            }
            $('.scores').text(`Score:${that.score}`);
            state = 0;
        }
        $('.init').click(()=>{
            this.init();
        })
    }
    draw(cont,tim){
        let draw = new Draw();
        draw.moveto(cont[0].r*53,cont[0].c*49);
        cont.slice(1).map(val=>{
            draw.lineto(val.r*53,val.c*49)
        })
        setTimeout(()=>{
            draw.clear();
        },tim)
    }
    refresh(cont){
        $('.refesh').unbind('click').click(()=>{
        if(!this.gamestate)return;
        if(this.refres <= 0 )return;
        this.refres--
        $('.toll2').text(this.refres)
            let num =[];
            let conts =[];
           this.map.map(vals=>vals.map(val=>{
               if(val.sta){
                   cont.map(valser=>{
                       if(val.r== valser.r && val.c == valser.c){
                           conts.push(valser);
                           num.push(valser.val);
                       }
                   })
               }
           }))
           num.sort(()=>{
            return Math.random() -.49;
        })
        this.conts = num;
        this.creatlayout(conts)
        })
    }
    point(cont){
        $('.point').click(()=>{
            if(!this.gamestate)return;
            if(this.toll1 <= 0) return;
            this.toll1--;
            $('.toll1').text(this.toll1);
            let conts =[]
            this.map.map(vals=>vals.map(val=>{
                cont.map(v=>{
                    if(v.r == val.r && v.c == val.c && val.sta == 1){
                        conts.push(v);
                    }     
                })
            }))
            let start = false;
            conts.map(vals=>{
                conts.map(val=>{
                    if(vals != val && vals.val == val.val){
                        let route = new Route(that.map);
                        let satr = route.get(vals,val);
                        if(satr){
                            if(start)return;
                            start = true;
                            this.draw(satr,1000);
                        }
                    }
                })
            })
        })
    }
    musiceout(){
        $('.musice').unbind().click(()=>{
            musta = !musta;
            if(!musta){
                   $('.musice>img')[0].src='./images/icon9.png';
            }else{
                $('.musice>img')[0].src='./images/icon8.png';
            }
        })
    }
    timeout(){
        $('.timeout').unbind().click(()=>{
            timeoutfn();
        })
        document.onkeydown=(ev)=>{
            let e = ev || ev.window;
            if(e.keyCode == 80){
                timeoutfn();
            }
        }
        function timeoutfn(){
            that.gamestate = !that.gamestate;
            if(!that.gamestate){
                $('.timeout>img')[0].src='./images/icon7.png';
            }else{
                $('.timeout>img')[0].src='./images/icon6.png';
            }
        }
    }
    init(){
        clearInterval(this.timers);
        this.time = 0;
        this.score = 0;
        this.blocks = 0;
        this.enerys = 15;
        this.refres = 3;
        this.gamestate = true;
        musta = true;
        $('.timeout>img')[0].src='./images/icon6.png';
        $('.musice>img')[0].src='./images/icon8.png';
        $('.homepage').css('display','block');
        $('.gamepage').css( 'transform','scale(0)');
    }
    gameover(){
        that.gamestate = !that.gamestate;
        $('.gameoverpage').animate({top:0},400);
        $('.names').text(`Name:${name}`);
        $('.score').text(`Score:${this.score}`)
        $('.times').text(`Time:${this.time}`)
        let ranking = new Ranking(name,this.difficluy,this.score,this.time);
        ranking.postajax();
        $('.overranking').click(()=>{
            $('.gameoverpage').animate({top:`-100%`},400);
            $('.rankingpege').animate({right:0},400);
            this.init();
        })
        $('.overnewgame').click(()=>{
            $('.gameoverpage').animate({top:`-100%`},400);
            this.init();
        })
        $('.ranknewgame').click(()=>{
            $('.rankingpege').animate({right:`-100%`},400);
            this.init();
        })
    }
    gamefail(){
        this.gameover();
        this.playaudo('fail');
    }
    gamewinll(){
        $('.gamesta').text('win');
        $('.gamesta').css('color','#fd7e7e');
        this.playaudo('win');
        this.gameover();
    }
}
class Draw{
    constructor(){
        this.con = $('#canvas')[0];
        this.cxt = this.con.getContext('2d');
    }
    clear(){
        this.cxt.clearRect(0,0,860,540);
    }
    moveto(x,y){
        this.cxt.beginPath();
        this.cxt.lineWidth = 3;
        this.cxt.strokeStyle = 'yellow';
        this.cxt.moveTo(x+25,y+25);
        this.cxt.fill();
    }
    lineto(x,y){
        this.cxt.lineTo(x+25,y+25)
        this.cxt.stroke();
    }
}
class Ranking{
    constructor(name,difficluy,score,time){
        this.name = name;
        this.difficluy = difficluy;
        this.score = score;
        this.time = time;
    }
    postajax(){
        let _this = this;
        $.ajax({
            type:'post',
            url:'php/register.php',
            data:{name:this.name,score:this.score,time:this.time,difficulty:this.difficluy},
            success:function(msg){
                _this.sortfun(msg);
            }
        })
    }
    getajax(){
        let _this = this;
        $.ajax({
            type:'get',
            url:'php/register.php',
            success:function(msg){
                _this.sortfun(msg);
            }
        })
    }
    sortfun(data){
        let easy = [];
        let normal = [];
        let hard =[];
        data.map(vals=>{
            if(vals.difficulty == 'easy' ){
                easy.push(vals)
            }
            if(vals.difficulty == 'normal' ){
                normal.push(vals)
            }
            if(vals.difficulty == 'hard' ){
                hard.push(vals)
            }
        })
        sortun(easy);
        $('.rankeasy').click(()=>{
            sortun(easy)
        })
        $('.ranknormal').click(()=>{
            sortun(normal)
        })
        $('.rankhard ').click(()=>{
            sortun(hard)
        })
        function sortun(difficu){
            difficu.sort(function(a,b){
                if(a.score == b.score){
                    return a.time-b.time;
                }else{
                    return b.score-a.score;
                }
            })
            add(difficu)
        }
        function add(name){
            $('.rankconten').html('');
            $('.rankconten').append(`<div class='list'> 
            <table>
                <tr>
                    <td>position</td>
                    <td>name</td>
                    <td>score</td>
                    <td>time</td>
                </tr>
            </table>
            </div>`)
            name.map((val,index)=>{
                $('.rankconten').append(`<div class='list'> 
                <table>
                    <tr>
                        <td>${index+1}</td>
                        <td>${val.name}</td>
                        <td>${val.score}</td>
                        <td>${val.time}S</td>
                    </tr>
                </table>
                </div>`)
            })
        }
    }
}
