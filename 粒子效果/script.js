var cxt = document.getElementById("canvas").getContext('2d');
var canvas = document.getElementById("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

var num = 300;
var data = [];
function int(){
    for(var i = 0 ; i<num;i++){
        data[i]  ={
            x1:Math.random()*window.innerWidth,
            y1:Math.random()*window.innerHeight,
            sx:Math.random()*0.9 - 0.6, //粒子运动的偏移量
            sy:Math.random()*0.9 - 0.6,
        };
        crear(data[i].x1,data[i].y1)
    }
}
int()
function crear(x,y){
    cxt.save();
    cxt.beginPath();
    cxt.fillStyle='greenyellow';
    cxt.arc(x,y,2,0,Math.PI*6,false);
    cxt.closePath();
    cxt.fill();
    cxt.restore();
}

function drawpah(){
    cxt.clearRect(0,0,window.innerWidth,window.innerHeight);//清除之前的圆

    for( var i =0 ; i<num;i++){
        data[i].x1+=data[i].sx;
        data[i].y1+=data[i].sy;

        if(data[i].x1<0 || data[i].x1>window.innerWidth) {data[i].sx=-data[i].sx};
        if(data[i].y1<0 || data[i].y1>window.innerHeight) {data[i].sy=-data[i].sy};

        crear(data[i].x1 , data[i].y1)
        
        for(var j = 0  ;j <num ; j++){
            if(Math.pow(data[i].x1-data[j].x1,2)+Math.pow(data[i].y1-data[j].y1,2) < 100*80){
                create(data[i].x1,data[i].y1,data[j].x1,data[j].y1)
            }
        }
        
        document.onmousemove = function(ev){
            let e = ev || window.ev
            if(e.clientX == data[i].x1 && e.clientY == data[i].y1){
                console.log('0000000')
            }
        }
    }
}
setInterval(function(){drawpah()},1)
function create(x1,y1,x2,y2){
    cxt.save();
    var lin = cxt.createLinearGradient(x1,y1,x2,y2);
    lin.addColorStop(0,'purple');
    lin.addColorStop(1,'blue');
    cxt.strokeStyle = lin;
    cxt.beginPath();
    cxt.moveTo(x1,y1);
    cxt.closePath();
    cxt.lineTo(x2,y2);
    cxt.stroke();
    cxt.restore();
}

class name{
    names = 8;
    width = 800;
    arry = [1,2,3,4,5,6]
    fn(){
        setTimeout(function(){
            console.log(this.width);
        }.bind(this) ,1000)
       
    }
}
let ca = new name();
ca.fn();

class cat extends name{
    cons(){
        console.log(this.width);
      
        console.log(  this.arry.map((index , item) =>{
            console.log(index,item)
        }))
    }
}
let st = new cat();
st.cons();

var obj = {
    a:"hello",
    b:42,
    c: true,
}
console.log(obj.a)