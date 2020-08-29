

import { $_ajax } from "./ajax.js";
var oBtn = document.getElementById("btn1");
var aInputs = document.querySelectorAll("#inPut input");
var oAlert = document.getElementById("alert");
oBtn.onclick = function () {
  $_ajax({
    type: "post",
    url: "enter.php",
    data: {
      phone: aInputs[0].value,
      password: aInputs[1].value,
    },
  })
    .then((res) => {
      //  console.log(res);
      var obj = JSON.parse(res);

      if(obj.code){
        oAlert.className = 'alert';
      }else{
        oAlert.className = 'alert';
        
      }
      oAlert.style.display = 'block';
      oAlert.innerHTML = obj.msg;
    })
    .catch((error) => {
      console.log(error);
    });
};


window.onload=function(){
  //缓冲菜单
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
