function $my(id) {
  return document.getElementById(id);
}
function $ey(cls) {
  return document.getElementsByClassName(cls)[0];
}
let data = [];
let timer = 0;
let max ;
let timerser;
let sco = [];
let person;
class innter {
  //动画
  introdback() {
    $my('introd').onclick = () => {
      $ey('conatiner').style.marginTop = '-700px';
      $ey('conatiner').style.transition = 'all 0.9s';
    }
    $my('know').onclick = () => {
      $ey('conatiner').style.marginTop = '0px';
      $ey('conatiner').style.transition = 'all 0.9s';

    }
    $my('play').onclick = () => {
      inter.plname();
      $ey('game_inter').style.transform = 'scale(1)';
      inter.innt();
      inter.keydown();
      inter.musicebac()
    }
  }
  //背景音乐
  musicebac() {
    let num = 0;
    $ey('back').play();
    $ey('imgs').onclick = () => {
      num += 1;
      if (num % 2 != 0) {
        $ey('imgs').src = 'images/nowmusic.png';
        $ey('back').pause()
      } else if (num % 2 == 0) {
        $ey('imgs').src = 'images/music.png';
        $ey('back').play();
      }

    }
  }
  //输入用户名
  plname() {
    person = prompt('请输入你的游戏名！', '游客8005')
    $my('play').blur();
    if (person) {
      $ey('player').innerHTML = `Player:${person}`;
    }
    if (person = undefined || person == null) {
      $ey('player').innerHTML = `Player:游客8005`;
      return false
    }
  }

  innt() {
    data = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
    inter.randonum();
    inter.randonum();
    inter.dataview();
    inter.timers();
  }
  //时间
  timers() {
    timerser = setInterval(function () {
      timer += 1;
      $ey('timer').innerHTML = `时间:${timer}`
    }, 1000)
  }
  //随机数
  randonum() {
    for (; ;) {
      let x = Math.floor(Math.random() * 4)
      let y = Math.floor(Math.random() * 4)
      if (data[x][y] == 0) {
        let num = 2;
        if(max >= 16){
          num = Math.random() >0.5? 2:4;
        }
        data[x][y] = num;
        $ey('number').innerHTML = `最高数字:${num}`;
        break;
      }
    }
  }
  //渲染方块
  dataview() {
    for (let x = 0; x < 4; x++) {
      for (let y = 0; y < 4; y++) {
        let cont = document.getElementById(`c${x}${y}`)
        if (data[x][y] != 0) {
          cont.innerHTML = data[x][y];
          cont.style.transition = 'all 0.4s';
          cont.className = 'ex n' + data[x][y];
        } else {
          cont.innerHTML = "";
          cont.className = 'ex';
        }
      }
    }
  }

  //游戏结束
  overcont() {
    $ey('backlose').play();
    $my('restart').style.display = 'none';
    clearInterval(timerser)
    $ey('gametim').innerHTML = `游戏时间:${timer}s`;
    $ey('gamescore').innerHTML = `最高数字:${max}`;
    $ey('gameover').style.top = 200 + 'px';
    $ey('bottons').onclick = function () {
      $my('restart').style.display = 'block';
      $ey('gameover').style.top = -300 + 'px';
      inter.innt();
      timer = 0;
      max = 0
    }
  }
  //得分
  score() {
    let array = [].concat(...data);
    max = Math.max.apply(null, array)
    sco.push(max);
    //合成了更高的数据
    if(sco[sco.length-1] != sco[sco.length-2]){
      $ey('backmusi').play();
    }
    $ey('number').innerHTML = `最高数字:${max}`;
  }

  //左移动
  moverleft() {
    let before = String(data);
    for (let r = 0; r < 4; r++) {
      inter.moveLeftrow(r);
    }
    let after = String(data);

    if (before != after) {
      inter.randonum();
      inter.dataview();
      if (inter.gameover()) {
        inter.overcont()
      }
      inter.score();
      inter.gamewin()
    }
  }
  moveLeftrow(r) {
    for (let c = 0; c < 3; c++) {
      let nextc = inter.moveleftnext(r, c);
      if (nextc != -1) {
        if (data[r][c] == 0) {
          data[r][c] = data[r][nextc];
          data[r][nextc] = 0;
          c--;
        } else if (data[r][c] == data[r][nextc]) {
          data[r][c] *= 2;
          data[r][nextc] = 0;
        }
      } else {
        break;
      }
    }
  }
  moveleftnext(r, c) {
    for (let i = c + 1; i < 4; i++) {
      if (data[r][i] != 0) {
        return i;
      }
    }
    return -1;
  }
  // 右移动
  moverright() {
    let before = String(data); 1
    for (let r = 0; r < 4; r++) {
      inter.moverightrow(r);
    }
    let after = String(data);

    if (before != after) {
      inter.randonum();
      inter.dataview();
      if (inter.gameover()) {
        inter.overcont()
      }
      inter.score();
      inter.gamewin()
    }
  }
  moverightrow(r) {
    for (let c = 3; c > 0; c--) {
      let nextc = inter.moverightnext(r, c);
      if (nextc != -1) {
        if (data[r][c] == 0) {
          data[r][c] = data[r][nextc];
          data[r][nextc] = 0;
          c++;
        } else if (data[r][c] == data[r][nextc]) {
          data[r][c] *= 2;
          data[r][nextc] = 0;
        }
      } else {
        break;
      }
    }
  }
  moverightnext(r, c) {
    for (let i = c - 1; i >= 0; i--) {
      if (data[r][i] != 0) {
        return i;
      }
    }
    return -1;
  }
  //向上移动
  moverup() {
    let before = String(data);
    for (var c = 0; c < 4; c++) {
      inter.moveupinrow(c);
    }
    let after = String(data);

    if (before != after) {
      inter.randonum();
      inter.dataview();
      if (inter.gameover()) {
        inter.overcont()
      }
      inter.score();
      inter.gamewin()
    }
  }
  moveupinrow(c) {
    for (let r = 0; r < 4; r++) {
      let nextr = inter.moveupnext(r, c);
      if (nextr != -1) {
        if (data[r][c] == 0) {
          data[r][c] = data[nextr][c];
          data[nextr][c] = 0;
          r--;
        } else if (data[r][c] == data[nextr][c]) {
          data[r][c] *= 2;
          data[nextr][c] = 0;
        }
      } else {
        break;
      }
    }
  }
  moveupnext(r, c) {
    for (let i = r + 1; i < 4; i++) {
      if (data[i][c] != 0) {
        return i;
      }
    }
    return -1
  }


  //向下移动
  moverdown() {
    let before = String(data);
    for (var c = 0; c < 4; c++) {
      inter.movedowninrow(c);
    }
    let after = String(data);

    if (before != after) {
      inter.randonum();
      inter.dataview();
      if (inter.gameover()) {
        inter.overcont()
      }
      inter.score();
      inter.gamewin()
    }
  }
  movedowninrow(c) {
    for (let r = 3; r < 4; r--) {
      let nextr = inter.movedownnext(r, c);
      if (nextr != -1) {
        if (data[r][c] == 0) {
          data[r][c] = data[nextr][c];
          data[nextr][c] = 0;
          r++;
        } else if (data[r][c] == data[nextr][c]) {
          data[r][c] *= 2;
          data[nextr][c] = 0;
        }
      } else {
        break;
      }
    }
  }
  movedownnext(r, c) {
    for (let i = r - 1; i >= 0; i--) {
      if (data[i][c] != 0) {
        return i;
      }
    }
    return -1
  }


  keydown() {
    document.onkeydown = function (ev) {
      switch (ev.keyCode) {
        case 37: inter.moverleft();
          break;
        case 39: inter.moverright();
          break;
        case 38: inter.moverup();
          break;
        case 40: inter.moverdown();
          break;
      }
    }
    $my('restart').onclick = function () {
      clearInterval(timerser);
      inter.innt();
      timer = 0;
      max = 0
    }
  }
//游戏结束判断
  gameover() {
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        if(data[r][c] == 0 ){
            return false
        }else if(r < 3 ){
          if(data[r][c] == data[r+1][c] && data[r][c] == data[r--][c]){
            return false
          }
        }else if(c < 3){
          if(data[r][c] == data[r][c+1] && data[r][c] == data[r][c--]){
            return false
          }
        }else{
          return true;
        }
      }
    }
  }

  gamewin(){
    if(max == 2048){
      $ey('backwins').play();
      $ey('gamewin').style.top = 200 + 'px';
      $ey('users').innerHTML = `用户名:${this.person}`;
      document.getElementsByClassName('bottons')[1].onclick = function(){
      $ey('gamewin').style.top = -300 + 'px';
      clearInterval(timerser);
      inter.innt();
      timer = 0;
      max = 0
      }
    }
  }
}
var inter = new innter();
inter.introdback();





