let html = document.querySelector(".html");
let style = document.querySelector(".style");

let str1=`/*今天，我们当一回社会人，画一个小猪佩奇
  *现在，我们需要先给小猪佩奇一个背景
  **/
 .pig_background {
    position: fixed;
	width: 60%; height: 650px; top: 0; left: 10px;
    margin: 0px auto; background: rgb(36,185,15);
    background: linear-gradient(0deg, rgba(36,185,15,1) 0%, rgba(36,185,15,1) 40%, rgba(163,219,241,1) 40%, rgba(163,219,241,1) 100%);
}
/*再来一朵云彩*/
.cloud{ 
    top:80px; left:420px; width: 100px; height: 100px; 
    border-radius: 50%; background-color: #fff; 
    box-shadow: #fff 120px -30px 0 -5px,#fff 50px -50px, #fff 60px 10px,#fff 120px 30px 0 -10px,#fff 160px 5px 0 -5px; 
}
/*好了，一切准备就绪，我们可以开始召唤小猪佩奇啦
*先是小猪佩奇的头
*头主要有三个部分组成
**/
.pig_head {
	width: 300px; height: 200px; top: 100px; left: 100px;
    border-radius: 95% 50% 50% 50%/ 87% 80% 68% 50%;
    border: 6px solid #ef96c2; background-color: #ffb3da;
    transform: rotate(30deg); z-index: 100;
    box-sizing: border-box;
}
/*好像有点大，我们需要遮住多余的部分*/
.pig_head_white_left_bottom {
    width: 200px; height: 154px; bottom: -7px; left: -15px;
    border-radius: 0% 15% 0% 15% ;
    background-color:rgb(163, 219, 241);
    box-sizing: border-box;
}

/*鼻子和下巴被遮住了，我们把它补回来*/
.pig_head_white_left_top {
    width: 200px; height: 66px; bottom: 84px; top: 166px; left: 134px;
    background-color: #ffb3da;
    box-sizing: border-box;
    transform: rotate(34deg); z-index: 103;
}
.pig_jaw {
	width: 97px; height: 104px; top: 249px; left: 141px;
    border-radius: 0% 0% 0% 76%/ 0% 0% 0% 74%;
    border: 6px solid #ef96c2;
    background-color: #ffb3da;
    transform: rotate(22deg);
    z-index: 100; box-sizing: border-box;
    border-top-color: #ffb3da;
    border-right-color: #ffb3da;
}
.pig_jaw_right {
	width: 13px; height: 6px; top: 373px; left: 186px;
    background-color: #ef96c2;
    transform: rotate(19deg);
    z-index: 100;
}
.pig_nose_bottom {
	width: 88px; height: 13px; top: 209px; left: 84px;
    border-radius: 50% 50% 50% 50%/ 0% 0% 100% 100%;
    border: 6px solid #ef96c2;
    background-color: #ffb3da;
    transform: rotate(35deg);
    z-index: 102;
    box-sizing: border-box;
    border-top-color: #ffb3da;
}
/*佩奇的面部完成啦，现在是可爱的红晕*/
.face {
	width: 49px; height: 59px; top: 243px; left: 269px;
    border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;
    background-color: #ff96ce;
    transform: rotate(26deg);
    z-index: 104;
}
/*依次填上五官*/
.left_eye, .right_eye, .mouth {
    z-index: 104;
}
.left_eye_bg {
	width: 29px; height: 29px; top: 177px; left: 170px;
    border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;
    border: 6px solid #fff;
    background-color: #fff;
    z-index: 101;
    box-sizing: border-box;
}
.left_eye_ball {
	width: 10px; height: 10px; top: 181px; left: 171px;
    border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;
    border: 6px solid #000;
    background-color: #000;
    z-index: 101;
    box-sizing: border-box;
}
.left_eye_border {
	width: 34px;height: 34px;top: 174px;left: 166px;
    border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;
    border: 6px solid #ef96c2;
    background-color: transparent;
    z-index: 101;
    box-sizing: border-box;
}
.right_eye_bg {
	width: 28px; height: 28px; top: 194px; left: 205px;
    border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;
    border: 6px solid #fff;
    background-color: #fff;
    z-index: 101;
    box-sizing: border-box;
}
.right_eye_ball {
	width: 10px; height: 10px; top: 199px; left: 208px;
    border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;
    border: 6px solid #000;
    background-color: #000;
    z-index: 101;
    box-sizing: border-box;
}
.right_eye_border {
	width: 35px; height: 37px; top: 191px; left: 202px;
    border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;
    border: 6px solid #ef96c2;
    background-color: transparent;
    z-index: 101;
    box-sizing: border-box;
}
.mouth_bottom {
	width: 97px; height: 45px; top: 273px; left: 154px;
    border-radius: 50% 50% 50% 50%/ 0% 0% 100% 100%;
    border: 6px solid #d44b81;
    background-color: #000;
    z-index: 101;
    box-sizing: border-box;
    transform: rotate(19deg);
}
.mouth_middle {
	width: 98px; height: 27px; top: 272px; left: 154px;
    border-radius: 0% 0% 50% 50%/ 0% 0% 100% 100%;
    border: 6px solid #d44b81;
    background-color: #ffb3da;
    z-index: 101;
    box-sizing: border-box;
    transform: rotate(19deg);
    border-top-color: #ffb3da;
}
.mouth_top {
    width: 135px; height: 66px; top: 231px; left: 149px;
    border-radius: 50% 50% 50% 50%/ 0% 0% 100% 100%;
    background-color: #ffb3da;
    z-index: 101;
    transform: rotate(13deg);
}
.nose_kong_left {
	width: 12px; height: 12px; top: 179px; left: 93px;
    border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;
    background-color: #da6c9b;
    z-index: 104;
}
.nose_kong_right {
	width: 12px; height: 12px; top: 182px; left: 109px;
    border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;
    background-color: #da6c9b;
    z-index: 104;
}
.ear_left {
    width: 24px; height: 52px; top: 126px; left: 226px;
    border: 6px solid #ef96c2;
    border-radius: 50% 50% 50% 50%/ 35% 40% 50% 50%;
    background-color: #ffb3da;
    z-index: 99;
    transform: rotate(18deg);
}
.ear_right {
    width: 24px; height: 52px; top: 150px; left: 280px;
    border: 6px solid #ef96c2;
    border-radius: 50% 50% 50% 50%/ 35% 40% 50% 50%;
    background-color: #ffb3da;
    z-index: 99;
    transform: rotate(36deg);
}
/*现在是身体和四肢*/
.pig_body_bottom {
	width: 215px; height: 197px; top: 305px; left: 108px; border: 6px solid #e33b32;
    border-radius: 50% 50% 50% 50%/ 100% 100% 0% 0%;
    background-color: #eb5b50;
    z-index: 99;
}
.hand_left_middle {
	width: 78px; height: 12px; top: 432px; left: 63px;
    border-radius: 100% 100% 100% 17%/ 100% 90% 16% 90%;
    background-color: #ffbadf;
    z-index: 99;
    transform: rotate(-35deg);
}
.hand_left_top {
	width: 28px; height: 9px; top: 415px; left: 63px;
    border-radius: 100% 100% 100% 35%/ 100% 90% 16% 90%;
    background-color: #ffbadf;
    z-index: 99;
}
.hand_left_bottom {
    width: 20px; height: 9px; top: 420px; left: 93px;
    border-radius: 60% 59% 65% 90%/ 100% 90% 89% 90%;
    background-color: #ffbadf;
    z-index: 99;
    transform: rotate(98deg);
}
.hand_right_middle {
    width: 79px; height: 11px; top: 374px; left: 309px;
    border-radius: 100% 100% 15% 17%/ 99% 92% 90% 90%;
    background-color: #ffbadf;
    z-index: 99;
    transform: rotate(28deg);
}
.hand_right_top {
	width: 28px; height: 10px; top: 397px; left: 350px;
    border-radius: 100% 100% 15% 17%/ 99% 92% 90% 90%;
    background-color: #ffbadf;
    z-index: 99;
    transform: rotate(-7deg);
}
.hand_right_bottom {
	width: 28px; height: 11px; top: 395px;left: 356px;
    border-radius: 100% 100% 62% 17%/ 99% 92% 90% 90%;
    background-color: #ffbadf;
    z-index: 99;
    transform: rotate(69deg);
}
.left_foot {
    width: 11px; height: 52px; top: 507px;left: 175px;
    border-radius: 100% 100% 100% 100%/ 50% 50% 21% 20%;
    background-color: #ffbadf;
    z-index: 99;
}
.right_foot {
    left: 268px;
}
/*穿上鞋子*/
.left_shoes {
    width: 51px; height: 14px; top: 553px; left: 138px;
    border-radius: 58% 187% 180% 50%/ 130% 123% 113% 100%;
    background-color: #000;
    z-index: 99;
    transform: rotate(0deg);
}
.right_shoes {
    left: 230px;
}
.pig_shadow {
    width: 240px; height: 47px; top: 540px; left: 101px;
    border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;
    background-color: rgb(66, 57, 57,0.6);
    transform: rotate(-1deg);
}
/*最后加上尾巴*/
.tail_left {
	width: 19px; height: 8px; top: 472px; left: 330px;
    border-radius: 50% 50% 50% 50%/ 0% 0% 100% 100%;
    transform: rotate(-9deg);
    background-color: #ffbadf;
    z-index: 99;
}
.tail_left_blank {
	width: 30px; height: 15px; top: 466px; left: 332px;
    border-radius: 50% 50% 50% 50%/ 0% 0% 100% 100%;
    transform: rotate(-36deg);
    background-color:rgba(36,185,15,1);
    z-index: 99;
}
.tail_right {
	width: 21px; height: 5px; top: 451px; left: 343px;
    border-radius: 0% 0% 51% 50%/ 0% 0% 100% 100%;
    transform: rotate(31deg);
    background-color:rgba(36,185,15,1);
    z-index: 99;
    border: 8px solid #ffbadf;
    border-top-color: rgba(36,185,15,1);
}
.tail_blank {
	width: 36px; height: 21px; top: 437px; left: 351px;
    transform: rotate(34deg);
    background-color: rgba(36,185,15,1);
    z-index: 99;
}
.tail_middle {
	width: 7px; height: 11px; top: 450px; left: 336px;
    border: 8px solid #ffbadf;
    border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;
    background-color:rgba(36,185,15,1);
    z-index: 99;
}
.tail_circle {
	width: 17px; height: 8px; top: 475px; left: 358px;
    border-radius: 36% 37% 62% 63%/ 99% 92% 90% 90%;
    background-color: #ffbadf;
    z-index: 99;
    transform: rotate(-40deg);
}
/* ✿✿ヽ(°▽°)ノ✿ 完成~~ */`;
let str2 = "";
let n = 0;

let animation = ()=>{
    setTimeout(() => {
        if( str1[n] === "\n"){
            str2 += "<br>";
        }
        else if( str1[n] === " "){
            str2 += "&nbsp";
        }
        else{
            str2 += str1[n];
        }
        html.innerHTML = str2;
        style.innerHTML = str1.substring(0,n);
        window.scrollTo(0, 99999);
        if (n < str1.length - 1){
            n++;
            animation(); 
        }
    },0);
}
animation(); 