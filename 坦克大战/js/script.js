function $my(clas){
    return document.getElementsByClassName(clas)[0];
}
// var innweidth = document.body.clientWidth;
// var innheight = document.body.clientHeight;
var bun = document.getElementsByClassName('bunker');
var redstrip,yrllowstrip;
var eftblo = 400;
var rightblo = 400;
var bunker;
var dricet;
var dricetser;
var bullet;
var bulletser;
var map = function(){}
var can = new map();
var body = document.getElementsByTagName('body')[0];


map.prototype.maps=function(){
 
    $my('redtanke').style.left = innerWidth*0.5-100+'px';
    $my('yellowtanke').style.left = innerWidth*0.5-100+'px';
    $my('tank-top').style.left = innerWidth*0.5-50+'px';
    $my('tank-bottom').style.left =innerWidth*0.5-50+'px';
    redstrip = document.createElement('div');
    yrllowstrip = document.createElement('div');
    $my('redblood').appendChild(redstrip);
    $my('yellowblood').appendChild(yrllowstrip);
    redstrip.style.background="#f63";
    redstrip.style.height = eftblo+'px';
    yrllowstrip.style.background="#f63"
    yrllowstrip.style.height = rightblo+'px'; 
    yrllowstrip.style.transform = "rotate(180deg)"
    for(var i = 0 ; i < 8 ; i++){
        for(var s = 0 ; s < 5 ; s++){
    bunker = document.createElement('div')
    body.appendChild(bunker);
    bunker.style.width = 120+'px';
    bunker.style.height = 20+'px';
    bunker.className = 'bunker';
    bunker.style.position = 'absolute'
    bunker.style.background='#ccc';
    bunker.style.left = i*150 +'px';
    bunker.style.top = s*80+'px';
    }
    }
    // for(var l = 0 ; l <bun.length ;l++){
    //     bun[~~(Math.random()*40)].style.transform = "rotate(90deg)";
    // }
}
can.maps();


map.prototype.tank_mover = function(){
    document.onkeydown = function (ev) {
        if (ev.keyCode == 65 ) { dricet = "left" };
        if (ev.keyCode == 87 ) { dricet = "up" };
        if (ev.keyCode == 68 ) { dricet = "right" };
        if (ev.keyCode == 83 ) { dricet = "down" };
        if (ev.keyCode == 37 ) { dricetser = "left" };
        if (ev.keyCode == 38 ) { dricetser = "up" };
        if (ev.keyCode == 39 ) { dricetser = "right" };
        if (ev.keyCode == 40 ) { dricetser = "down" };
      }
      move(dricet,"tank-top","rotate(90deg)","rotate(0deg)","rotate(270deg)","rotate(180deg)")
      move(dricetser,"tank-bottom","rotate(270deg)","rotate(180deg)","rotate(90deg)","rotate(0deg)")
      function move(dir,ction,left,down,right,up){
        switch(dir){
            case "left" :movleft() ;
            break;
            case "down" :movdown();
            break;
            case "right" :movright(); 
            break;
            case "up" :movup(); 
            break;
        }
    
        function movleft(){
            $my(ction).style.transform = left;
            $my(ction).style.left = $my(ction).offsetLeft-2+'px';
        }
        function movdown(){
            $my(ction).style.transform = down;
            $my(ction).style.top = $my(ction).offsetTop+2+'px';
        }
        function movright(){
            $my(ction).style.transform = right;
            $my(ction).style.left = $my(ction).offsetLeft+2+'px';
        }
        function movup(){
            $my(ction).style.transform = up;
            $my(ction).style.top = $my(ction).offsetTop-2+'px';
        }
      }  


          this.t2 = $my('tank-top').offsetTop;
          this.l2 = $my('tank-top').offsetLeft;
          this.r2 = $my('tank-top').offsetLeft+$my('tank-top').offsetWidth;
          this.b2 = $my('tank-top').offsetTop+$my('tank-top').offsetHeight;

          this.t3 = $my('tank-bottom').offsetTop;
          this.l3 = $my('tank-bottom').offsetLeft;
          this.r3 = $my('tank-bottom').offsetLeft+$my('tank-bottom').offsetWidth;
          this.b3 = $my('tank-bottom').offsetTop+$my('tank-bottom').offsetHeight;

        cos(this.l2,this.r2,this.t2,this.b2,$my('tank-top'))
        cos(this.l3,this.r3,this.t3,this.b3,$my('tank-bottom'))
        function cos(l,r,t,b,tankee){
            if(l <= 0 ) tankee.style.left = 0;
            if(r >= innerWidth ) tankee.style.left = innerWidth-50+'px';
            if(t <= 0 ) tankee.style.top = 0;
            if(b >= innerHeight ) tankee.style.top = innerHeight-50+'px';
        }
         }
    
var timer =setInterval(can.tank_mover,15);

map.prototype.creatbullte = function(bullets,downt,letfs,rights,ups,tnakes,dricets){
    bullets = document.createElement('div');
    body.appendChild(bullets);
    bullets.className = "bullet";
    switch(dricets){
        case "down": bullets.style.left = tnakes.offsetLeft+24+'px';
                    bullets.style.transform = downt;   
                    bullets.style.top = tnakes.offsetTop+50+'px';
                    setTimeout(function(){
                        clearInterval(this.leftts);
                        clearInterval(this.rightts);
                        clearInterval(this.upts);
                    },2000)
                   
                    setTimeout(function(){
                        clearInterval(this.downts);
                    },2000)
                    this.downts = setInterval(function(){
                        bullets.style.top = bullets.offsetTop+2+'px';
                       
                    },1);      
        break;
        case "left": bullets.style.left = tnakes.offsetLeft-10+'px';
                     bullets.style.transform = letfs;
                     bullets.style.top = tnakes.offsetTop+22+'px';
                     setTimeout(function(){
                        clearInterval(this.rightts)
                     clearInterval(this.upts)
                     clearInterval(this.downts)
                     },2000)
                     
                     setTimeout(function(){
                        clearInterval(this.leftts)
                     },2000)
                     this.leftts =setInterval(function(){
                        bullets.style.left = bullets.offsetLeft-2+'px';
                     },5); 
        break;
        case "right": bullets.style.left = tnakes.offsetLeft+60+'px';
                     bullets.style.transform = rights;
                     bullets.style.top =tnakes.offsetTop+22+'px';
                     setTimeout(function(){
                        clearInterval(this.leftts);
                        clearInterval(this.upts);
                        clearInterval(this.downts);
                     },2000)
                    
                     setTimeout(function(){
                        clearInterval(this.rightts);
                     },2000)
                     
                     this.rightts =setInterval(function(){
                    bullets.style.left = bullets.offsetLeft+2+'px';
                     },5); 
        break;
        case "up": bullets.style.left = tnakes.offsetLeft+22+'px';
                      bullets.style.transform = ups;
                      bullets.style.top = tnakes.offsetTop-10+'px';
                      setTimeout(function(){
                        clearInterval(this.leftts);
                        clearInterval(this.rightts);
                        clearInterval(this.upts);
                      },2000)
                     
                      setTimeout(function(){
                        clearInterval(this.downts);
                      },2000)
                      
                      this.upts =setInterval(function(){
                        bullets.style.top = bullets.offsetTop-2+'px';
        },5); 
        break;
    } 

    setInterval(function(){
        if(bullets.offsetLeft > innerWidth || bullets.offsetTop > innerHeight || bullets.offsetLeft < 0 || bullets.offsetTop < 0){
            body.removeChild(bullets);
        }
        
      for(var s = 0 ; s < bun.length; s++ ){
        let zanai = bun[s];
        var t5 = zanai.offsetTop;
        var l5 = zanai.offsetLeft;
        var r5 = zanai.offsetLeft+zanai.offsetWidth;
        var b5 = zanai.offsetTop+zanai.offsetHeight;
      
        var t1 = bullets.offsetTop;
        var l1 = bullets.offsetLeft;
        var r1 = bullets.offsetLeft+bullets.offsetWidth;
        var b1 = bullets.offsetTop+bullets.offsetHeight;

        if (t1 >= this.b2 || l1 >= this.r2 || b1 <= this.t2 || r1 <= this.l2) {

        }else{
          body.removeChild(bullets);
          eftblo -=80;
          redstrip.style. transition = "all 1s"
          redstrip.style.height = eftblo+'px';
          if(eftblo == 0){
              setTimeout(function(){
                alert('恭喜tank2胜利！')
                window.location.reload();
              },1000)
            
          }
        }
        if (t1 >= this.b3 || l1 >= this.r3 || b1 <= this.t3 || r1 <= this.l3) {

        }else{
          body.removeChild(bullets);
          rightblo -=80;
          yrllowstrip.style. transition = "all 1s"
          yrllowstrip.style.height = rightblo+'px';
          if(rightblo == 0){
            setTimeout(function(){
                alert('恭喜tank1胜利！')
                window.location.reload();
              },1000)
          }
        }

        if (t1 >= b5 || l1 >= r5 || b1 <= t5 || r1 <= l5) { 

        }else{
            body.removeChild(bullets);
            body.removeChild(zanai);
        }
    }
    },10)
}

window.onkeydown = function(event){
    var e = event || window.event;
    if(e.keyCode == 74){
        can.creatbullte(bullet,"rotate(0deg)","rotate(90deg)","rotate(270deg)","rotate(180deg)",$my('tank-top'),dricet);
    }
    if(e.keyCode == 48){
        can.creatbullte(bulletser,"rotate(180deg)","rotate(270deg)","rotate(90deg)","rotate(0deg)",$my('tank-bottom'),dricetser);
    }
}

map.prototype.bulhit = function(){

}
setInterval(can.bulhit,10)


