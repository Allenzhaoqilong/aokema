  
$(function(){
  sc_num();
  
  $.ajax({
    type: 'get',
    url: "./data.json",
    success: function(arr){
      //  var cookieStr = $.cookie("goods");
      //  //在cookie中取出数据
      //   var newArr = [];
      //   var cookieArr = JSON.parse(cookieStr);
      var newArr = [];
      var cookieArr=JSON.parse($.cookie("goods"));
    for (var i = 0; i < cookieArr.length; i++) {
      for (var j = 0; j < arr.length; j++) {
         if (arr[j].id == cookieArr[i].id) {
           arr[j].num = cookieArr[i].num;
           newArr.push(arr[j]);
           break;
      }
    }
  }
  let str = ``;
  for(var i = 0; i < newArr.length;i++){
  str += ` 
  <li class="item-list" id="${newArr[i].id}">
      <div class="item_input">
          <input type="checkbox">
      </div>
        <div class="item_img"><a href="./detail.html"><img src="${arr[i].img}" alt=""></a></div>
        <div class="item_title">
            <p>${arr[i].title}</p>
            <p>9755400009306700003</p>
        </div>
        <div class="item_price1">${arr[i].price}</div>
        <div class="item_num">
              <button>+</button>
              <span>${newArr[i].num}</span>
              <button>-</button>
        </div>
        <div class="item_price2">${arr[i].price}</div>
        <div class="item_out">移出</div>
    </li>`
    
    };
    $("#item").html(str);
    // error: function(msg){
    //   console.log(msg);
    // }
  }
  })
  //通过事件委托给商品添加事件委托
  $("#item").on("click", ".item_out", function(){
    //1、页面上删除
    var id = $(this).closest("li").remove().attr("id");
    //2、通过cookie删除
    var cookieArr = JSON.parse($.cookie("goods"));
    var index = cookieArr.findIndex(item => item.id == id);
    //删除
    cookieArr.splice(index, 1);
    if(cookieArr.length){
      $.cookie("goods", JSON.stringify(cookieArr), {
        expires: 7
      })
    }else{
      $.cookie("goods", null);
    }
    sc_num();
  })


  //给+和-添加事件
$("#item").on("click", ' button', function(){

  var id = $(this).closest("li").attr("id");
  console.log(id);
  //从cookie中找出这个id的数据
  var cookieArr=[];
   cookieArr = JSON.parse($.cookie("goods"));
  console.log(cookieArr);
  var index = cookieArr.findIndex(item => item.id == id);
  console.log(index);
  if(this.innerHTML == "+"){
    console.log("1");
    console.log(cookieArr[index]);
    cookieArr[index].num++;
    $("")
  }else{
    cookieArr[index].num == 1 ? alert("数量为1，不能减少") : cookieArr[index].num--;
  }
  //改变页面上的数量
  $(this).siblings("span").html(cookieArr[index].num);
  //将改变完成数量的cookie存储回去
  $.cookie("goods", JSON.stringify(cookieArr), {
    expires: 7
  })
  sc_num();
})


//计算购物车中商品的数量
function sc_num(){
  var cookieStr = $.cookie("goods");
  var sum = 0;
  if(cookieStr){
    var cookieArr = JSON.parse(cookieStr);
    for(var i = 0; i < cookieArr.length; i++){
      sum += cookieArr[i].num;
    }
  }
  $(".Settlement .sc_num").html(sum);
}

//计算购物车中商品总金额
// function sc_total(){
//   var cookieStr = $.cookie("goods");
//   var sum1 = 0;
//   if(cookieStr){
//     var cookieArr = JSON.parse(cookieStr);
//     for(var i = 0; i < cookieArr.length; i++){
//       sum1 += cookieArr[i].price;
//     }
//   }
//   $(".Settlement .sc_total").html(sum1);
  
// }
// console.log(sum1);


})







window.onload=function(){
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
