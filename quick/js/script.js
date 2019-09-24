function $my(clas) {
    return document.getElementsByClassName(clas)[0];
}
navherder();
function navherder() {
    window.onscroll = function (ev) {
        let a = document.documentElement.scrollTop
        $my('navbar-header').style.background = 'black';
        $my('navbar-header').style.opacity = '0.7';
        $my('content').style.paddingTop = 10 + 'px';
        $my('content').style.paddingBottom = 10 + 'px';
        if (a == 0) {
            $my('navbar-header').style.background = 'none';
            $my('navbar-header').style.opacity = '1';
            $my('content').style.paddingTop = 20 + 'px';
            $my('content').style.paddingBottom = 20 + 'px';
        }

    }
}

let clorheight = window.screen.availHeight;
$my('home-banner').style.height = clorheight + 'px';


let list = document.getElementsByClassName('page');
let ope = $my('caronter').clientWidth/2
Carousel()
function Carousel(){
    for(let i = 0; i < list.length; i++){
        list[i].onclick = function(){
            for(let j = 0; j < list.length; j++){
                list[j].className = 'page';
            }
            list[i].className = 'page clexa'
            $my('caronter').style.left = -i * ope+'px';
        }
    }
    let ind = 0 ; 
    setInterval(function(){
      ind++
      if(ind == 2){
        ind = 0;
      }
      $my('caronter').style.left = -ind * ope+'px';
      for(let j = 0; j < list.length; j++){
        list[j].className = 'page';
    }
      list[ind].className = 'page clexa'
    },5000)
}