var canatiner = document.getElementsByClassName('canatiner')[0];
function $my(clas) {
  return document.getElementsByClassName(clas)[0];
}

var dricet;
var sankes = [['images/herder.png', null, 128, 320], ['images/body.png', null, 96, 320], ['images/body.png', null, 64, 320]];
var timer = 0
var lengths = 6;
var user;
var remaining = 60;
var numerl;
var numert;
var sbu = 0;
var map = function () {};
var can = new map();

map.prototype.innter = function () {
  function innt(){
    user= prompt('游戏用户名');
    if(user == ""){;
      user = "游客8005";
    }
    $my('endless').style.display = 'none';
      $my('limited').style.display = 'none';
      $my('introd').style.display = 'none';
      $my('logo').style.display = 'none';
      $my('avtar').style.display = 'block';
      can.sanke()//生成蛇
      can.createfood();//生成食物
   
      tim=setInterval(can.sanke_move, 100)//蛇运动
      can.conten();//游戏数据
      setTimeout(can.timout,10)
  };
    $my('endless').onclick = function() {
      sbu+=1;
      innt()
    timscor= setInterval(can.timers,1000)//时间
    }
    $my('limited').onclick = function() {
      sbu+=1
      innt()
      time.innerHTML = `剩余时间:${remaining}s`
     timscores=setInterval(can.timerser,1000)//剩余时间
    }
}
can.innter()

map.prototype.timers = function(){
    timer +=1;
    time.innerHTML = `时间:${timer}s`;
   
}

map.prototype.timerser = function(){
  remaining --
  time.innerHTML = `剩余时间:${remaining}s`;
  if(remaining == 0){
    alert(`游戏结束，你的长度为:${lengths}m.`);
    window.location.reload();
  }

}

map.prototype.sanke = function () {
  for (var i = 0; i < sankes.length; i++) {
    if (sankes[i][1] == null) {
      sankes[i][1] = document.createElement('div');
      canatiner.appendChild(sankes[i][1]);
      sankes[i][1].className = 'header';
      sankes[0][1].style.zIndex = 98;
      sankes[i][1].style.background = 'url(' + sankes[i][0] + ')';
      sankes[i][1].style.backgroundSize = '100%';
      sankes[i][1].style.transform = 'rotate(90deg)';
    }
    sankes[i][1].style.left = sankes[i][2] + 'px';
    sankes[i][1].style.top = sankes[i][3] + 'px';
  }
}


map.prototype.createfood = function () {
  this.width = 32 + 'px';
  this.height = this.width;
  food = document.createElement('div');
  canatiner.appendChild(food);
  food.style.width = this.width;
  food.style.height = this.height;
  food.style.background = '#cc38df';
  food.className = 'food';
  numerl = 32 * ~~(Math.random() * 25);
  numert = 32 * ~~(Math.random() * 25); 
  food.style.top = numert + 'px';
  food.style.left = numerl + 'px';
 for(var x = 0 ; x<sankes. length; x++){
  if(sankes[x][2] == numerl && sankes[x][3] ==numert){
    numerl = numerl;
    numert = numert; 
  }
 }
}

map.prototype.sanke_move = function () {
  for (var s = sankes.length - 1; s > 0; s--) {
    sankes[s][2] = sankes[s - 1][2];
    sankes[s][3] = sankes[s - 1][3];
  }

  switch (dricet) {
    case "right": sankes[0][1].style.left = sankes[0][2] += 32;
      sankes[0][1].style.transform = 'rotate(90deg)';
      can.sanke();
      can.timout();
      break;
    case "left": sankes[0][1].style.left = sankes[0][2] -= 32;
      sankes[0][1].style.transform = 'rotate(270deg)';
      can.sanke();
      can.timout();
      break;
    case "up": sankes[0][1].style.top = sankes[0][3] -= 32;
      sankes[0][1].style.transform = 'rotate(0deg)';
      can.sanke();
      can.timout();
      break;
    case "down": sankes[0][1].style.top = sankes[0][3] += 32;
      sankes[0][1].style.transform = 'rotate(180deg)';
      can.sanke();
      can.timout();
      break;
  }
  document.onkeydown = function (ev) {
    if (ev.keyCode == 37 && dricet != "right") { dricet = "left" };
    if (ev.keyCode == 38 && dricet != "down") { dricet = "up" };
    if (ev.keyCode == 39 && dricet != "left") { dricet = "right" };
    if (ev.keyCode == 40 && dricet != "up") { dricet = "down" };
  }
  if (numerl == sankes[0][2] && numert == sankes[0][3]) {
    canatiner.removeChild(food);
    lengths += 2;
    length.innerHTML = `长度:${lengths}m`
    sankes.push(['images/body.png', null, 0, 0]);
    can.createfood();
  }
  if (sankes[0][2] > 768 || sankes[0][2] < 0 || sankes[0][3] > 768 || sankes[0][3] < 0) {
    alert(`游戏结束，你的游戏时间时:${timer}s. 长度为:${lengths}m.`);
    // canatiner.innerHTML="";
    window.location.reload();
    clearInterval(tim)
    
  }
  
}
  
map.prototype.conten = function () {
  contents = document.createElement('div');
  canatiner.appendChild(contents);
  contents.className = 'contents';
  contents.innerHTML = user;
  gamedata = document.createElement('div');
  canatiner.appendChild(gamedata);
  gamedata.className = 'gamedata';
  time = document.createElement('strong');
  gamedata.appendChild(time);
  time.className = 'time';
  time.innerHTML = `时间:0s`;
  length = document.createElement('strong');
  gamedata.appendChild(length);
  length.innerHTML = `长度:6m`;
  length.className = 'length';
}

map.prototype.timeout = function(){
  contes = document.createElement('div');
  canatiner.appendChild(contes);
  contes.className = 'contes';
  carry = document.createElement('div');
  contes.appendChild(carry);
  carry.className='carry'; 
  carry.innerHTML='继续游戏';
  renew = document.createElement('div');
  contes.appendChild(renew);
  renew.className='carry'; 
  renew.innerHTML='重新开始';
  home = document.createElement('div');
  contes.appendChild(home);
  home.className='carry'; 
  home.innerHTML='返回主页';
}
can.timeout();


map.prototype.timout = function(){
    document.onclick = function(){      
      document.onclick=null;
      contes.style.display='block';
      clearInterval(timscor);
      clearInterval(tim);
      clearInterval(timscores);
      console.log(carry)
   
    }
    carry.onclick = function(){
      document.onclick = null;
      canatiner.removeChild(contes);
      timscor =setInterval(can.timers,1000);
     tim=setInterval(can.sanke_move, 100);
     timscores=setInterval(can.timerser,1000)
      can.timeout();
    }
    home.onclick = function(){
      window.location.reload();
    }
}


  

