$('.homepage>h2').animate({top:200},400,function(){
    $('.homebtns').animate({bottom:100},400);
})
for(let i = 0; i < $('.button').length;i++){
    $('.button')[i].onmousedown = function(){
        $(this).css('box-shadow',' 0 0px 20px 2px black inset')
    }
    $('.button')[i].onmouseup = function(){
        $(this).css('box-shadow','none')
    }
}

$('.start ').click(()=>{
    $('.homepage').css('display','none')
    $('.diffictlypage').animate({left:0},400)
})
$('.diffreturn').click(()=>{
    $('.diffictlypage').animate({left:'-100%'},400,function(){
        $('.homepage').css('display','block');
    });
})
let inforsta = false;
$('.infor').click(()=>{
    inforsta = !inforsta
    if(inforsta) $('.rulepage').animate({left:0},400);
    if(!inforsta)$('.rulepage').animate({left:-500},400);
})
$('.ranking').click(()=>{
  $('.rankingpege').animate({right:0},400);
  let ranking = new Ranking();
  ranking.getajax();
})
$('.rankingreturn').click(()=>{
    $('.rankingpege').animate({right:'-100%'},400)
})
let toll1,difficluy,energys;
$('.easy').click(()=>{
    fun();
    toll1 = 3;
    energys = 5;
    difficluy = 'easy';
})
$('.normal ').click(()=>{
    fun();
    toll1 = 2;
    energys = 3;
    difficluy = 'normal';
})
$('.hard').click(()=>{
    fun();
    toll1 = 1;
    energys = 2;
    difficluy = 'hard';
})
function fun(){
    $('.diffictlypage').animate({left:'-100%'},400,function(){
        $('.usernamepage').animate({top:0},400)
    })
}
let musta = true;
$('.button').click(()=>{
    if(!musta)return;
    $('body').append(`<audio src="./music/button.mp3" autoplay></audio>`);
})
let name ;
$('.confirem').click(()=>{
    let names =  $('.username')[0].value.trim();
    if(names.length > 0 && names != ""){
        name = names;
        $('.usernamepage').animate({top:'-100%'},400)
        $('.gamepage').css( 'transform','scale(1)')
        let game = new Game(toll1,difficluy,energys);
    }
})