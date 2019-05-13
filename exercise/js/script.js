var container = document.getElementById('container');
var btn = document.getElementById('btn');
var moveX = 8;//x轴速度
var moveY = -11;//y轴速度
var scores = 0;//得分
var timers = 0;//时间
var simple = 3;//简单
var ordinry = 5;//普通
var difficult = 7;//困难
var fool = false;
var canvas = function () { }
var can = new canvas();
//初始化页面
canvas.prototype.innter = function () {
    var conten = document.createElement('div');
    conten.className = 'conten';
    container.appendChild(conten);
    var p = document.createElement('p')
    conten.appendChild(p);
    p.innerHTML = "Arkanoid"
    var button = document.createElement('button');
    conten.appendChild(button);
    button.className = "button";
    button.id = "btn";
    button.innerHTML = '难度';
    button.onclick = function () {
        conten.style.display = 'none';
        can.difficu()
    }
}
can.innter()
canvas.prototype.difficu = function () {
    var content = document.createElement('div');
    content.className = 'conten';
    container.appendChild(content);
    var button = document.createElement('button');
    content.appendChild(button);
    button.className = "button";
    button.innerHTML = '简单';
    var button = document.createElement('button');
    content.appendChild(button);
    button.className = "button";
    button.innerHTML = '普通';
    var button = document.createElement('button');
    content.appendChild(button);
    button.className = "button";
    button.innerHTML = '困难';
    var but = document.getElementsByClassName('button');
    function method() {
        can.baffil();
        can.ball();
        can.score();
        can.timer();
       setTimeout(can.oncli, 100)
        content.style.display = 'none';
    }
    for (var i = 0; i < but.length; i++) {
        but[1].onclick = function () {
            can.brick(simple);
            method()
        };
        but[2].onclick = function () {
            can.brick(ordinry);
            method()
        }
        but[3].onclick = function () {
            can.brick(difficult);
            method()
        }
    }
}

canvas.prototype.oncli = function () {
    //点击小球开始运动

    document.onclick = function () {

        if (fool == false) {
           
            fool = true;
            can.baffil_movement();
            tims= setInterval(can.ball_movement,17) 
            timersset=setInterval(function () {
                timers += 1;
                timer.innerHTML = `时间:${timers}`;
            }, 1000)
           
           
        }
    }
}
//生成砖块
canvas.prototype.brick = function (simple) {
    var colour = Math.round(Math.random()*200)
    var colour2 = Math.round(Math.random()*200)
    var colour3 = Math.round(Math.random()*200)
    for (var i = 0; i < 7; i++) {
        for (var j = 0; j < simple; j++) {
            brick = document.createElement('div');
            brick.className = `brick`;
            brick.style.top = j * 50 + 'px';
            brick.style.left = i * 100 + 'px';
            brick.style.background=`rgb(${colour}, ${colour2}, ${colour3})`;
            container.appendChild(brick);
        }
    }
}

//生成挡板
canvas.prototype.baffil = function () {
    baffil = document.createElement('div');
    baffil.className = `baffil`;
    container.appendChild(baffil)
}

//生成小球
canvas.prototype.ball = function () {
    ball = document.createElement('div');
    ball.className = 'ball';
    container.appendChild(ball)
}

//得分
canvas.prototype.score = function () {
    score = document.createElement('span');
    score.className = 'score'
    score.innerHTML = `得分:0`
    container.appendChild(score);
}

//时间
canvas.prototype.timer = function () {
    timer = document.createElement('span');
    timer.className = 'timer';
    timer.innerHTML = `时间:0`
    container.appendChild(timer);
}

//挡板运动
canvas.prototype.baffil_movement = function () {
    document.onmousemove = function (ev) {
        baffil.style.left = ev.clientX - container.offsetLeft + `px`;
        if (baffil.offsetLeft <= 0) {
            baffil.style.left = 0;
        } else if (baffil.offsetLeft + baffil.offsetWidth >= 740) {
            baffil.style.left = 600 + `px`;
        }
    }
}
//失败弹窗
canvas.prototype.failure = function(){
    var failures =document.createElement('div'); 
    failures.className = 'failures';
    failures.id="failures";
    container.appendChild(failures);
    var failp =document.createElement('p'); 
    failures.appendChild(failp)
    failp.innerHTML = '游戏失败';
    failspan =document.createElement('span'); 
    failspan.id="failspan";
    failures.appendChild(failspan)
    failspan.innerHTML = `得分:0`;
    failspantow =document.createElement('span'); 
    failspantow.id="failspantow"
    failures.appendChild(failspantow)
    failspantow.innerHTML = `时间:0`;
    failsbutton =document.createElement('button'); 
    failsbutton.id="homebtn";
    failures.appendChild(failsbutton)
    failsbutton.innerHTML = `重新开始`;
    homebtn= document.getElementById('homebtn')
}

//小球运动，判断碰撞
canvas.prototype.ball_movement = function () {
    ball.style.top = ball.offsetTop + moveY + 'px';
    ball.style.left = ball.offsetLeft + moveX + 'px';
    this.moveX = (ball.offsetLeft >= 0 && ball.offsetLeft <= container.offsetWidth - ball.offsetWidth) ? moveX : -moveX;
    this.moveY = (ball.offsetTop >= 0 && ball.offsetTop <= container.offsetHeight - ball.offsetHeight) ? moveY : -moveY;
    var bric = document.getElementsByClassName('brick');
    for (var x = 0; x < bric.length; x++) {
        var bricke = bric[x];
        var t1 = ball.offsetTop;
        var l1 = ball.offsetLeft;
        var b1 = ball.offsetTop + ball.offsetHeight;
        var r1 = ball.offsetLeft + ball.offsetWidth;

        var t2 = bricke.offsetTop;
        var l2 = bricke.offsetLeft;
        var b2 = bricke.offsetTop + bricke.offsetHeight;
        var r2 = bricke.offsetLeft + bricke.offsetWidth;
      
        //游戏失败 
        if(t1 >= 0 && b1 > container.offsetHeight){
          
              container.innerHTML = "";
              can.failure()
              failspan.innerHTML=`得分:${scores}`;
              failspantow.innerHTML=`时间:${timers}`;
             
              homebtn.onclick = function(){
                  fool = false;
                  moveX = 8;//x轴速度
                  moveY = -11;//y轴速度
                  scores = 0;//得分
                  timers = 0;//时间
                  simple = 3;//简单
                  ordinry = 5;//普通
                  difficult = 7;//困难
                  clearInterval(tims)
                  clearInterval(timersset)
                  failures.style.display = 'none'; 
                  can.innter();
              }
            } 
            if (b1 >= baffil.offsetTop &&
                l1 <= baffil.offsetLeft + baffil.offsetWidth &&
                r1 >= baffil.offsetLeft) {
                moveY = -moveY
            }
        if (t1 >= b2 || l1 >= r2 || b1 <= t2 || r1 <= l2) {

        } else {
            // container.removeChild(bricke);
            bricke.style.display="none";
            // bricke.className='clrea';
            scores += 1;
            score.innerHTML = `得分:${scores}`;

            moveX = (l1 <= r2) ? Math.random() * -7 + 1 : moveX;
            moveX = (r1 >= l2) ? Math.random() * 7 + 1 : -moveX;
            moveY = (t1 <= b2) ? moveY : -moveY;
            moveY = (b1 >= t2) ? -moveY : moveY;
            if(scores == bric.length){
               setTimeout(function(){
                   alert('恭喜你，游戏胜利！')
               },100)
             }
        } 
    } 
};


