window.onload=function(){
// const oSimg = document.querySelectorAll("#small");
// const oBimg = document.querySelectorAll("#big");
// const oBox = document.querySelectorAll(".banner li");
// let iNow = 1;
// for(let i = 0;i < oBox.length; i++){
//   oBox[i].index = i;
//   oBox[i].onclick = function(){
//     iNow = this.index + 1
//     tab();
//   }
// }
// function tab(){
//   for(let i = 0;i < oBox.length; i++){
//     oBox[i].className = "";
//   }
//   oBox[iNow - 1].className = "active";
//   StartMove(oSimg,{top:-1200 * iNow},function(){

//   })
// }

$(function(){
    $("#small").mouseenter(function(){
      $("#mark").add("#big").show();
    }).mouseleave(function(){
      $("#mark").add("#big").hide();
    }).mousemove(function(ev){
        var l = ev.clientX - $(this).offset().left - 100;
        l = Math.max(l, 0);
        l = Math.min(340, l);
        var t = ev.clientY - $(this).offset().top - 100 +$(document).scrollTop();
        t = Math.max(t, 0);
        t = Math.min(340, t);
      $("#mark").css({
        left: l,
        top: t
      })
      //放大的图片，反方向对应倍数移动
      $("#big img").css({
        left: -2 * l,
        top: -2 * t
      })
    })
  }) 



  
  function getiTarget() {
    var oBuffter = document.getElementById("buffer");
    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    var windowHeight =
      document.documentElement.clientHeight || document.body.clientHeight;

    //取整
    return parseInt(scrollTop + (windowHeight - oBuffter.offsetHeight) / 2);
  }

  StartMove(getiTarget());

  //绑定事件
  window.onscroll = function () {
    StartMove(getiTarget());
  };

  window.onresize = function () {
    StartMove(getiTarget());
  }

//回到顶部
// function Object(){
    $(function(){
    var d_top=$('#d-top');
    document.onscroll=function(){
        var scrTop=(document.body.scrollTop||document.documentElement.scrollTop);
        // if(scrTop>1000){
        //     d_top.show();
        // }else{
        //     d_top.hide();
        // }
    }
    $('#d-top-a').click(function(){
        scrollTo(0,0);
        this.blur();
        return false;
    });
});

}
var timer = null;
function StartMove(iTarget) {
  var oBuffter = document.getElementById("buffer");
  clearInterval(timer);
  timer = setInterval(function () {
    var speed = (iTarget - oBuffter.offsetTop) / 8;
    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

    if (oBuffter.offsetTop == iTarget) {
      clearInterval(timer);
    } else {
      oBuffter.style.top = oBuffter.offsetTop + speed + "px";
    }
  }, 30);
}


