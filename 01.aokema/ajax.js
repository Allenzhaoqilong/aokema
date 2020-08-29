//ES6的模块化方式引入我们的代码
export {
  $ajax,
  $get,
  $post,
  $_ajax
}


function $get(url, data, complete){
  $ajax({
    url: url,
    data: data,
    success: complete,
    error: complete
  })
}

function $post(url, data, complete){
  $ajax({
    type: 'post',
    url,
    data,
    success: complete,
    error: complete
  })
}

function $_ajax(requestObj){
  let {type, url, data} = requestObj;
  return new Promise((resolve, reject) => {
    $ajax({
      type,
      url,
      data,
      success: function(response){
        // 下载数据
        resolve(response)
      },
      error: function(msg){
        reject(msg);
      }
    })
  })
}

function $ajax({type = 'get', url, data, success, error}){
  type = type.toLowerCase();
  var xhr = null;
  try{
    xhr = new XMLHttpRequest();
  }catch(error){
    xhr = new ActiveXObject('"Microsoft.XMLHTTP"');
  }

  //调用open方法
  if(type == "get" && data){
    url += "?" + queryString(data);
  }
  xhr.open(type, url, true);

  if(type == "post"){
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    xhr.send(queryString(data));
  }else{
    xhr.send();
  }

  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
      if(xhr.status == 200){
        success && success(xhr.responseText);
      }else{
        error && error(xhr.status);
      }
    }
  }

}
function queryString(dataObj){
  var arr = [];
  for(var attr in dataObj){
    arr.push(attr + "=" + dataObj[attr]);
  }
  return arr.join("&");
}
