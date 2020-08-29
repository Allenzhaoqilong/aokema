
    window.onload = function () {
      //大轮播
      const oBanner = document.querySelector(".banner");
      const oImgBox = document.querySelector(".imgBox");
      const aBtns = document.querySelectorAll(".pointBox li");
      const aLeftRightBtns = document.querySelectorAll(".leftRightTabs a");
      let iNow = 1; //代表当前显示的图片的下标。
      let timer = null;
      let isRuning = false; //代表正在动画

      //给每一个按钮添加点击
      for (let i = 0; i < aBtns.length; i++) {
        aBtns[i].index = i;
        aBtns[i].onclick = function () {
          iNow = this.index + 1;
          //切换
          tab();
        };
      }
      //给整个banner图效果，添加移入
      oBanner.onmouseenter = function () {
        clearInterval(timer);
      };
      oBanner.onmouseleave = function () {
        timer = setInterval(function () {
          if (!isRuning) {
            isRuning = true; //动画开始
          } else {
            return;
          }
          iNow++;
          tab();
        }, 2000);
      };

      //给左右按钮添加点击
      aLeftRightBtns[0].onclick = function () {
        if (!isRuning) {
          isRuning = true; //动画开始
        } else {
          return;
        }
        iNow--;
        tab();
        return false;
      };

      aLeftRightBtns[1].onclick = function () {
        if (!isRuning) {
          isRuning = true; //动画开始
        } else {
          return;
        }
        iNow++;
        tab();
        return false;
      };

      //启动自动轮播
      timer = setInterval(function () {
        if (!isRuning) {
          isRuning = true; //动画开始
        } else {
          return;
        }
        iNow++;
        tab();
      }, 2000);

      function tab() {
        for (let i = 0; i < aBtns.length; i++) {
          aBtns[i].className = "";
        }
        if (iNow == 4) {
          aBtns[0].className = "active";
        } else if (iNow == 0) {
          aBtns[1].className = "active";
        } else {
          aBtns[iNow - 1].className = "active";
        }

        startMove(oImgBox, { left: -947 * iNow }, function () {
          //最后一张图片显示完毕以后，我们需要切回1这个图片
          if (iNow == 4) {
            iNow = 1;
            oImgBox.style.left = "-947px";
          } else if (iNow == 0) {
            iNow = 3;
            oImgBox.style.left = iNow * -947 + "px";
          }
          isRuning = false; //动画结束
        });
      }
  


//   小轮播图
      const aBanner = document.querySelector(".minbanner");
      const aImgBox = document.querySelector(".aimgBox");
      const oBtns = document.querySelectorAll(".aimgBox li")
      const oLeftRightBtns = document.querySelectorAll(".aleftRightTabs a");
      let aiNow = 1; //代表当前显示的图片的下标。
      let atimer = null;
      let aisRuning = false; //代表正在动画

      //给整个banner图效果，添加移入
      aBanner.onmouseenter = function () {
        clearInterval(atimer);
      };
      aBanner.onmouseleave = function () {
        atimer = setInterval(function () {
          if (!aisRuning) {
            aisRuning = true; //动画开始
          } else {
            return;
          }
          aiNow++;
          tAb();
        }, 500);
      };

      //给左右按钮添加点击
      oLeftRightBtns[0].onclick = function () {
        if (!aisRuning) {
          aisRuning = true; //动画开始
        } else {
          return;
        }
        aiNow--;
        tAb();
        return false;
      };

      oLeftRightBtns[1].onclick = function () {
        if (!aisRuning) {
          aisRuning = true; //动画开始
        } else {
          return;
        }
        aiNow++;
        tAb();
        return false;
      };

      //启动自动轮播
      atimer = setInterval(function () {
        if (!aisRuning) {
          aisRuning = true; //动画开始
        } else {
          return;
        }
        aiNow++;
        tAb();
      }, 500);

      function tAb() {
        for (let i = 0; i < oBtns.length; i++) {
          oBtns[i].className = "";
        }
        if (aiNow == 8) {
          oBtns[0].className = "active";
        } else if (aiNow == 0) {
          oBtns[6].className = "active";
        } else {
          oBtns[aiNow - 1].className = "active";
        }

        startMove(aImgBox, { left: -200 *aiNow}, function () {
          //最后一张图片显示完毕以后，我们需要切回1这个图片
          if (aiNow == 8) {
            aiNow = 1;
            aImgBox.style.left = "-200px";
          } else if (aiNow == 0) {
            aiNow = 7;
            aImgBox.style.left = aiNow * -20 + "px";
          }
          aisRuning = false; //动画结束
        });
      }




      //圆心点放大
        var oUl = document.getElementById("aucnm");
        var aLis = document.querySelectorAll("#aucnm li");
        var currenIndex = 1;

        /*
          布局的时候，相对定位
          放大的时候，必须使用绝对定位
          1、相对定位 转成 绝对定位
          2、从中心放大
        */
        for (var i = 0; i < aLis.length; i++) {
          aLis[i].style.left = aLis[i].offsetLeft + "px";
          aLis[i].style.top = aLis[i].offsetTop + "px";
        }
        for (var i = 0; i < aLis.length; i++) {
          aLis[i].style.position = "absolute";
          aLis[i].style.margin = "0px";
        }

        /*
          mouseenter
          mouseleave
          这里的事件委托，为了让经过子节点img触发移入和移出
          只能用 mouseover mouseout
        */
        oUl.onmouseover = function (ev) {
          var e = ev || window.event;
          var target = e.target || window.event.srcElement;
          if (target.nodeName.toLowerCase() == "img") {
            target.parentNode.style.zIndex = currenIndex++;
            startMove(target.parentNode, {
              width: 330,
              height: 253,
              marginLeft: -15,
              marginTop: -12,
            });
          }
        };

        oUl.onmouseout = function (ev) {
          var e = ev || window.event;
          var target = e.target || window.event.srcElement;
          if (target.nodeName.toLowerCase() == "img") {
            startMove(target.parentNode, {
              width: 300,
              height: 230,
              marginLeft: 0,
              marginTop: 0,
            });
          }
        };



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
        };
      };

      //回到顶部
     function Object(){
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
   }; 
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
   
      
