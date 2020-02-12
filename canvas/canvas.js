
let canvas = document.getElementById('canvas');
canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight
let ctx = canvas.getContext('2d');

let last = [];//记录上一次鼠标的坐标
let lasttouch = [];//记录上一次触摸坐标

let clear = document.getElementById("clear");
let saveImg = document.getElementById("save");

ctx.fillStyle = "black";
ctx.strokeStyle = "none";
if (isPC()) //检测设备是否为pc
{console.log("is PC")
//设置追踪鼠标下落的标志：paintStart，且默认值为false
let paintStart = false;
    canvas.onmousedown = (e) => {
    console.log("mousedown");
    paintStart = true;
    last = [e.clientX, e.clientY];
}

canvas.onmousemove = (e) => {
    if (paintStart === true) {
    /* 
    这段代码是以点带线的画线
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, 10, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    */
  
     drawline( last[0], last[1], e.clientX, e.clientY);
     last = [e.clientX, e.clientY];
    //当鼠标起来的时候，停止绘制
        canvas.onmouseup = () => {
        console.log("mouseup");
        paintStart = false;
        }
    } else {
        console.log('什么都不做')
        }
    }
} else {
console.log("not PC")
//移动触屏设备需要监听触摸动作
canvas.ontouchstart = (e) =>
{
    lasttouch = [e.touches[0].clientX, e.touches[0].clientY];
}
canvas.ontouchmove = (e) =>{
    //console.log(e);
    //console.log(lasttouch);
    drawline( lasttouch[0], lasttouch[1], e.touches[0].clientX, e.touches[0].clientY);
    lasttouch = [e.touches[0].clientX, e.touches[0].clientY];

}
}
clear.onclick = () => {
    console.log("click");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //清空画板
}

saveImg.onclick = () => {
    console.log("click");
    save();
    //保存图片
}

function save() {
    let a = document.getElementById("download");
    if (!a) {
        a = document.createElement("a");
        a.download = "canvas.png";
        a.hidden = "hidden";
    }
    a.href = canvas.toDataURL('image/png');
    a.click();
}
function drawline( x0, y0, x1, y1) {
    ctx.beginPath();
    ctx.moveTo(x0, y0 );
    ctx.lineTo(x1, y1);

 
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
}
// 判断pc端还是移动端
//也可以使用 var isTouchDevice = "onTouchStart" in document.documentElement;
function isPC() {

    let userAgentInfo = navigator.userAgent;
    let Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    let flag = true;

    for (let i = 0; i < Agents.length; i++) {

        if (userAgentInfo.indexOf(Agents[i]) > 0) {
            flag = false;
            break;
        }

    }

    return flag;

}
/*
保存涂鸦
涂鸦完之后我们我们可以把Canvas保存成图片，使用Canvas提供的toDataURL()方法。

    $("#save").click(function(){
        $("img").remove();

        var img = new Image();
        img.src = canvas[0].toDataURL("image/jpeg", 1);

        $("body").append(img);
    });
这里添加了一个叫save的按钮，然后使用了toDataURL()方法把Canvas保存为base64数据，然后弄个Image显示出来。

toDataURL方法默认是保存为png格式，这里使用的是保存为jpeg格式，质量设置为1，质量参数为0~1，越高质量越好，但是也越大。  

事实上这里就这样保存jpeg格式的话是会有问题的，会发现底色是黑色的。原因是jpeg的接口本身不是很完善，当canvas没有填充颜色或者图片的时候，保存的jpeg由于是直接由png的alpha通道强制转换过来，所以在png的透明部分就会变成黑色。

解决方法倒也简单就是一开始画之前给Canvas填个白色底。

    ctx.fillStyle = '#fff';     
    ctx.fillRect(0,0,winWidth,winHeight);
当然也可以使用JPEGencoder来把png转成jpeg。
*/