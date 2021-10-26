  function strlen(str){//不得輸入全形及中文
    var len = 0;
    for (var i=0; i<str.length; i++) {
     var c = str.charCodeAt(i);
    //單字節加1
     if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {
       len++;
     }
     else {
　　　//漢字加2
      len+=20;
      if(str.match(/[\uff00-\uffff]/g))
      {  
        alert('不得輸入全形字或全形空格');
        break;
      }
     }
    }
    return len;
}
function illegalChar(str)//只可輸入英文數字，其他所有符號都不行
{ 
    var pattern=/[a-zA-Z_0-9]+/im;
    if(pattern.test(str))
    {
        
        return false;
    }
    else
    {
      if(str){
        alert('不得輸入特殊符號')
        return true;
      }
      else{
        return false;}
    }
}
function check_select(form){
      if(username.value=='' && email.value=='' && extension.value=='' && machno.value=='' && userid.value=='')
      {
        alert('請至少填入一欄報案人資訊');
        username.focus();
        return false;


      }
      else if(casetitle.value=='')
      {
        alert('主題不可為空');
        casetitle.focus();
        return false;


      }
      else if(mytext.value=='')
      {
        alert('摘要不可為空');
        mytext.focus();
        return false;


      }
      else if(type_id.value=='')
      {
        alert('請選擇業務類型');
        type_id.focus();
        return false;


      }
      else if(strlen(extension.value)>5 || illegalChar(extension.value))
      {
        alert('請檢查分機號碼輸入是否正確');
        extension.focus();
        return false;
      }
      else if(strlen(machno.value)>10 || illegalChar(machno.value))
      {
        alert('請檢查機器編號輸入是否正確');
        extension.focus();
        return false;
      }
      else if(strlen(userid.value)>6 || illegalChar(userid.value))
      {
        alert('請檢查員工編號輸入是否正確');
        extension.focus();
        return false;
      }
      else if(hashlen2(mytext.value))
      {
        alert('hashtag內容不得大於一百字');
        mytext.focus();
        return false;
      }



