var box = document.getElementsByClassName('interface')[0];
var playe = document.getElementById('player');
var play = document.getElementById('play');
var conten = document.getElementById('startpage')
var con = document.getElementById('pyewe')
var timer = document.getElementsByClassName("timer")[0];
var score = document.getElementsByClassName("score")[0];
var puase = document.getElementsByClassName("puase")[0];
var carry = document.getElementById('carry');
var renew = document.getElementById('renew');
var home = document.getElementById('home');
var introd = document.getElementById('introd');
var btn = document.getElementsByClassName('btn')[0];
var Introduction = document.getElementsByClassName('Introduction')[0];
var end = document.getElementsByClassName('end')[0];
var scre = document.getElementById("scre");
var tim = document.getElementById('tim')
var homet = document.getElementsByClassName('homet')[0];
var imageone = document.getElementById("images-one");
var imagetow = document.getElementById("images-tow");
var num = 0 ;//分数
var numert = 0;//时间
console.log(imageone.offsetTop)
setInterval(function(){back()},50)
function back(){
    imageone.style.top  =imageone.offsetTop +3+'px';
    imagetow.style.top = imagetow.offsetTop +3+'px';
    if(imageone.offsetTop >= 568){
        imageone.style.top = -566+'px';
      }
      if(imagetow.offsetTop >= 568){
        imagetow.style.top = -566+'px';
      }
}


//规则框
    introd.onclick = function(){
            Introduction.style.display = 'block';
        }
    btn.onclick = function(){
            Introduction.style.display = 'none';
        }   
//点击开始游戏             
    play.onclick = function () {
            conten.style.display = 'none';
            playe.style.display = 'block';
            timer.style.display = "block";
            score.style.display = "block";
           
            innter()
            clearInterval(tim)
            numert += 1
            var tim = setInterval(function () {
             
            timer.innerHTML = numert++;
        }, 1000)
           
    }
  
function innter() {
   
   

      //飞机移动
        clay()
      function clay(){
        document.onmousemove = function (ev) {
            var event = ev || window.ev;
            playe.style.left = event.clientX - box.offsetLeft-10+"px";
            playe.style.top = event.clientY - box.offsetTop-10 +"px";

            if (playe.offsetLeft <= 0) {
                playe.style.left = 0;
            }
            if (playe.offsetLeft + playe.offsetWidth >= 320) {
                playe.style.left = 320 - playe.offsetWidth + 'px';
            }
            if (playe.offsetTop <= 0) {
                playe.style.top = 0;
            }
            if (playe.offsetTop + playe.offsetHeight >= 568) {
                playe.style.top = 568 - playe.offsetHeight + 'px';
            }

        }
    }
        //发射子弹
        clearInterval(timer)
    var  timer = setInterval(function () { emiss() }, 180)
        function emiss() {
            var bulltop = playe.offsetTop - 10 + "px";
            var bullleft = playe.offsetLeft + 31 + "px";
            var bullet = document.createElement('div');
            bullet.className = "bullet";
            box.appendChild(bullet);
            bullet.style.top = bulltop;
            bullet.style.left = bullleft;
            window.clearInterval(aircrat)
        var aircrat = setInterval(function () {
                bullet.style.top = bullet.offsetTop + -2 + "px";
                if (bullet.offsetTop < -30) {
                    box.removeChild(bullet)
                }
                ;
            }, 2);
        }
        //随机生成敌机
    clearInterval(timero)
 var  timero=setInterval(function () { enrmy() }, 1000)
        function enrmy() {
            var num = Math.round(Math.random() * 2);
            var data = [
                { ide: "enemy1" },
                { ide: "enemy2" },
                { ide: "enemy3" }
            ];
            var emy = document.createElement('div');
            con.appendChild(emy)
            var numer = Math.random() * 230;
            emy.style.left = numer + "px";
          window.clearInterval(timeyw)
         var timeyw= setInterval(function () {
                emy.style.top = emy.offsetTop + 1 + 'px';
                if (emy.offsetTop > 560) {
                    con.removeChild(emy)
                }
            }, 8)
            emy.className = "yema";
            for (var i = 0; i < data.length; i++) {
                emy.className = data[num].ide;

            }
        }
        //暂停操作
        prace()
        function prace(){
            playe.onclick  =function(){  
                puase.style.display = "block";
                clearInterval(timer)
                clearInterval(timero)
                clearInterval(colll)
                con.style.display = "none";
                document.onmousemove = false;
                carry.onclick = function(){
                    puase.style.display= "none";
                    con.style.display = "block";
                    innter()
                    clay()
                }
                renew.onclick =function(){
                    puase.style.display= "none";
                    con.style.display = "block";
                    num = 0;;
                    numert = 0;
                    innter()
                }
                home.onclick = function(){
                    window.location.reload();
                }
            } 
        }
        //碰撞检测
        clearInterval(colll)
        var colll= setInterval(function(){ collis()},160)
        function collis() {
            var bulle = document.getElementsByClassName("bullet");
            var yewae = con.querySelectorAll('div')
           
            for (var j = 0; j < yewae.length; j++) {
                var yew = yewae[j]
                for (var i = 0; i < bulle.length; i++) {
                    var t1 = playe.offsetTop;
                    var l1 = playe.offsetLeft;
                    var r1 = playe.offsetLeft + playe.offsetWidth;
                    var b1 = playe.offsetTop + playe.offsetHeight;
        
                    var t2 = yew.offsetTop;
                    var l2 = yew.offsetLeft;
                    var r2 = yew.offsetLeft + yew.offsetWidth;
                    var b2 = yew.offsetTop + yew.offsetHeight;
                    var bul = bulle[i]
                    //判断子弹是否射中敌机
                    if (bul.offsetTop < b2 && bul.offsetTop <t2 && bul.offsetLeft <= r2 && bul.offsetLeft >= l2) {
                        num +=1;
                        score.innerHTML = "得分:"+num;  
                        yew.style.display = 'none';
                        bul.style.display = 'none';
                    }
                   
                    if (b1 <= t2 || l1 >= r2 || t1 >= b2 || r1 <= l2) {
                        //没碰到
                    }else {
                        end.style.display='block';
                        playe.style.display = 'none';
                        con.style.display = 'none';
                        clearInterval(colll)
                        scre.innerHTML ="得分:"+num;
                        tim.innerHTML = "时间:"+numert;
                        homet.onclick = function(){
                            window.location.reload();
                    }
                }
            }
        }

    }
}


