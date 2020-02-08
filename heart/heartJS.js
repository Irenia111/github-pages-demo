var mainObj = document.getElementById("ground");
//获取文本容器
var textObj = document.getElementById("text");
//获取浏览器的高度
var innerWidth = document.body.clientWidth;
var innerHeight = document.body.clientHeight;

//计数器
var number = 0;

/**
 * 持续出心，直到数量为521，位置随机生成
 */
var interval = setInterval(function() {
var heart = document.createElement("div");
var heartattr = document.createAttribute("class");
heartattr.value = "heart";  
      
//把属性class = "heart"添加到div  
heart.setAttributeNode(heartattr);
heart.style.left = Math.floor(Math.random() * innerWidth) + "px";
heart.style.top = Math.floor(Math.random() * innerHeight ) + "px";
mainObj.appendChild(heart);
number++;
textObj.innerHTML = "送你 "+number+" 个爱心，请查收！";
//当心的数量达到521时结束
if(number >= 521){
clearInterval(interval);}
},90);